import { useParams, useNavigate } from 'react-router-dom';
import { fetchBookById, FetchBookType, updateBookById, UpdateBookType } from '../../api/bookApi';
import toast from 'react-hot-toast';
import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { BookCategorytType, fetchCategories } from '../../api/categoryApi';
import { BookAuthourType, fetchAuthors } from '../../api/authorApi';
import { useEffect, useState } from 'react';

const EditBook: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState<UpdateBookType>({
        bookId: "",
        title: "",
        price: "",
        quantity: "",
        cat_id: "",
        edition: "",
        auth_id: "",
    });
    // Fetch the book by ID
    const { data: book, isLoading: isBkLoading } = useQuery<FetchBookType>({
        queryKey: ["book", id],
        queryFn: async () => {
            if (!id) {
                throw new Error("Book ID is undefined");
            }
            const response: AxiosResponse<FetchBookType> = await fetchBookById(id);
            if (response.status === 200) {
                return response.data;
            }
            throw new Error("Failed to fetch book");
        },
        enabled: !!id,
    });

    // Fetch book categories
    const { data: bookCategory, isLoading: isCatLoading } = useQuery<BookCategorytType[]>({
        queryKey: ["bookCategories"],
        queryFn: async () => {
            const response = await fetchCategories();
            if (response.status === 200) {
                return response.data;
            }
            throw new Error("Failed to fetch categories");
        },
    });

    // Fetch book authors
    const { data: bookAuthors, isLoading: isAthLoading } = useQuery<BookAuthourType[]>({
        queryKey: ["bookAuthors"],
        queryFn: async () => {
            const response = await fetchAuthors();
            if (response.status === 200) {
                return response.data;
            }
            throw new Error("Failed to fetch authors");
        },
    });


    // Update the form data when book data is loaded
    useEffect(() => {
        if (book) {
            const updatedData = {
                bookId: book.data.bookId,
                title: book.data.title,
                price: book.data.price,
                quantity: book.data.quantity,
                cat_id: book.data.cat_id,
                edition: book.data.edition,
                auth_id: book.data.auth_id,
            };
            setFormData(updatedData);
        }
    }, [book]);

    // Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const mutation = useMutation({
        mutationFn: (updatedBook: UpdateBookType) => updateBookById(updatedBook),
        onMutate: (_) => {
            // Show loading toast when mutation starts
            const toastId = toast.loading("Updating book...");
            return { toastId }; // Return toastId as context
        },

        onSuccess: (data, _, context) => {
            // onSuccess: (data, variables, context) => {
            // Here `data` is the response from updateBookById
            // `variables` is the `updatedBook` object that was passed in when you called `mutation.mutate()`
            // variables(or `_`) has: {bookId: 2, title: 'The God of Small Things', price: '248.000', quantity: 10, cat_id: 1, …}
            // `context` is the object returned from `onMutate`, which contains `toastId`
            if (data.success) {
                toast.dismiss(context.toastId);
                toast.success(data.message, {
                    duration: 3000,
                });
                navigate("/admin/manage-books");
            }
        },
        onError: (error, variables, context) => {
            toast.dismiss(context?.toastId);
            toast.error(`Error updating book: ${error}`, {
                duration: 3000,
            });
            navigate(`/admin/book/${variables.bookId}`);  // Using variables (updatedBook) to go to the right page
        },
    });

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutation.mutate(formData);
    };
    if (isBkLoading || isCatLoading || isAthLoading || !book || !bookCategory || !bookAuthors) {
        return <div>Loading...</div>;
    }

    return (
        <div className="max-w-4xl mx-auto">
            {formData && (
                <>
                    <h2 className="text-3xl font-semibold text-center mb-4">{formData.bookId}</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Title */}
                        <div className="mb-6">
                            <label htmlFor="title" className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Title</label>
                            <input
                                id="title"
                                type="text"
                                value={formData.title}
                                onChange={handleChange}
                                name="title"
                                className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
                                placeholder={formData.title}
                                required
                            />
                        </div>

                        {/* Price */}
                        <div className="mb-6">
                            <label htmlFor="price" className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Price</label>
                            <input
                                id="price"
                                type="number"
                                value={formData.price || ''}
                                onChange={handleChange}
                                name="price"
                                className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
                                placeholder={String(formData.price) || 'Price'}
                                required
                            />
                        </div>
                        {/* Quantity */}
                        <div className="mb-6">
                            <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Quantity</label>
                            <input
                                id="quantity"
                                type="number"
                                value={formData.quantity || ''}
                                onChange={handleChange}
                                name="quantity"
                                className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
                                placeholder={formData.quantity}
                                required
                            />
                        </div>

                        {/* Category */}
                        <div className="mb-6">
                            <label htmlFor="category" className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Category</label>
                            <select
                                id="category"
                                value={formData.cat_id}
                                onChange={handleChange}
                                name="cat_id"
                                className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
                                required
                            >
                                <option value="">Select a category</option>
                                {bookCategory?.map((category) => (
                                    <option key={category.cat_id} value={category.cat_id}>
                                        {`${category.cat_id}: ${category.category_name}`}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Edition */}
                        <div className="mb-6">
                            <label htmlFor="edition" className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Edition</label>
                            <input
                                id="edition"
                                type="text"
                                value={formData.edition}
                                onChange={handleChange}
                                name="edition"
                                className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
                                placeholder="Edition"
                                required
                            />
                        </div>

                        {/* Author */}
                        <div className="mb-6">
                            <label htmlFor="author" className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Author</label>
                            <select
                                id="author"
                                value={formData.auth_id || ''}
                                onChange={handleChange}
                                name="auth_id"
                                className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
                                required
                            >
                                <option value="">Select an author</option>
                                {bookAuthors?.map((author) => (
                                    <option key={author.authId} value={author.authId}>
                                        {`${author.authId}: ${author.auth_name}`}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Submit */}
                        <div>
                            <button
                                type="submit"
                                disabled={mutation.isPending}
                                className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 cursor-pointer"
                            >
                                Save Changes
                            </button>

                        </div>
                    </form>
                </>
            )}
        </div>
    );
};

export default EditBook;
