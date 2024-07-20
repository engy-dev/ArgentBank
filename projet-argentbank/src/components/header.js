import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { LOGOUT } from '../services/redux/actions';
import argentBankLogo from '../assets/argentBankLogo.png';
import { useSelector } from 'react-redux';

const Header = ({ token, logout }) => {
    const user = useSelector((state) => state.user)
    return (
        <nav className="main-nav">
            <Link className="main-nav-logo" to="/">
                <img
                    className="main-nav-logo-image"
                    src={argentBankLogo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                {token ? (
                    <>
                        <Link className="main-nav-item" to="/user">
                            <i className="fa fa-user-circle"></i>
                            {user.firstName}
                        </Link>
                        <Link
                            className="main-nav-item"
                            to="/"
                            onClick={() => logout()}
                        >
                            <i className="fa fa-sign-out"></i>
                            Log Out
                        </Link>
                    </>
                ) : (
                    <Link to="./login" className="main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        Log In
                    </Link>
                )}
            </div>
        </nav>
    );
};

const mapStateToProps = ({ token, firstName }) => {
    return {
        token,
        firstName,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch({ type: LOGOUT }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
