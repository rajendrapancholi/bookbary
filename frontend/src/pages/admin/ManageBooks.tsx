import { PencilLine } from 'lucide-react';
import React, { useState } from 'react';
import { BookType, fetchBooks } from '../../api/bookApi';
import { AxiosResponse } from 'axios';
import { useQuery } from '@tanstack/react-query';
import { NavLink } from 'react-router-dom';
import DeleteBookButton from '../../components/Admin/DeleteBookButton';

const ManageBooks: React.FC = () => {
    const [searchId, setSearchId] = useState<string>('');
    const { data, isLoading, error } = useQuery<BookType[]>({
        queryKey: ["books"],
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
    // Handle Search changesss
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchId(e.target.value);
    };

    // Filter books by search ID or Titel
    const filteredBooks = data?.filter((book) =>
        book.bookId.toString().includes(searchId) || book.title.toLowerCase().includes(searchId.toLowerCase())
    );
    return (
        <div className="relative mx-2 shadow-md sm:rounded-lg">
            <span className='flex justify-between items-center my-auto mx-2'>
                <h2 className="mx-3 text-3xl font-semibold self-center whitespace-nowrap bg-gradient-to-r bg-clip-text text-transparent from-amber-600 via-amber-500 to-amber-400">
                    Book List
                </h2>
                <span className="flex items-center gap-3 p-2 flex-wrap">
                    <label htmlFor="bookId" className="text-sm font-medium dark:text-gray-200">
                        Search
                    </label>
                    <input
                        type="search"
                        name="bookId"
                        id="bookId"
                        placeholder="Enter book ID/Title"
                        value={searchId}
                        onChange={handleSearchChange}
                        className="px-2 py-1 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none outline-none focus:ring-2 focus:ring-cyan-400 dark:bg-gray-800/40 dark:text-white w-60"
                    />
                </span>
                <NavLink to='/admin/add-book' className="my-2 px-4 py-2 text-xl dark:text-neutral-800 font-bold rounded-lg shadow-lg transition-all bg-gradient-btn active:scale-95 cursor-pointer">
                    Add book
                </NavLink>
            </span>

            <div className="overflow-x-auto max-h-[75vh] rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-800/50 dark:text-gray-400">
                        <tr>
                            <th className="px-6 py-3">Book ID</th>
                            <th className="px-6 py-3">Title</th>
                            <th className="px-6 py-3">Price</th>
                            <th className="px-6 py-3">Quantity</th>
                            <th className="px-6 py-3">Category</th>
                            <th className="px-6 py-3">Edition</th>
                            <th className="px-6 py-3">Availability</th>
                            <th className="px-6 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredBooks?.map((book) => (
                            <tr
                                key={book.bookId}
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                            >
                                <th className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                                    {book.bookId}
                                </th>
                                <td className="px-6 py-4">{book.title}</td>
                                <td className="px-6 py-4">{book.price}</td>
                                <td className="px-6 py-4">{book.quantity}</td>
                                <td className="px-6 py-4">{book.category_name}</td>
                                <td className="px-6 py-4">{book.edition}</td>
                                <td className="px-6 py-4">
                                    {book.quantity === 0 ? "Booked" : "Available"}
                                </td>
                                <td className="px-6 py-4 flex items-center gap-1 *:cursor-pointer">
                                    <NavLink to={`/admin/edit-book/${book.bookId}`}
                                        className="relative group font-medium text-amber-600/70 dark:text-amber-500/70 hover:text-amber-500 active:scale-95 transition-all duration-200 ease-in-out flex-center"
                                    >
                                        <PencilLine />
                                        <span className="absolute text-xs top-full opacity-0 group-hover:opacity-100 group-hover:delay-500 transition-all duration-300 ease-in-out z-50 rounded-md px-1 mt-1  bg-amber-300/50 text-amber-800">
                                            Edit
                                        </span>
                                    </NavLink>
                                    <DeleteBookButton bookId={book.bookId} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default ManageBooks;