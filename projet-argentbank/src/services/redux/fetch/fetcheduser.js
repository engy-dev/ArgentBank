import { login } from '../actions';


/* Fetch component, for get names, called in User component*/
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
                request.body.firstName = user.body.firstName;
                request.body.lastName = user.body.lastName;
                dispatch(login(user));

            })
            .catch((userError) => {
                console.log(userError);
            });
    };
};
