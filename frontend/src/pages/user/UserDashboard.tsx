import { BookOpen, Redo2, ScrollText } from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router-dom';

const UserDashboard: React.FC = () => {
    return (
        <>
            <h2 className="mx-3 text-2xl font-semibold mb-4 self-center whitespace-nowrap bg-gradient-to-r bg-clip-text text-transparent from-amber-600 via-amber-500 to-amber-400">
                Dashboard
            </h2>
            <div className='flex'>
                <div className='grid grid-cols-2 gap-2 p-3'>
                    <NavLink to="/user/issued-books" className="flex items-center rounded-lg hover-scale-right-top-bottom hover:ring hover:ring-gray-300 dark:bg-gray-800/40 font-bold dark:text-white/80">
                        <span className="flex items-center gap-2 pl-2 border-l-2 border-gray-300 m-2 text-wrap">

                            <BookOpen className='p-4 size-16 dark:text-neutral-300 bg-gray-800 rounded-xl w-fit' />
                            MY Borrowed Books
                        </span>
                    </NavLink>
                    <NavLink to="/user/issued-books" className="flex items-center rounded-lg hover-scale-right-top-bottom hover:ring hover:ring-gray-300 dark:bg-gray-800/40 font-bold dark:text-white/80">
                        <span className="flex items-center gap-2 pl-2 border-l-2 border-gray-300 m-2 text-wrap">

                            <Redo2 className='p-4 size-16 dark:text-neutral-300 bg-gray-800 rounded-xl w-fit' />
                            My Return Books
                        </span>
                    </NavLink>
                    <NavLink to="/user/library-books" className="flex items-center rounded-lg hover-scale-right-top-bottom hover:ring hover:ring-gray-300 dark:bg-gray-800/40 font-bold dark:text-white/80">
                        <span className="flex items-center gap-2 pl-2 border-l-2 border-gray-300 m-2 text-wrap">

                            <ScrollText className='p-4 size-16 dark:text-neutral-300 bg-gray-800 rounded-xl w-fit' />

                            Browes Available books inventory
                        </span>
                    </NavLink>
                    <NavLink to="/user" >
                        <div className='text-sm flex flex-col justify-center items-center'>
                            <img src="/logo.png" alt="BookBary" className='size-14 mb-3' />
                            <h1 className='text-4xl font-bold bg-clip-text text-transparent bg-gradient'>BookBary</h1>
                            <p className='text-lg font-mono font-bold -mt-1 bg-clip-text text-transparent bg-gradient'>Library</p>
                        </div>
                    </NavLink>
                </div>
                <div>
                    <div>charAt</div>
                    <div>
                        <span>total Borrowed</span><span>Total Returned</span>
                    </div>
                </div>


            </div>
        </>
    );
};

export default UserDashboard;