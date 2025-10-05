import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { IndianRupee, Trash2 } from "lucide-react";
import { AppDispatch, RootState } from "../../redux/store";
import { removeFromCart } from "../../features/cartSlice";
import toast from "react-hot-toast";
import GeneratePDF from "../GeneratePdf";

const UserCart: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const cart = useSelector((state: RootState) => state.cart.cart);
    const user = useSelector((state: RootState) => state.auth.user);
    const handleRemoveFromCart = (bookId: number) => {
        dispatch(removeFromCart(bookId));
        toast.success("Book removed from cart");
    };

    return (
        <div className="max-w-7xl mx-auto px-6 py-4">
            <h2 className="text-2xl font-semibold mb-4 self-center whitespace-nowrap bg-gradient-to-r bg-clip-text text-transparent from-amber-600 via-amber-500 to-amber-400">Your Cart</h2>
            {cart.length === 0 ? (
                <p className="text-lg text-gray-500">Your cart is empty!</p>
            ) : (
                <div className="space-y-4">
                    {cart.map((item) => (
                        <div key={item.bookId} className="flex items-center justify-between dark:bg-gray-800 bg-gray-100 p-4 rounded-lg shadow-md">
                            <div className="flex items-center space-x-4 dark:text-gray-200">
                                <span className="font-medium text-lg flex-center">
                                    {item.title}
                                    <span className="font-medium mx-1 text-xs dark:text-gray-300">( {item.edition} )</span>

                                </span>

                                <span className="text-gray-600 dark:text-gray-200 flex-center"><IndianRupee size={15} />{Number(item.price).toFixed(2)}</span>
                            </div>
                            <button
                                onClick={() => handleRemoveFromCart(item.bookId)}
                                className="relative group text-red-500/70 hover:text-red-500 transition-all duration-200 ease-in-out cursor-pointer"
                            >
                                <Trash2 />
                                <span className="absolute text-xs top-7 -left-6 w-20 opacity-0 group-hover:opacity-100 group-hover:delay-500 transition-all duration-300 ease-in-out z-50">
                                    Remove from cart
                                </span>
                            </button>
                        </div>
                    ))}
                </div>
            )}
            <div className="mt-6 flex justify-between items-center">
                <div className="font-medium text-xl flex-center dark:text-gray-200">
                    <span className="text-gray-600 dark:text-gray-200">Total:</span>
                    <span className="font-bold text-2xl mx-2 flex-center"><IndianRupee size={20} />{cart.reduce((total, item) => total + Number(item.price), 0).toFixed(2)}</span>
                </div>
            </div>
            {user &&
                <div className="text-xl font-bold">

                    <GeneratePDF cart={cart} user={user} />
                </div>
            }
        </div>
    );
};

export default UserCart;
