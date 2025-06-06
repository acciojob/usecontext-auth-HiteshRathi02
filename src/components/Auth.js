import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";

const Auth = () => {
    const {authenticated, setAuthenticated} = useContext(AuthContext)
  return (
    <div>
      <h1>Click on the checkbox to get authenticated</h1>
      {authenticated ? <p>You are now authenticated, you can proceed</p>: <p>you are not authenticated</p>}
      <input type="checkbox" name="auth" onClick={()=>{setAuthenticated(!authenticated)}}></input>
      <label htmlFor="auth">I'm not a robot</label>
    </div>
  )
}

export default Auth
