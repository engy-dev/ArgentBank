import { connect, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchedUser } from '../../services/redux/fetch/fetcheduser';
import EditUserName from './edituser';
import Changenamestyle from '../../styles/userstyles/changenamestyle';

/* User component, render name's content and upload it*/
const User = ({ token, fetchedUser }) => {
    const [isToggleBtn, setIsToggleBtn] = useState(true);
    const [isToggle, setIsToggle] = useState(false);
    const firstName = useSelector((state) => state.firstName);
    const lastName = useSelector((state) => state.lastName)

    /* UseEffect will fetch and recover names for each render of the component*/
    useEffect(() => {
        if (token) {
            const request = {
                method: 'POST',
                endPoints: 'profile',
                token: token,
                body: {
                    firstName,
                    lastName
                }
            };

            fetchedUser(request);
        }
    }, [fetchedUser, token, firstName, lastName]);
    /* Toggle the user component with the edit name component*/
    const change = () => {
        setIsToggleBtn(!isToggleBtn);
        setIsToggle(!isToggle);
    };
    return (
        <>
            <div className="header">
                <h1>Welcome back</h1>
                <div style={{ display: isToggleBtn ? 'flex' : 'none' }}>
                    <h2>
                        {firstName}&nbsp;{lastName}
                    </h2>
                </div>
                <button
                    onClick={() => change()}
                    className="edit-button"
                    style={{ display: isToggleBtn ? 'flex' : 'none' }}
                >
                    Edit Name{' '}
                </button>
            </div>

            <EditUserName token={token} change={change} isToggle={isToggle} />
            <Changenamestyle />
        </>
    );
};

/*Inject any updates to the redux store and merge them into props in componants*/
const mapStateToProps = ({ token, firstName, lastName, user }) => {
    return {
        user,
        token,
        firstName,
        lastName,
    };
};

/*Inject actions to the store*/
const mapDispatchToProps = (dispatch) => {
    return {
        fetchedUser: (...args) => dispatch(fetchedUser(...args)),
    };
};

/*Connect provides its connected component with the pieces of the data it needs from the store */
export default connect(mapStateToProps, mapDispatchToProps)(User);
