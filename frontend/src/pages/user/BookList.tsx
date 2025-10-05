import React from "react";
import { useQuery } from "@tanstack/react-query";
import { BookType, fetchBooks } from "../../api/bookApi";
import { AxiosResponse } from "axios";
import { CirclePlus, Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../features/cartSlice"; // Import Redux actions
import { RootState } from "../../redux/store";
import toast from "react-hot-toast";

const BookList: React.FC = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state: RootState) => state.cart.cart);

    const { data, isLoading, error } = useQuery<BookType[]>({
        queryKey: ["books"], // Unique key for the query (cache identifier)
        queryFn: async (): Promise<BookType[]> => {
            const response: AxiosResponse<BookType[]> = await fetchBooks();
            if (response.status === 200) {
                return response.data;
            }
            throw new Error("Failed to fetch books");
        },
    });

    // Loading and error states
    if (isLoading && !data) {
        return <div className="text-center py-5">Loading books...</div>;
    }

    if (error) {
        return (
            <div className="text-center py-5 text-red-500">
                Error loading books. Please try again.
            </div>
        );
    }

    const handleAddToCart = (book: BookType) => {
        dispatch(addToCart(book)); // Dispatch action to add to cart
        toast.success("Book added to cart"); // Show success message
    };

    const handleRemoveFromCart = (bookId: number) => {
        dispatch(removeFromCart(bookId)); // Dispatch action to remove from cart
        toast.success("Book removed from cart"); // Show warning message
    };

    return (
        <div className="relative mx-2 overflow-clip shadow-md sm:rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 self-center whitespace-nowrap bg-gradient-to-r bg-clip-text text-transparent from-amber-600 via-amber-500 to-amber-400">
                Book List
            </h2>
            {/* Data Table */}
            <table className="overflow-hidden w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-800/50 dark:text-gray-400 rounded-2xl">
                    <tr>
                        <th scope="col" className="px-6 py-3">Book Name</th>
                        <th scope="col" className="px-6 py-3">Price</th>
                        <th scope="col" className="px-6 py-3">Category</th>
                        <th scope="col" className="px-6 py-3">Edition</th>
                        <th scope="col" className="px-6 py-3">Availability</th>
                        <th scope="col" className="px-6 py-3">Action</th>
                    </tr>
                </thead>
                <tbody className="sm:rounded-lg">
                    {data?.map((book) => (
                        <tr
                            key={book.bookId}
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                        >
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                {book.title}
                            </th>
                            <td className="px-6 py-4">{book.price}</td>
                            <td className="px-6 py-4">{book.category_name}</td>
                            <td className="px-6 py-4">{book.edition}</td>
                            <td className="px-6 py-4">{book.bookId % 2 === 0 ? "Available" : "Booked"}</td>
                            <td className="px-6 py-4 *:cursor-pointer">
                                {cart.some((item) => item.bookId === book.bookId) ? (
                                    <button
                                        onClick={() => handleRemoveFromCart(book.bookId)}
                                        className="relative group font-medium text-red-600/70 dark:text-red-500/70 hover:text-red-500 active:scale-95 transition-all duration-200 ease-in-out flex-center"
                                    >
                                        <Trash2 />
                                        <span className="absolute text-xs left-full opacity-0 group-hover:opacity-100 group-hover:delay-500 transition-all duration-300 ease-in-out ml-1 z-50">
                                            Remove from cart
                                        </span>
                                    </button>

                                ) : (
                                    <button
                                        onClick={() => handleAddToCart(book)}
                                        className="relative group font-medium text-amber-500/70 hover:text-amber-500 active:scale-95 transition-all duration-200 ease-in-out flex-center"
                                    >
                                        <CirclePlus />
                                        <span className="absolute text-xs left-full opacity-0 group-hover:opacity-100 group-hover:delay-500 transition-all duration-300 ease-in-out ml-2 z-50">
                                            Add to cart
                                        </span>
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BookList;
