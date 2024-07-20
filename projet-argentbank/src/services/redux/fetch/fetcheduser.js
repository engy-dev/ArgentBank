import { login } from '../actions';

export const fetchedUser = (request) => {
    return async (dispatch) => {
        return fetch(`http://localhost:3001/api/v1/user/${request.endPoints}`, {
            method: request.method,
            headers: {
                Authorization: `Bearer ${request.token.body.token}`,
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Error fetch user !');
                }

                return response.json();
            })
            .then((user) => {
                console.log(user.body.firstName);
                if (request.token) {
                    user.token = request.token;
                    request.body.firstName = user.body.firstName;
                    request.body.lastName = user.body.lastName;
                    dispatch(login(user));
                    console.log(user)
                }

            })
            .catch((userError) => {
                console.log(userError);
            });
    };
};
