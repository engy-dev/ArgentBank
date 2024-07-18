import React from "react";
import {Link} from 'react-router-dom'
import argentBankLogo from "../../assets/argentBankLogo.png";
import { useAppSelector } from "../../services/redux/store";
import { userLogoff } from "../../services/redux/reducers";
import {useDispatch} from 'react-redux';

export default function Headeruser()  {
  const dispatch = useDispatch();
  const handleSignOut = (evt: React.SyntheticEvent) => {
    dispatch(userLogoff())
  }
const userFirstName= useAppSelector(state=> state.profile.firstName)
    return (
        <nav className="main-nav">
        <a className="main-nav-logo" href="/">
          <img
            className="main-nav-logo-image"
            src={argentBankLogo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </a>
        <div>
          <Link className="main-nav-item" to="/user">
            <i className="fa fa-user-circle"></i>
            {userFirstName}
          </Link>
          <Link className="main-nav-item" to="/" onClick={handleSignOut}>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </Link>
        </div>
      </nav>
    );
}
