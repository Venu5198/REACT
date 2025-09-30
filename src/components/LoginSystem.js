import React from "react";

const LoginSystem = () => {
  return (
    <div>
      <h2>Login System Component</h2>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginSystem;
