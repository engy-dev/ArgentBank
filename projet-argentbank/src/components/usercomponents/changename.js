import React from "react";

export default class Changenameuser extends React.Component {
  render() {
    return (
      <div className="headerchangename">
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
      </div>
    );
  }
}