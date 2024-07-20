import { useEffect } from "react";
import Accounts from "../components/usercomponents/accounts";
import User from "../components/usercomponents/user";
import Accountsstyle from "../styles/userstyles/accountsstyle";
import Userstyle from "../styles/userstyles/userstyle";
import { useSelector } from "react-redux";

/*user page which contains usercontent and accounts component*/
export default function Userpage() {
  const token = useSelector((state) => state.token);
  /*Redirect the user if he didn't login, so don't fetch the token*/
  useEffect(() => {
    if (token === "") document.location.replace('/')
  })

  return (
    <main className="main bg-dark">
      {(token === "") ? (null) : <><User /><Userstyle /><Accounts /><Accountsstyle /></>}
    </main>
  );
}