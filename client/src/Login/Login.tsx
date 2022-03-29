import React, { SetStateAction, useState } from "react";
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
    console.log(token, "token from login component");
    setToken(token);
  };
  return (
    <>
      <form id="login" onSubmit={handleSubmit}>
        <label htmlFor="login">login</label>
        <input type="text" name="login" id="login" value={login} onChange={(e) => setLogin(e.target.value)} />

        <label htmlFor="password">password</label>
        <input
          type="text"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};
// Login.propTypes = {
//   setToken: PropTypes.func.isRequired,
// };
