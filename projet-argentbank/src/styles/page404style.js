import {createGlobalStyle} from "styled-components";

const Errorstyle = createGlobalStyle`
main {
  justify-content: center;
}

.error {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: red;
  text-align: center;
  height: 60vh;
  margin-bottom: 13%;
}

.error-message {
  font-size: x-large;
  height: 50%;
}

.error-back {
  margin-top: 5%;
  text-decoration: none;
}
`

export default Errorstyle;