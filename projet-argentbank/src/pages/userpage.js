import React, { Fragment } from "react";
import Accounts from "../components/usercomponents/accounts";
import User from "../components/usercomponents/user";
import Accountsstyle from "../styles/userstyles/accountsstyle";
import Changenamestyle from "../styles/userstyles/changenamestyle";
import Titleuserstyle from "../styles/userstyles/titleuserstyle";

export default class Userpage extends React.Component {
  render() {

    return (
      <Fragment>
        <main className="main bg-dark">
          <User /><Titleuserstyle/><Changenamestyle/>
          <Accounts/><Accountsstyle/>
        </main>
      </Fragment>
    );
  }
}