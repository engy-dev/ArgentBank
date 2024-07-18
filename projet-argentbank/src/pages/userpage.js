import React, { Fragment } from "react";
import Accounts from "../components/usercomponents/accounts";
import Headeruser from "../components/usercomponents/headeruser";
import Titleuser from "../components/usercomponents/titleuser";
import Accountsstyle from "../styles/userstyles/accountsstyle";
import Headeruserstyle from "../styles/userstyles/headeruserstyle";
import Titleuserstyle from "../styles/userstyles/titleuserstyle";

export default class Userpage extends React.Component {
  render() {

    return (
      <Fragment>
      <Headeruser/><Headeruserstyle/>
        <main className="main bg-dark">
        <div className="name">
          <Titleuser /><Titleuserstyle/>
          </div>
          <Accounts/><Accountsstyle/>
        </main>
      </Fragment>
    );
  }
}