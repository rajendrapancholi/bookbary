import { useMutation } from '@tanstack/react-query';
import { Trash2 } from 'lucide-react';
import React from 'react';
import toast from 'react-hot-toast';
import { deleteBookById } from '../../api/bookApi';
import { useNavigate } from 'react-router-dom';

interface DeleteBookButtonProps {
    bookId: number;
}
const DeleteBookButton: React.FC<DeleteBookButtonProps> = ({ bookId }) => {
    const navigate = useNavigate();
    const mutation = useMutation({
        mutationFn: (bookId: number) => deleteBookById(bookId),
        onMutate: (): { toastId: string; } => {
            const toastId = toast.loading("Deleting book...");
            return { toastId };
        },
        onSuccess: (data, _, context) => {
            if (data.success) {
                toast.dismiss(context.toastId);
                toast.success(data.message, {
                    duration: 3000,
                });
                navigate("/admin/manage-books");
            }
        },
        onError: (error, _, context) => {
            console.log(error);
            toast.dismiss(context?.toastId);
            toast.error(`Error deleting book: ${error}`, {
                duration: 3000,
            });
        },
    });
    // Handle delete action
    const handleDelete = () => {
        const isConfirmed = window.confirm("Are you sure you want to delete this book?");
        if (isConfirmed) {
            mutation.mutate(bookId);
        }
    };
    return (
        <button
            onClick={handleDelete}
            disabled={mutation.status === "pending"}
            className="relative group font-medium text-red-600/70 dark:text-red-500/70 hover:text-red-500 active:scale-95 transition-all duration-200 ease-in-out flex-center">
            <Trash2 />
            <span className="absolute text-xs top-full opacity-0 group-hover:opacity-100 group-hover:delay-500 transition-all duration-300 ease-in-out z-50 rounded-md px-1 mt-1  bg-red-300/50 text-red-800">
                Remove
            </span>
            {mutation.isPending ? 'Deleting...' : ''}
        </button>
    );
};
export default DeleteBookButton;
