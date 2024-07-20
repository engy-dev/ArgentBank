import { useRef } from 'react';
import { connect, useSelector } from 'react-redux';
import { fetchedEditName } from '../../services/redux/fetch/fetcheditname';


/* Edit name component*/
const EditUserName = ({ token, fetchedEditName, isToggle, change }) => {
    const inputFirstnameChange = useRef();
    const inputLastNameChange = useRef();
    const firstName = useSelector((state) => state.firstName);
    const lastName = useSelector((state) => state.lastName);

    /*On edit submit, names will be fetched and updated*/
    const handleSubmit = (evt) => {
        evt.preventDefault();
        const request = {
            method: 'PUT',
            endPoints: 'profile',
            body: {
                firstName: inputFirstnameChange.current.value,
                lastName: inputLastNameChange.current.value,
            },
            token,
        };
        fetchedEditName(request);
    };

    return (
        <div style={{ display: isToggle ? 'flex' : 'none' }} className="changenameform">
            <form
                onSubmit={handleSubmit}
                className="form"
            >
                <div className="input-wrapper">
                    <label htmlFor="Firstname">
                        <input
                            className="inputchangename"
                            type="text"
                            id="Firstname"
                            placeholder={firstName}
                            ref={inputFirstnameChange}
                        />
                    </label>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="Lastname">
                        <input
                            className="inputchangename"
                            type="text"
                            id="Lastname"
                            placeholder={lastName}
                            ref={inputLastNameChange}
                        />
                    </label>
                </div>
                <div className="edit_buttons">
                    <button className="savebutton" type="submit" onClick={change}>
                        Save
                    </button>

                </div>
            </form>
            <button
                className="cancelbutton"
                type="cancel"
                onClick={change}
            >
                Cancel
            </button>
        </div>
    );
};

/*Inject any updates to the redux store and merge them into props in componants*/
const mapStateToProps = ({ token, firstName }) => {
    return {
        token,
        firstName,
    };
};

/*Inject actions to the store*/
const mapDispatchToprops = (dispatch) => {
    return {
        fetchedEditName: (...args) => dispatch(fetchedEditName(...args)),
    };
};

/*Connect provides its connected component with the pieces of the data it needs from the store */
export default connect(mapStateToProps, mapDispatchToprops)(EditUserName);
