import {Link } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { Navigate} from "react-router";
import { useEffect, useState } from "react";
import { fetchedUser } from "../../services/redux/fetch/fetcheduser";
import EditUserName from "./edituser";
import Changenamestyle from "../../styles/userstyles/changenamestyle";

const User = ({token, fetchedUser }) => {
  const [isToggleBtn, setIsToggleBtn] = useState(true);
  const [isToggle, setIsToggle] = useState(false);
  const firstName = useSelector((state)=>state.firstName);

  

  useEffect(() => {
    if (token) {
      const request = {
        method: "POST",
        endPoints: "profile",
        token: token
      };

      fetchedUser(request);
    }
  }, [token, fetchedUser]);

  
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
            <h2>{firstName}</h2>
          </div>
         <Link to={`user/edit`} onClick={()=> change()}  className="edit-button" style={{display: isToggleBtn ? "flex": "none"}}>Edit Name </Link>
        </div>

<EditUserName token={token} change={change} isToggle={isToggle}/><Changenamestyle/>

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