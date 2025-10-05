import { useNavigate } from 'react-router-dom';
import { createBook, UpdateBookType } from '../../api/bookApi';
import toast from 'react-hot-toast';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { BookCategorytType, fetchCategories } from '../../api/categoryApi';
import { BookAuthourType, fetchAuthors } from '../../api/authorApi';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import AddDataForm from '../../components/Admin/AddDataForm';

const AddBook: React.FC = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    // Toggle AddDataForm
    const [showAddCategory, setShowAddCategory] = useState(false);
    const [showAddAuthor, setShowAddAuthor] = useState(false);
    const [formData, setFormData] = useState<UpdateBookType>({
        title: "",
        price: "",
        quantity: "",
        cat_id: "",
        edition: "",
        auth_id: "",
    });


    // Fetch categories
    const { data: bookCategory, isLoading: isCatLoading } = useQuery<BookCategorytType[]>({
        queryKey: ["bookCategories"],
        queryFn: async () => {
            const response = await fetchCategories();
            if (response.status === 200) return response.data;
            throw new Error("Failed to fetch categories");
        },
    });

    // Fetch authors
    const { data: bookAuthors, isLoading: isAthLoading } = useQuery<BookAuthourType[]>({
        queryKey: ["bookAuthors"],
        queryFn: async () => {
            const response = await fetchAuthors();
            if (response.status === 200) return response.data;
            throw new Error("Failed to fetch authors");
        },
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const mutation = useMutation({
        mutationFn: (newBook: UpdateBookType) => createBook(newBook),
        onMutate: () => {
            const toastId = toast.loading("Creating book...");
            return { toastId };
        },
        onSuccess: (data, _, context) => {
            if (data.success) {
                toast.dismiss(context.toastId);
                toast.success(data.message, { duration: 3000 });
                navigate("/admin/manage-books");
            }
        },
        onError: (error, _, context) => {
            toast.dismiss(context?.toastId);
            toast.error(`Error creating a book: ${error}`, { duration: 3000 });
        },
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutation.mutate(formData);
    };

    const handleReset = () => {
        setFormData({
            title: "",
            price: "",
            quantity: "",
            cat_id: "",
            edition: "",
            auth_id: "",
        });
    };

    // Refetch categories/authors when modal closes
    const handleCloseCategory = (value: boolean) => {
        setShowAddCategory(value);
        if (!value) queryClient.invalidateQueries({ queryKey: ["bookCategories"] });
    };

    const handleCloseAuthor = (value: boolean) => {
        setShowAddAuthor(value);
        if (!value) queryClient.invalidateQueries({ queryKey: ["bookAuthors"] });
    };

    if (isCatLoading || isAthLoading || !bookCategory || !bookAuthors) {
        return <div>Loading...</div>;
    }

    return (
        <div className="max-w-4xl mx-auto mb-4">
            <h2 className="text-3xl font-semibold text-center mb-4">Fill Book Details</h2>

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
                        className="bg-green-50 border border-green-500 text-green-900 text-sm rounded-lg block w-full p-2.5"
                        placeholder="Enter book title"
                        required
                    />
                </div>

                {/* Price & Quantity */}
                <div className="mb-6 flex gap-6">
                    <div className="w-1/2">
                        <label htmlFor="price" className="block mb-2 text-sm font-medium text-green-700">Price</label>
                        <input
                            id="price"
                            type="number"
                            value={formData.price}
                            onChange={handleChange}
                            name="price"
                            className="bg-green-50 border border-green-500 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Price"
                            required
                        />
                    </div>
                    <div className="w-1/2">
                        <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-green-700">Quantity</label>
                        <input
                            id="quantity"
                            type="number"
                            value={formData.quantity}
                            onChange={handleChange}
                            name="quantity"
                            className="bg-green-50 border border-green-500 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Quantity"
                            required
                        />
                    </div>
                </div>

                {/* Edition */}
                <div className="mb-6">
                    <label htmlFor="edition" className="block mb-2 text-sm font-medium text-green-700">Edition</label>
                    <input
                        id="edition"
                        type="text"
                        value={formData.edition}
                        onChange={handleChange}
                        name="edition"
                        className="bg-green-50 border border-green-500 text-sm rounded-lg block w-full p-2.5"
                        placeholder="Edition"
                        required
                    />
                </div>

                {/* Category & Author */}
                <div className="mb-6 flex gap-6">
                    {/* Category */}
                    <div className="w-1/2">
                        <label htmlFor="cat_id" className="block mb-2 text-sm font-medium text-green-700">Category</label>
                        <select
                            name="cat_id"
                            value={formData.cat_id}
                            onChange={handleChange}
                            className="bg-green-50 border border-green-500 text-sm rounded-lg block w-full p-2.5"
                            required
                        >
                            <option value="">Select a category</option>
                            {bookCategory.map(category => (
                                <option key={category.cat_id} value={category.cat_id}>
                                    {category.cat_id}: {category.category_name}
                                </option>
                            ))}
                        </select>
                        <div className="text-sm text-gray-500 mt-1">
                            Can't find it?{" "}
                            <button onClick={() => setShowAddCategory(true)} className="text-blue-600 hover:underline">
                                Create category
                            </button>
                        </div>
                    </div>

                    {/* Author */}
                    <div className="w-1/2">
                        <label htmlFor="auth_id" className="block mb-2 text-sm font-medium text-green-700">Author</label>
                        <select
                            name="auth_id"
                            value={formData.auth_id}
                            onChange={handleChange}
                            className="bg-green-50 border border-green-500 text-sm rounded-lg block w-full p-2.5"
                            required
                        >
                            <option value="">Select an author</option>
                            {bookAuthors.map(author => (
                                <option key={author.authId} value={author.authId}>
                                    {author.authId}: {author.auth_name}
                                </option>
                            ))}
                        </select>
                        <div className="text-sm text-gray-500 mt-1">
                            Can't find it?{" "}
                            <button onClick={() => setShowAddAuthor(true)} className="text-blue-600 hover:underline">
                                Create author
                            </button>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className='flex justify-between gap-3'>
                    <button
                        type="submit"
                        disabled={mutation.isPending}
                        className="bg-green-700 text-white px-5 py-2 rounded hover:bg-green-800"
                    >
                        Save Changes
                    </button>
                    <button
                        type="reset"
                        onClick={handleReset}
                        className="bg-red-200 text-red-700 px-5 py-2 rounded hover:bg-red-300"
                    >
                        Reset
                    </button>
                    <NavLink
                        to="/admin/manage-books"
                        onClick={handleReset}
                        className="bg-amber-200 text-amber-700 px-5 py-2 rounded hover:bg-amber-300"
                    >
                        Cancel
                    </NavLink>
                </div>
            </form>

            {/* Popups */}
            <AddDataForm
                showSettings={showAddCategory}
                setShowSettings={handleCloseCategory}
                type="category"
            />
            <AddDataForm
                showSettings={showAddAuthor}
                setShowSettings={handleCloseAuthor}
                type="author"
            />
        </div>
    );
};

export default AddBook;
