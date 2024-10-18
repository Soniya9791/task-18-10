import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="data">
      <div style={{ backgroundColor: "#6f4339", display:"flex"}}>
        <div>
          <label htmlFor="username">username</label>
          <input id="username" type="text" />
          
        </div>
        <div>
          <label htmlFor="password"> password</label>
          <input id="password" type="password"></input>
        </div>
      </div>
      <div style={{ backgroundColor: "yellow" }}>
        <button>submit</button>
      </div>
    </div>
  );
};

export default Login;
