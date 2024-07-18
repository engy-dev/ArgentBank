import { login } from "../actions";

export const fetchedUser = (request) => {
  return async (dispatch) => {
    return fetch(`http://localhost:3001/api/v1/user/${request.endPoints}`, {
      method: request.method,
      headers: {
        Authorization: `Bearer ${request.token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          console.log("Error  - Fetch user");
          throw new Error("Error fetch user !");
        }

        return response.json();
      })
      .then((user) => {
        if (request.token) {
          user.token = request.token;
        }

        dispatch(login(user));
      })
      .catch((userError) => {
        console.log(userError);
      });
  };
};
