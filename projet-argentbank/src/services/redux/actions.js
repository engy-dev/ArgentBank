export const FETCH_TOKEN = 'FETCH_TOKEN';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const EDIT_NAME = 'EDIT_NAME';

export const login = (user) => {
    return {
        type: LOGIN,
        firstName: user.body.firstName,
        lastName: user.body.lastName,
        email: user.body.email,

    };
};

export const fetchToken = (token) => {
    return {
        type: FETCH_TOKEN,
        token: token.body.token,
        remember: token.body.remember,
    };
};

export const logout = () => {
    return {
        type: LOGOUT,
        user: '',
        token: '',
    };
};

export const editName = (user) => {
    return {
        type: EDIT_NAME,
        firstName: user.body.firstName,
        lastName: user.body.lastName,
    };
};
