import { createGlobalStyle } from "styled-components";

const Userstyle = createGlobalStyle`

.header {
  color: #fff;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.header>h1{
  margin: 0 auto;
  padding-top: 1%;
  padding-right: 2.5%;
}

.edit-button {
      border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  font-weight: bold;
  padding: 10px;
text-decoration: none;
font-size: 13px;
padding: 12px 8px 12px 8px;

}

.main-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
}

.main-nav a {
  font-weight: bold;
  color: #2c3e50;
}

.main-nav a.router-link-exact-active {
  color: #42b983;
}

.main-nav-item {
  text-decoration: none;
  margin-right: 0.5rem;
}

.main-nav-item:hover {
  text-decoration: underline;
}

.main-nav-logo {
  display: flex;
  align-items: center;
}

.main-nav-logo-image {
  max-width: 100%;
  width: 200px;
}
`

export default Userstyle;