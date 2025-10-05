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
    // Toggle AddDataForm
    const [showAddCategory, setShowAddCategory] = useState(false);
    const [showAddAuthor, setShowAddAuthor] = useState(false);
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const [formData, setFormData] = useState<UpdateBookType>({
        title: "",
        price: "",
        quantity: "",
        cat_id: "",
        edition: "",
        auth_id: "",
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

    // Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const mutation = useMutation({
        mutationFn: (newBook: UpdateBookType) => createBook(newBook),
        onMutate: (_) => {
            // Show loading toast when mutation starts
            const toastId = toast.loading("Creating book...");
            return { toastId }; // Return toastId as context
        },

        onSuccess: (data, _, context) => {
            /* onSuccess: (data, variables, context) => {
                Here `data` is the response from updateBookById
                `variables` is the `updatedBook` object that was passed in when you called `mutation.mutate()`
                variables(or `_`) has: {bookId: 2, title: 'The God of Small Things', price: '248.000', quantity: 10, cat_id: 1, …}
                `context` is the object returned from `onMutate`, which contains `toastId`
            */
            if (data.success) {
                toast.dismiss(context.toastId);
                toast.success(data.message, {
                    duration: 3000,
                });
                navigate("/admin/manage-books");
            }
        },
        onError: (error, _, context) => {
            toast.dismiss(context?.toastId);
            toast.error(`Error creating a book: ${error}`, {
                duration: 3000,
            });
            navigate(`/admin/manage-books`);  // Using variables (updatedBook) to go to the right page
        },
    });

    // Handle form submission
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
        <div className="relative max-w-4xl mx-auto mb-4">
            {formData && (
                <>
                    <h2 className="text-3xl font-semibold text-center mb-4">Fill Book Details</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Title */}
                        <div className="mb-6">
                            <label htmlFor="title" className="block mb-2 text-sm font-medium text-amber-700 dark:text-amber-500">Title</label>
                            <input
                                id="title"
                                type="text"
                                value={formData.title}
                                onChange={handleChange}
                                name="title"
                                className="inputField"
                                placeholder="Enter book title"
                                required
                            />
                        </div>
                        <div className="mb-6 flex gap-1 md:gap-3 lg:gap-10 justify-between items-center">


                            {/* Price */}
                            <div className="flex-1/2">
                                <label htmlFor="price" className="block mb-2 text-sm font-medium text-amber-700 dark:text-amber-500">Price</label>
                                <input
                                    id="price"
                                    type="number"
                                    value={formData.price || ''}
                                    onChange={handleChange}
                                    name="price"
                                    className="inputField"
                                    placeholder='Price'
                                    required
                                />
                            </div>
                            {/* Quantity */}
                            <div className="flex-1/2">
                                <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-amber-700 dark:text-amber-500">Quantity</label>
                                <input
                                    id="quantity"
                                    type="number"
                                    value={formData.quantity || ''}
                                    onChange={handleChange}
                                    name="quantity"
                                    className="inputField"
                                    placeholder="Enter book quantity"
                                    required
                                />
                            </div>
                        </div>
                        {/* Edition */}
                        <div className="mb-6">
                            <label htmlFor="edition" className="block mb-2 text-sm font-medium text-amber-700 dark:text-amber-500">Edition</label>
                            <input
                                id="edition"
                                type="text"
                                value={formData.edition}
                                onChange={handleChange}
                                name="edition"
                                className="inputField"
                                placeholder="Edition"
                                required
                            />
                        </div>

                        <div className="mb-6 flex gap-1 md:gap-3 lg:gap-10 justify-between items-center">
                            {/* Category */}
                            <div className='flex-1/2'>
                                <label htmlFor="category" className="block mb-2 text-sm font-medium text-amber-700 dark:text-amber-500">Category</label>
                                <select
                                    id="category"
                                    value={formData.cat_id}
                                    onChange={handleChange}
                                    name="cat_id"
                                    className="inputField"
                                    required
                                >
                                    <option value="">Select a category</option>
                                    {bookCategory?.map((category) => (
                                        <option key={category.cat_id} value={category.cat_id} className="bg-gray-200 dark:bg-gray-600">
                                            {`${category.cat_id}: ${category.category_name}`}
                                        </option>
                                    ))}
                                </select>
                                <span className='my-1 text-gray-400'>
                                    Can't find the category?
                                    <button
                                        onClick={() => setShowAddCategory(true)}
                                        className=" mx-1 hover:text-gray-200 hover:underline cursor-pointer"
                                    >
                                        Create category
                                    </button>
                                </span>
                            </div>

                            {/* Author */}
                            <div className="flex-1/2">
                                <label htmlFor="author" className="block mb-2 text-sm font-medium text-amber-700 dark:text-amber-500">Author</label>
                                <select
                                    id="author"
                                    value={formData.auth_id || ''}
                                    onChange={handleChange}
                                    name="auth_id"
                                    className="inputField"
                                    required
                                >
                                    <option value="">Select an author</option>
                                    {bookAuthors?.map((author) => (
                                        <option key={author.authId} value={author.authId} className='bg-gray-200 dark:bg-gray-600'>
                                            {`${author.authId}: ${author.auth_name}`}
                                        </option>
                                    ))}
                                </select>
                                <span className='my-1 text-gray-400'>
                                    Can't find the author?
                                    <button
                                        onClick={() => setShowAddAuthor(true)}
                                        className="mx-1 hover:text-gray-200 hover:underline cursor-pointer"
                                    >
                                        Create author
                                    </button>
                                </span>
                            </div>
                        </div>



                        {/* Submit */}
                        <div className='flex justify-between items-center gap-2'>
                            <button
                                type="submit"
                                disabled={mutation.isPending}
                                className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 cursor-pointer"
                            >
                                Save Changes
                            </button>
                            <button
                                type="reset"
                                onClick={handleReset}
                                className="text-red-600 bg-red-200 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center hover:bg-red-300 cursor-pointer"
                            >
                                Reset
                            </button>
                            <NavLink to="/admin/manage-books"
                                onClick={handleReset}
                                className="text-amber-600 bg-amber-200 focus:ring-4 focus:outline-none focus:amber-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center hover:bg-amber-300 cursor-pointer"
                            >
                                Cencel
                            </NavLink>

                        </div>
                    </form>
                </>
            )}
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
