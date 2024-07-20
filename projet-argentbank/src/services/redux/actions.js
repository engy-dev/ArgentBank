export const FETCH_TOKEN = 'FETCH_TOKEN';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const EDIT_NAME = 'EDIT_NAME';


/*Login redux action*/
export const login = (user) => {
    return {
        type: LOGIN,
        firstName: user.body.firstName,
        lastName: user.body.lastName,
        email: user.body.email,

    };
};
/*recover token redux action*/
export const fetchToken = (token) => {
    return {
        type: FETCH_TOKEN,
        token: token.body.token,
        remember: token.body.remember,
    };
};
/*Logout redux action*/
export const logout = () => {
    return {
        type: LOGOUT,
        user: '',
        token: '',
    };
};
/*Edit name redux action*/
export const editName = (user) => {
    return {
        type: EDIT_NAME,
        firstName: user.body.firstName,
        lastName: user.body.lastName,
    };
};
