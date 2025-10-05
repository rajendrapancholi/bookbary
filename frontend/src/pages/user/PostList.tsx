import { AxiosResponse } from "axios";
import React from "react";
import { useQuery } from "@tanstack/react-query";

const FetchRQ: React.FC = () => {
    const getPostData = async (): Promise<PostType[]> => {
        try {
            const response: AxiosResponse<PostType[]> = await fetchPosts();
            if (response.status === 200) {
                console.log(response.data);
                return response.data;
            }
            throw new Error("Failed to fetch posts");
        } catch (error) {
            console.error("Failed to fetch data:", error);
            throw error;
        }
    };

    const { data, isLoading, isError } = useQuery<PostType[]>({
        // queryKey: ["posts"]: The queryKey is an array with a single string "posts". This key is used to uniquely identify the query. This array will be compared to other query keys in the cache to ensure that React Query knows when this particular query should be refetched or served from cache.
        queryKey: ["posts"], // Unique key for the query
        queryFn: getPostData, // Function reference, not called directly
    });

    if (isLoading) {
        return (
            <div className="flex mx-auto justify-center items-center">
                <span className="animate-pulse text-4xl font-extrabold bg-gradient-to-r bg-clip-text text-transparent from-amber-700 via-amber-600 to-amber-500 mr-1.5">
                    Loading
                </span>
                <p className="text-4xl animate-bounce font-extrabold bg-gradient-to-r bg-clip-text text-transparent from-amber-500 via-amber-600 to-amber-700">
                    . . .
                </p>
            </div>
        );
    }

    if (isError) {
        return <div>Error loading posts.</div>;
    }

    return (
        <div className="grid md:grid-cols-4 grid-cols-2 gap-2 p-2 m-2 mx-auto ">
            {data?.map((post) => (
                <div
                    key={post.id}
                    className="relative divide-y-2 divide-gray-600 divide-solid w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 p-5"
                >
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white h-7 overflow-hidden scroll-auto">
                        {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
                    </h5>
                    <p className="mt-2 text-gray-700 dark:text-gray-300 h-3/4 overflow-y-scroll">
                        {post.body}
                    </p>
                    <div className="w-full px-5 mt-4 flex items-center justify-between ">
                        <span className="float-left text-sm font-medium text-gray-500 dark:text-gray-400">
                            User ID: {post.userId}
                        </span>
                        <span className="float-right text-sm font-medium text-gray-500 dark:text-gray-400">
                            Post ID: {post.id}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FetchRQ;
