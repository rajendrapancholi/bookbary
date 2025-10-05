import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { BookCategorytType, createCategory } from '../../api/categoryApi';
import { createAuthor, CreateBookAuthourType } from '../../api/authorApi';
import { useMutation } from '@tanstack/react-query';

type Props = {
    showSettings: boolean;
    setShowSettings: (value: boolean) => void;
    type: 'category' | 'author';
};

const AddDataForm: React.FC<Props> = ({ showSettings, setShowSettings, type }) => {
    const [formData, setFormData] = useState<any>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev: any) => ({ ...prev, [name]: value }));
    };


    const catMutation = useMutation({
        mutationFn: (newCategory: BookCategorytType) => createCategory(newCategory),
        onMutate: (_) => {
            // Show loading toast when mutation starts
            const toastId = toast.loading("Creating category...");
            return { toastId }; // Return toastId as context
        },

        onSuccess: (data, _, context) => {
            if (data.success) {
                toast.dismiss(context.toastId);
                toast.success(data.message, {
                    duration: 3000,
                });
            }
            console.log(data);
        },
        onError: (error, _, context) => {
            toast.dismiss(context?.toastId);
            toast.error(`Error creating a category: ${error}`, {
                duration: 3000,
            });
        },
    });

    const authorMutation = useMutation({
        mutationFn: (newAuthor: CreateBookAuthourType) => createAuthor(newAuthor),
        onMutate: (_) => {
            // Show loading toast when mutation starts
            const toastId = toast.loading("Creating author...");
            return { toastId }; // Return toastId as context
        },

        onSuccess: (data, _, context) => {
            if (data.success) {
                toast.dismiss(context.toastId);
                toast.success(data.message, {
                    duration: 3000,
                });
            }
        },
        onError: (error, _, context) => {
            toast.dismiss(context?.toastId);
            toast.error(`Error creating a author: ${error}`, {
                duration: 3000,
            });
        },
    });

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (type === 'category') {
                catMutation.mutate({ category_name: formData.category_name });
            } else if (type === 'author') {
                authorMutation.mutate({
                    Fname: formData.Fname,
                    Lname: formData.Lname,
                    email: formData.email,
                    category: formData.category,
                    address: formData.address,
                });
            }
            setShowSettings(false);
            setFormData({});
        } catch (err: any) {
            toast.error(err.message || "Error creating data");
        }
    };



    return (

        showSettings && (
            <>
                {/* Overlay */}
                <div
                    className="fixed inset-0 bg-black/40 z-30"
                    // onClick={() => console.log("clicke div")}
                    onClick={() => setShowSettings(false)}
                />
                {/* Modal */}
                <div className="fixed inset-0 m-auto flex items-center w-fit h-fit justify-center z-50">
                    <div className="bg-white dark:bg-gray-700 text-green-500 w-[400px] p-6 rounded-lg shadow relative shadow-green-300/45">
                        <h2 className="text-xl font-bold mb-4 text-gray-600 dark:text-gray-300">
                            Create {type === 'category' ? 'Category' : 'Author'}
                        </h2>

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-4">
                            {type === 'category' ? (
                                <input
                                    name="category_name"
                                    type="text"
                                    placeholder="Category Name"
                                    onChange={handleChange}
                                    value={formData.category_name || ""}
                                    className="inputField"
                                    required
                                />
                            ) : (
                                <>
                                    <input
                                        name="Fname"
                                        type="text"
                                        placeholder="First Name"
                                        onChange={handleChange}
                                        value={formData.Fname || ""}
                                        className="inputField"
                                        required
                                    />
                                    <input
                                        name="Lname"
                                        type="text"
                                        placeholder="Last Name"
                                        onChange={handleChange}
                                        value={formData.Lname || ""}
                                        className="inputField"
                                    />
                                    <input
                                        name="email"
                                        type="email"
                                        placeholder="Email"
                                        onChange={handleChange}
                                        value={formData.email || ""}
                                        className="inputField"
                                    />
                                    <input
                                        name="category"
                                        type="text"
                                        placeholder="Category (optional)"
                                        onChange={handleChange}
                                        value={formData.category || ""}
                                        className="inputField"
                                    />
                                    <input
                                        name="address"
                                        type="text"
                                        placeholder="Address"
                                        onChange={handleChange}
                                        value={formData.address || ""}
                                        className="inputField"
                                    />
                                </>
                            )}

                            <div className="flex justify-end items-center gap-2">
                                <button
                                    type="submit"
                                    disabled={authorMutation.isPending || catMutation.isPending}
                                    className="text-white bg-green-700 hover:bg-green-800 focus:ring-1 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-3 py-1.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 cursor-pointer"
                                >
                                    Save
                                </button>
                                <button
                                    type="reset"
                                    onClick={() => setFormData({})}
                                    className="text-red-600 bg-red-200 focus:ring-1 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-3 py-1.5 text-center hover:bg-red-300 cursor-pointer"
                                >
                                    Clear
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setShowSettings(false)}
                                    className="text-amber-700 bg-amber-200  focus:ring-1 focus:outline-none focus:amber-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-3 py-1.5 text-center hover:bg-amber-300 cursor-pointer"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )
    );
};

export default AddDataForm;
