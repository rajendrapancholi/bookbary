import React from 'react';
import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { RootState } from '../../redux/store';
// import { logout } from '../../features/auth/authSlice';
import { capitalizeWords } from '../../utils/helper';
import { ShieldUserIcon, User2Icon } from 'lucide-react';

const UserProfile: React.FC = () => {
    // const dispatch = useDispatch();
    // const navigate = useNavigate();
    const user = useSelector((state: RootState) => state.auth.user);

    // const handleLogout = () => {
    //     dispatch(logout());
    //     navigate('/login');
    // };


    if (!user) {
        return null;
    }

    return (
        <div className="relative inline-block text-left">
            <button
                className="flex items-center space-x-2 focus:outline-none"
            >
                {/* User Avatar */}
                <div className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full">
                    {/* {user.name.charAt(0).toUpperCase()} */}
                    {user && user.isAdmin ? <ShieldUserIcon size={30} /> : <User2Icon size={30} />}
                </div>

                {/* User Name and Email */}
                <div className=''>
                    <p className="text-sm font-bold">{capitalizeWords(user.name)}</p>
                    {/* <p className="text-xs text-gray-500">{user.email}</p> */}
                    <p className="text-xs float-left text-gray-500 dark:text-gray-400">{capitalizeWords(user.role)}</p>
                </div>
            </button>

            {/* Logout Button */}
            {/* <div
                onClick={handleLogout}
                className="mt-2 cursor-pointer bg-red-500 text-white px-4 py-2 rounded text-center"
            >
                Logout
            </div> */}
        </div>
    );
};

export default UserProfile;
