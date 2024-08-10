import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import argentBankLogo from '../assets/argentBankLogo.png';
import { useSelector, useDispatch } from 'react-redux';
import { clearProfile } from '../redux/reducers/profileSlice';
import { logout } from '../redux/reducers/authSlice';
import { fetchProfile } from '../redux/actions';
import { AppDispatch, RootState } from '../redux/store';
import { clearAccounts } from '../redux/reducers/accountSlice';


const Header: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { profile, isLoggedIn } = useSelector(
    (state: RootState) => state.profile
  );

  // Fetch user profile if logged in and profile is not loaded
  useEffect(() => {
    if (isLoggedIn && !profile) {
      dispatch(fetchProfile());
    }
  }, [isLoggedIn, profile]);

  // Handle user logout
  const handleLogout = () => {
    dispatch(clearProfile());
    dispatch(logout());
    dispatch(clearAccounts());
  };

  return (
    <nav className="flex items-center justify-between bg-white px-5 py-[5px]">
      <Link className="flex items-center" to="/">
        <img
          className="w-[12.5rem]"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {isLoggedIn ? (
          <>
            <span className="mr-2 font-bold">
              <FontAwesomeIcon icon="user-circle" className="mr-1" />
              <Link to="/profile" className="font-bold hover:underline">
                {profile?.firstName}
              </Link>
            </span>
            <Link
              className="font-bold hover:underline"
              to="/"
              onClick={handleLogout}
            >
              <FontAwesomeIcon icon="sign-out-alt" className="mr-1" />
              Sign Out
            </Link>
          </>
        ) : (
          <Link className="mr-2 font-bold hover:underline" to="/login">
            <FontAwesomeIcon icon="user-circle" className="mr-1" />
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
