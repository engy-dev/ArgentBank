import { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { fetchedToken } from '../../services/redux/fetch/fetchedtoken';
import Userpage from '../../pages/userpage';

const Signin = ({ token, fetchedToken, remember }) => {
    const inputName = useRef(null);
    const inputPassword = useRef(null);
    const inputRemember = useRef(null);

    useEffect(() => {
        document.title = 'login';
    }, []);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const request = {
            method: 'POST',
            endPoints: 'login',
            body: {
                email: inputName.current.value,
                password: inputPassword.current.value,
            },
            remember: inputRemember.current.checked,
        };

        fetchedToken(request);
    };
    if (token) {
        if (remember) {
            console.log(
                'Stockage dans le local storage',
                JSON.stringify(token)
            );
            localStorage.setItem('token', token);
        }

        /*affiche la page user, mais toujours le problème des names et URI est toujours "/login", et pas "/user"*/
        return <Userpage />;

        /*affiche la page user, URI est "/user" mais les composants de la page userpage ne s'affiche pas 
        (Matched leaf route at location "/user" does not have an element. 
        This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.) */
        /*         window.location.href = 'http://localhost:3000/user'; */
    }
    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="email"
                            ref={inputName}
                            placeholder="Email"
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            ref={inputPassword}
                            placeholder="Password"
                        />
                    </div>
                    <div className="input-remember">
                        <input
                            type="checkbox"
                            id="remember-me"
                            ref={inputRemember}
                        />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <input
                        type="submit"
                        className="sign-in-button"
                        value="Sign In"
                    />
                </form>
            </section>
        </main>
    );
};

const mapStateToProps = ({ token, remember }) => {
    return {
        token,
        remember,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchedToken: (...args) => dispatch(fetchedToken(...args)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
