import PropTypes from "prop-types";
import React, { useState } from "react";
type Form = {
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
  setToken?: () => void;
};
async function loginUser(credentials: { login: string | undefined; password: string | undefined }) {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export const Login = (props: Form) => {
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault;
    const token = await loginUser({
      login,
      password,
    });
    console.log(token);
  };
  return (
    <>
      <form id="login" onSubmit={handleSubmit}>
        <label htmlFor="login">login</label>
        <input type="text" name="login" id="login" />
      </form>
      <form id="password">
        <label htmlFor="password">password</label>
        <input type="text" name="password" id="password" />
      </form>
    </>
  );
};
Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
