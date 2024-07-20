import { Route, Routes, Link } from "react-router-dom";
import { connect } from "react-redux";
import { Navigate } from "react-router";
import { useEffect, useState } from "react";
import { fetchedUser } from "../../services/redux/fetch/fetcheduser";
import EditUserName from "./edituser";

const User = ({ match, token, user, fetchedUser }) => {
  const [isToggleBtn, setIsToggleBtn] = useState(true);
  const [isToggle, setIsToggle] = useState(false);

  useEffect(() => {
    if (token) {
      const request = {
        method: "POST",
        endPoints: "profile",
        token: token,
      };

      fetchedUser(request);
    }
  },[token, fetchedUser]);

  
      const change = () => {
        setIsToggleBtn(!isToggleBtn);
        setIsToggle(!isToggle);
      };

      if (!token) {
        return <Navigate to="/" />;
      }

      return (
        <>
        <div className="header">
          <h1>Welcome back</h1>
          <div style={{display: isToggleBtn ? "flex": "none"}}>
            <h2>{user.firstName}{user.lastName}</h2>
          </div>
         <Link to={`${match.url}/edit`} onClick={()=> change()}>Edit Name </Link>
        </div>

        <Routes>
          <Route path={`${match.url}/edit`} render={(props)=>(<EditUserName {...props} token={token} change={change} isToggle={isToggle}/>)}/>
        </Routes>
        </>
      );
};

const mapStateToProps = ({token, user}) => {
  return{
    token,
    user
  };
};

const mapDispatchToProps = (dispatch)=> {
  return {
    fetchedUser: (...args) => dispatch(fetchedUser(...args))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User)