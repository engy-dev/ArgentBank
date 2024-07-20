import { editName } from "../actions";


/*Fetch component, for edit names, called in Editusername component*/
export const fetchedEditName = (request) => {
  return async (dispatch) => {
    return fetch(`http://localhost:3001/api/v1/user/${request.endPoints}`, {
      method: request.method,
      headers: {
        Authorization: `Bearer ${request.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request.body),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error  - Fetch edit name !");
        }

        return response.json();
      })
      .then((user) => {
        dispatch(editName(user));
      })
      .catch((userError) => {
        console.log(userError);
      });
  };
};
