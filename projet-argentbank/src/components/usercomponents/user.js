import { connect, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchedUser } from '../../services/redux/fetch/fetcheduser';
import EditUserName from './edituser';
import Changenamestyle from '../../styles/userstyles/changenamestyle';
import Index from '../../pages/indexpage';

const User = ({ token, fetchedUser }) => {
    const [isToggleBtn, setIsToggleBtn] = useState(true);
    const [isToggle, setIsToggle] = useState(false);
    const user = useSelector((state) => state.user)

    console.log(user)

    useEffect(() => {
        if (token) {
            const request = {
                method: 'POST',
                endPoints: 'profile',
                token: token,
            };

            fetchedUser(request);
        }
    }, [token, fetchedUser]);
    const change = () => {
        setIsToggleBtn(!isToggleBtn);
        setIsToggle(!isToggle);
    };

    if (!token) {
        return <Index />;
    }

    return (
        <>
            <div className="header">
                <h1>Welcome back</h1>
                <div style={{ display: isToggleBtn ? 'flex' : 'none' }}>
                    <h2>
                        {user.firstName}&nbsp;
                        {user.lastName}
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

const mapStateToProps = ({ token, firstName, lastName }) => {
    return {
        token,
        firstName,
        lastName,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchedUser: (...args) => dispatch(fetchedUser(...args)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
