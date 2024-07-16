import {createGlobalStyle} from "styled-components";

const Signincontentstyle = createGlobalStyle`

.bg-dark {
  background-color: #12002b;
  padding-top: 0.1%;
  padding-bottom: 6.8%;
}

@media (min-width: 920px) {
    .sign-in-button {
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
}

.sign-in-content {
  box-sizing: border-box;
  background-color: white;
  width: 300px;
  margin: 0 auto;
  margin-top: 3rem;
  padding: 2rem;
}

.sign-in-icon {
  font:normal normal normal 14px/1 FontAwesome;
color: #2c3e50;
}

.input-remember {
  display: flex;
}

.input-remember label {
  margin-left: 0.25rem;
}

.input-wrapper {
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 1rem;
}

.input-wrapper label {
  font-weight: bold;
}

.input-wrapper input {
  padding: 5px;
  font-size: 1.2rem;
}
}
`

export default Signincontentstyle;