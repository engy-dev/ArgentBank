import React from 'react';

export default class Titleuser extends React.Component{
    render(){

        return(
            <div className="header">
        <h1>Welcome back<br />{""}</h1>
        <button className="edit-button" onClick={changeName}>Edit Name</button>
      </div>
        )
    }
}

function changeName (){
    document.querySelector(".header").remove();
    document.querySelector(".name").innerHTML=`<div className="headerchangename">
    <h1>Welcome back</h1>
    <form className="changename">
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
      <button className="save">Save</button>
      <button className="cancel">Cancel</button>
    </form>
  </div>`
}