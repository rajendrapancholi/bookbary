import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { AxiosResponse } from 'axios';
import GetCategory from './GetCategory';
import { BookAuthourType, fetchAuthors } from '../../api/authorApi';

const GetAuthors: React.FC = () => {
    const getAuthors = async (): Promise<BookAuthourType[]> => {
        try {
            const response: AxiosResponse<BookAuthourType[]> = await fetchAuthors();
            if (response.status === 200) {
                return response.data;
            }
            throw new Error("Failed to fetch book authors!");
        } catch (error) {
            console.log("Failed to fetch book authors:", error);
            throw error;
        }
    };
    const { data: bookAuthors, isLoading } = useQuery<BookAuthourType[]>({
        queryKey: ["authours"],
        queryFn: getAuthors,
    });
    if (isLoading) {
        return <div>Loading....</div>;
    }
    return (
        <div>
            <GetCategory />
            {bookAuthors?.map((author, index) => (
                <div key={index}>
                    {JSON.stringify(author)}
                </div>
            ))}
        </div>
    );
};

export default GetAuthors;