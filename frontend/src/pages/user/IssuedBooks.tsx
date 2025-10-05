import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchReturnBookById, ReturnBookType } from "../../api/bookApi";
import { AxiosResponse } from "axios";
import { formateDate } from "../../utils/helper";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";


const IssuedBooks: React.FC = () => {
    const [showReturned, setShowReturned] = useState(false);
    const userId = useSelector((state: RootState) => state.auth.user?.id);
    const getBooks = async (): Promise<ReturnBookType[]> => {
        try {
            if (!userId) {
                throw new Error("User ID is undefined");
            }
            const response: AxiosResponse<ReturnBookType[]> = await fetchReturnBookById(userId);
            // const response: AxiosResponse<ReturnBookType[]> = await fetchReturnBooks();
            if (response.status === 200) {
                console.log(response.data);
                return response.data;
            }
            throw new Error("Failed to fetch books");
        } catch (error) {
            console.error("Failed to fetch data:", error);
            throw error;
        }
    };

    const { data, isLoading, error } = useQuery<ReturnBookType[]>({
        queryKey: ["returnbooks"],
        queryFn: getBooks,
    });

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

    const filteredBooks = data?.filter((book) => Boolean(book.isReturn) === showReturned) || [];
    console.log("filterr book:", filteredBooks);
    return (
        <div className="relative max-h-[90vh] mx-2 overflow-auto">
            {/* Toggle Button */}
            <div className="flex justify-between items-center my-4">
                <h2 className="text-2xl font-semibold mb-4 self-center whitespace-nowrap bg-gradient-to-r bg-clip-text text-transparent from-amber-600 via-amber-500 to-amber-400">

                    {showReturned ? "Returned Books" : "Not Returned Books"}
                </h2>
                <button
                    onClick={() => setShowReturned(!showReturned)}
                    className="px-3 py-2 dark:text-amber-50 font-semibold rounded-lg shadow-lg transition-all bg-gradient-btn cursor-pointer"
                >
                    Show {showReturned ? "Not Returned" : "Returned"} Books
                </button>
            </div>

            {/* Table */}
            <div className="overflow-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-800/50 dark:text-gray-400 rounded-2xl">
                        <tr>
                            <th className="px-6 py-3">Book Name</th>
                            <th className="px-6 py-3">Price</th>
                            <th className="px-6 py-3">Issue Date</th>
                            <th className="px-6 py-3">Due Date</th>
                            {showReturned && (
                                <th className="px-6 py-3">Return Date</th>
                            )}
                            <th className="px-6 py-3">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredBooks.map((book, id: number) => (
                            <tr
                                key={id}
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                            >
                                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {book.title}
                                </th>
                                <td className="px-6 py-4">{book.price}</td>
                                <td className="px-6 py-4">{formateDate(book.issue_date)}</td>
                                <td className="px-6 py-4">{formateDate(book.due_date)}</td>
                                {showReturned &&

                                    <td className="px-6 py-4">{formateDate(book.return_date)}</td>
                                }
                                <td className="px-6 py-4">
                                    {book.isReturn ? "Returned" : "Not Returned"}
                                </td>
                            </tr>
                        ))}
                        {filteredBooks.length === 0 && (
                            <tr>
                                <td colSpan={7} className="text-center py-4 text-gray-600 dark:text-gray-300">
                                    No books to show.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default IssuedBooks;
