// pages/AdminDashboard.tsx
import React from 'react';
import DashboardChart from './DashboardChart';
import { Bell, BookOpen } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
    const stats = {
        totalBooks: 1345,
        activeUsers: 120,
        borrowedToday: 23,
        returnedToday: 15,
    };

    const alerts = [
        "5 books overdue today",
        "2 new user registration requests",
        "Database backup pending",
    ];

    return (
        <div className='flex flex-col md:flex-row'>
            {/* Main Content */}
            <main className='flex-1 p-6'>
                <div className="flex justify-between items-center mb-6">
                    <h2 className="mx-3 text-3xl font-semibold mb-4 self-center whitespace-nowrap bg-gradient-to-r bg-clip-text text-transparent from-amber-600 via-amber-500 to-amber-400">
                        Dashaboard
                    </h2>
                    <div className='relative'>
                        <Bell size={24} className='text-gray-700 dark:text-white' />
                        <span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5'>5</span>
                    </div>
                </div>

                {/* Stats */}
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-8'>
                    <NavLink to='/admin/total-books' className='flex items-center rounded-lg hover-scale-right-top-bottom hover:ring hover:ring-gray-300 dark:bg-gray-800/40 font-bold dark:text-white/80'>
                        <span className="flex items-center gap-2 pl-2 border-l-2 border-gray-300 m-2 text-wrap">
                            <BookOpen className='p-4 size-16 dark:text-neutral-300 bg-gray-800 rounded-xl w-fit' />
                            <span>
                                <p className='text-gray-500 dark:text-gray-400'>Total Books</p>
                                <h3 className='text-xl font-bold dark:text-gray-100'>{stats.totalBooks}</h3>
                            </span>
                        </span>
                    </NavLink>
                    <NavLink to='/admin/total-books' className='flex items-center rounded-lg hover-scale-right-top-bottom hover:ring hover:ring-gray-300 dark:bg-gray-800/40 font-bold dark:text-white/80'>
                        <span className="flex items-center gap-2 pl-2 border-l-2 border-gray-300 m-2 text-wrap">
                            <BookOpen className='p-4 size-16 dark:text-neutral-300 bg-gray-800 rounded-xl w-fit' />
                            <span>
                                <p className='text-gray-500 dark:text-gray-400'>Active Users</p>
                                <h3 className='text-xl font-bold dark:text-gray-100'>{stats.activeUsers}</h3>
                            </span>
                        </span>
                    </NavLink>
                    <NavLink to='/admin/total-books' className='flex items-center rounded-lg hover-scale-right-top-bottom hover:ring hover:ring-gray-300 dark:bg-gray-800/40 font-bold dark:text-white/80'>
                        <span className="flex items-center gap-2 pl-2 border-l-2 border-gray-300 m-2 text-wrap">
                            <BookOpen className='p-4 size-16 dark:text-neutral-300 bg-gray-800 rounded-xl w-fit' />
                            <span>
                                <p className='text-gray-500 dark:text-gray-400'>Borrowed Today</p>
                                <h3 className='text-xl font-bold  dark:text-gray-100'>{stats.borrowedToday}</h3>
                            </span>
                        </span>
                    </NavLink>
                    <NavLink to='/admin/total-books' className='flex items-center rounded-lg hover-scale-right-top-bottom hover:ring hover:ring-gray-300 dark:bg-gray-800/40 font-bold dark:text-white/80'>
                        <span className="flex items-center gap-2 pl-2 border-l-2 border-gray-300 m-2 text-wrap">
                            <BookOpen className='p-4 size-16 dark:text-neutral-300 bg-gray-800 rounded-xl w-fit' />
                            <span>
                                <p className='text-gray-500 dark:text-gray-400'>Returned Today</p>
                                <h3 className='text-xl font-bold dark:text-gray-100'>{stats.returnedToday}</h3>
                            </span>
                        </span>
                    </NavLink>
                </div>

                {/* Chart + Notifications */}
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
                    <aside className='col-span-3 bg-white dark:bg-gray-800/40 p-6 rounded shadow'>
                        <h3 className='text-lg font-semibold mb-4 text-gray-500 dark:text-white/80'>Analytics Overview</h3>
                        <DashboardChart />
                    </aside>

                    <aside className='bg-white dark:bg-gray-800 p-6 rounded shadow'>
                        <h3 className='text-lg font-semibold mb-4 text-gray-700 dark:text-white'>Notifications</h3>
                        <ul className='text-sm text-gray-600 dark:text-gray-300 list-disc list-inside space-y-2'>
                            {alerts.map((alert, idx) => (
                                <li key={idx}>{alert}</li>
                            ))}
                        </ul>
                    </aside>
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;
