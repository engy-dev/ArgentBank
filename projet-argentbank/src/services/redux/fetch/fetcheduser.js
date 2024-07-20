import { login } from '../actions';

export function fetchedUser(request) {
    return async (dispatch) => {
        return fetch(`http://localhost:3001/api/v1/user/${request.endPoints}`, {
            method: request.method,
            headers: {
                Authorization: `Bearer ${request.token}`,
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
                request.body.firstName = user.body.firstName;
                request.body.lastName = user.body.lastName;
                console.log(user)
                dispatch(login(user));

            })
            .catch((userError) => {
                console.log(userError);
            });
    };
};
