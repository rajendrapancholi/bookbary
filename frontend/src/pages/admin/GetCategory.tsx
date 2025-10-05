import React from 'react';
import { BookCategorytType, fetchCategories } from '../../api/categoryApi';
import { AxiosResponse } from 'axios';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const GetCategory: React.FC = () => {
    const getCategory = async (): Promise<BookCategorytType[]> => {
        try {
            const response: AxiosResponse<BookCategorytType[]> = await fetchCategories();
            if (response.status == 200) {
                console.log(response.data);
                return response.data;
            }
            throw new Error("Failed to fetch book categories!");
        } catch (error) {
            console.log("Failed to fetch book categories:", error);
            throw error;
        }
    };
    const { data: bookCategory, isLoading, error } = useQuery({
        queryKey: ["bookCategories"],
        queryFn: getCategory,
    });
    if (isLoading) {
        return <div>Loading.....</div>;
    }
    if (error) {
        return toast.error(`Error to fetch book category: ${error}`);
    }


    return (
        <div>{bookCategory &&
            bookCategory.map((category: BookCategorytType) => (
                <div key={category.cat_id}>
                    {JSON.stringify(category)}
                </div>
            ))
        }
        </div>
    );
};

export default GetCategory;