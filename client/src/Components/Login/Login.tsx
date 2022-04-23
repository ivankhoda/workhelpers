import React, { SetStateAction, useState } from "react";
import "./Login.style.scss";

type Environment = {
  name: string;
  link: string | undefined;
};
const environments: Environment[] = [
  { name: "Base", link: process.env.BASE_URL },
  { name: "Int", link: process.env.DEV_URL },
  { name: "Stage", link: process.env.STAGE_URL },
];

type Form = {
  setToken: React.Dispatch<SetStateAction<undefined>>;
};
async function loginUser(credentials: {
  login: string | undefined;
  password: string | undefined;
  environment?: string;
}) {
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
  const [environment, setEnvironment] = useState("");
  const [platform, setPlatform] = useState(environments);
  const { setToken } = props;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const token = await loginUser({
      login,
      password,
      environment,
    });

    setToken(token);
  };
  //TODO add environment selection: sandbox, integrity, staging
  //can addtitionally save information about endpoint;

  return (
    <>
      <p className="login_title">Please login first</p>
      <form id="login" className="Login" onSubmit={handleSubmit}>
        <label htmlFor="login">Login</label>
        <input type="text" name="login" value={login} onChange={(e) => setLogin(e.target.value)} />

        <label htmlFor="password">Password</label>
        <input type="text" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <label htmlFor="environment">Environment</label>

        <select onChange={(e) => setEnvironment(e.target.value)}>
          {platform.map((p, i) => (
            <option key={i} value={p.link}>
              {p.name}
            </option>
          ))}
        </select>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};
