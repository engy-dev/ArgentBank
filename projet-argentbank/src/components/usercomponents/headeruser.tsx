
import {Link} from 'react-router-dom'
import argentBankLogo from "../../assets/argentBankLogo.png";


export default function Headeruser()  {

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
