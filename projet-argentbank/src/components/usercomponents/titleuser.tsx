import React, {useState}  from 'react';
/* import Changenamestyle from '../../styles/userstyles/changenamestyle'; */
import {useAppDispatch, useAppSelector} from '../../services/redux/store';
import { updateUserProfile } from '../../services/redux/initialstate';


export default function Titleuser(){

  const userFirstName = useAppSelector(state=> state.profile.firstName);
  const userLastName = useAppSelector(state => state.profile.lastName);
  const token = useAppSelector(state=> state.profile.token);
  const [editing, setEditing] = useState(false);
  const [newFirstName, setNewFirstName] = useState(userFirstName);
  const [newLastName, setNewLastName] = useState(userLastName);
  const [serverError, setServerError] = useState(false);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    setEditing(!editing)
  }
  
  const handleSubmit = (evt: React.SyntheticEvent)=>{
    evt.preventDefault();
    fetch ('http://localhost:3001/api/v1/user/profile', {
      method: "PUT",
      headers: {Authorization: "Bearer" + token, "Content-type": "application/json"},
      body: JSON.stringify({
        firstName: newFirstName,
        lastName: newLastName
      })
    })
    .then(async response => {
      const isJson = response.headers.get("content-type")?.includes("application/json");
      const data = isJson && await response.json();
      if (response.ok){
        dispatch(updateUserProfile(data.body))
        setEditing(!editing)
      } else {
        console.error(response)
        setServerError(true)
      }
    })
    .catch(error =>{
      console.error(error);
      setServerError(true);
    })
  }


        return(
          <div className="name">
      <h1>
        Welcome back
      </h1>
      {
        editing ? 
          <form className="headerchangename" onSubmit={handleSubmit}>
            <div className="changenameform">
              <input type="text" className="inputchangename" placeholder={userFirstName}
                onChange={e => setNewFirstName(e.target.value)} />
              <input type="text" className="inputchangename" placeholder={userLastName}
                onChange={e => setNewLastName(e.target.value)} />
            </div>
            <div className="">
              <button type="submit" className="savebutton">
                    Save 
              </button>
              <button className="cancelbutton" onClick={e => handleClick()}>
                    Cancel 
              </button>
            </div>
          </form>
        :
          <div>
            <p>
              {userFirstName} {userLastName}!
            </p>
            <button className="edit-button" onClick={e => handleClick()}>
                  Edit Name 
            </button>
          </div>
      }
    </div>
        )
}