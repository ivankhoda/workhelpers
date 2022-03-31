import React, { SetStateAction, useState } from "react";
import "./Login.style.scss";
type Form = {
  setToken: React.Dispatch<SetStateAction<undefined>>;
};
async function loginUser(credentials: { login: string | undefined; password: string | undefined }) {
  return fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export const Login = (props: Form) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const { setToken } = props;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const token = await loginUser({
      login,
      password,
    });

    setToken(token);
  };
  return (
    <>
      <p className="login_title">Please login first</p>
      <form id="login" className="Login" onSubmit={handleSubmit}>
        <label htmlFor="login">Login</label>
        <input type="text" name="login" value={login} onChange={(e) => setLogin(e.target.value)} />

        <label htmlFor="password">Password</label>
        <input type="text" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};
