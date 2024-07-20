import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { LOGOUT } from '../services/redux/actions';
import argentBankLogo from '../assets/argentBankLogo.png';
import { useSelector } from 'react-redux';


/*Header component, If token is in to the store, header change and pin the firstName*/
const Header = ({ token, logout }) => {
    const firstName = useSelector((state) => state.firstName);
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
                            {firstName}
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

/*Inject any updates to the redux store and merge them into props in componants*/
const mapStateToProps = ({ token, firstName }) => {
    return {
        token,
        firstName,
    };
};

/*Inject actions to the store*/
const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch({ type: LOGOUT }),
    };
};

/*Connect provides its connected component with the pieces of the data it needs from the store */
export default connect(mapStateToProps, mapDispatchToProps)(Header);
