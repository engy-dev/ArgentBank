import React, { Fragment } from "react";
import Accounts from "../components/usercomponents/accounts";
import Headeruser from "../components/usercomponents/headeruser";
import Titleuser from "../components/usercomponents/user";
import Accountsstyle from "../styles/userstyles/accountsstyle";
import Changenamestyle from "../styles/userstyles/changenamestyle";
import Headeruserstyle from "../styles/userstyles/headeruserstyle";
import Titleuserstyle from "../styles/userstyles/titleuserstyle";

export default class Userpage extends React.Component {
  render() {

    return (
      <Fragment>
      <Headeruser/><Headeruserstyle/>
        <main className="main bg-dark">
          <Titleuser /><Titleuserstyle/><Changenamestyle/>
          <Accounts/><Accountsstyle/>
        </main>
      </Fragment>
    );
  }
}