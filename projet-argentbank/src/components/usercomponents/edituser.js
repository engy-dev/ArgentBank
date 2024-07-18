import { useRef } from "react";
import { connect } from "react-redux";
import {fetchedEditName} from "../../services/redux/fetch/fetcheditname";

const EditUserName = ({user, token, fetchedEditName, isToggle, change})=> {
    const inputFirstnameChange = useRef();
    const inputLastNameChange = useRef();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const request = {
            method: "PUT",
            endPoints: "profile",
            body: {
                firstName: inputFirstnameChange.current.value,
                lastName: inputLastNameChange.current.value
            },
            token: token
        };
        fetchedEditName(request)
    };

    return(

      <form className="changenameform" onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label for="Firstname">
            <input className="inputchangename" type="text" id="Firstname" placeholder={user.firstName} ref={inputFirstnameChange} />
          </label>
        </div>
        <div className="input-wrapper">
          <label for="Lastname">
            <input className="inputchangename" type="text" id="Lastname" placeholder={user.lastName} ref={inputLastNameChange}/>
          </label>
        </div>
        <button className="savebutton" type="submit">Save</button>
        <button className="cancelbutton" onClick={()=> change(true, true)}>Cancel</button>
      </form>
    )
}

const mapStateToProps = ({token, user}) => {
    return {
        token,
        user
    };
};

const mapDispatchToprops = (dispatch) => {
    return {
        fetchedEditName: (...args) => dispatch(fetchedEditName(...args))
    };
};

export default connect (mapStateToProps, mapDispatchToprops)(EditUserName);