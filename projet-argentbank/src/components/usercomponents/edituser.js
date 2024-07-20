import { useRef } from 'react';
import { connect, useSelector } from 'react-redux';
import { fetchedEditName } from '../../services/redux/fetch/fetcheditname';

const EditUserName = ({ user, token, fetchedEditName, isToggle, change }) => {
    const inputFirstnameChange = useRef();
    const inputLastNameChange = useRef();
    const firstName = useSelector((state) => state.firstName);
    const lastName = useSelector((state) => state.lastName);

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
        <form
            className="changenameform"
            onSubmit={handleSubmit}
            style={{ display: isToggle ? 'flex' : 'none' }}
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
                <button
                    className="cancelbutton"
                    onClick={change}
                >
                    Cancel
                </button>
            </div>
        </form>
    );
};

const mapStateToProps = ({ token, firstName }) => {
    return {
        token,
        firstName,
    };
};

const mapDispatchToprops = (dispatch) => {
    return {
        fetchedEditName: (...args) => dispatch(fetchedEditName(...args)),
    };
};

export default connect(mapStateToProps, mapDispatchToprops)(EditUserName);
