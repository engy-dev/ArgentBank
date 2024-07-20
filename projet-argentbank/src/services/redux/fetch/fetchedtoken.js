import { fetchToken } from "../actions";

export const fetchedToken = (request) => {
  return async (dispatch) => {
    return fetch(`http://localhost:3001/api/v1/user/${request.endPoints}`, {
      method: request.method,
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(request.body),
    })
      .then((response) => {
        if (!response.ok) {
          console.log("Error  - Fetch token");
          throw new Error("Error fetch token !");
        }
        return response.json();
      })
      .then((user) => {
        user.body.remember = request.remember;
        dispatch(fetchToken(user));
      })
      .catch((error) => {
        console.log(error);
        alert('E-mail ou mot de passe incorrect')
      });

  };
};
