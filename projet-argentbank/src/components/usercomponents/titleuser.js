import React  from 'react';
import Changenamestyle from '../../styles/userstyles/changenamestyle';

export default class Titleuser extends React.Component{
    render(){

        return(
          <div className="name">
            <div className="header">
        <h1>Welcome back<br />{""}</h1>
        <button className="edit-button" onClick={changeName}>Edit Name</button>
      </div>

      <div className="headerchangename hidden">
    <h1>Welcome back</h1>
    <form className="changenameform">
      <div className="input-wrapper">
        <label for="Firstname">
          <input className="inputchangename" type="text" id="Firstname" placeholder={""} />
        </label>
      </div>
      <div className="input-wrapper">
        <label for="Lastname">
          <input className="inputchangename" type="text" id="Lastname" placeholder={""} />
        </label>
      </div>
      <button className="savebutton">Save</button>
      <button className="cancelbutton">Cancel</button>
    </form>
  </div>
  </div>
        )
    }
}

function changeName (){
    document.querySelector(".header").classList.add("hidden");
    document.querySelector(".headerchangename").classList.remove("hidden");
    <Changenamestyle/>
}