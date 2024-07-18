import React, {useState} from "react";
import { useAppDispatch } from "../../services/redux/store";
import  login from "../../services/redux/actions";

export default function Signin() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  // Needed for handleSubmit
  const [error, setError] = useState("")
  const dispatch = useAppDispatch()
  // handleSubit post request on login back end
  const handleSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault()
    fetch('http://localhost:3001/api/v1/user/login', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        email: username,
        password: password 
      })
    })
    .then(async response => {
      const isJson = response.headers.get("content-type")?.includes("application/json")
      const data = isJson && await response.json()
      if (response.ok) {
        return{
          email: response.email,
          firstName: state.firstName,
          lastName: state.lastName,
          createdAt: state.createdAt,
          updatedAt: state.updatedAt,
          id: state.id
        }
        
        /* dispatch(login(data.body.token))
        window.location.replace("http://localhost:3000/user"); */
      } else {
        console.error(response)
        setError(data.message)
      }
    })
    .catch(error => {
      console.error(error)
      setError(error.toString())
    })
  }

    return (
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" onChange={e => setUsername(e.target.value)} />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" onChange={e => setPassword(e.target.value)} />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <input type="submit" className="sign-in-button" value="Sign In"/>
          </form>
        </section>
      </main>
    );
}
