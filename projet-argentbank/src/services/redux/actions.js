export const FETCH_TOKEN = 'FETCH_TOKEN';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const EDIT_NAME = 'EDIT_NAME';

export const fetchToken = (token) => {
    return {
        type: LOGIN,
        token,
        remember: token.body.remember,

    };
};

export const login = (user) => {
    return {
        type: LOGIN,
        user: user.body,
        token: user.token,
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
        user: user.body,
    };
};
