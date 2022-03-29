import React, { useState } from "react";
import { Route, Routes } from "react-router";
import { HashRouter } from "react-router-dom";
import { Dashboard } from "../Dashboard/Dashboard";
import { Header } from "../Header/Header";
import { Login } from "../Login/Login";
import { Sidebar } from "../Sidebar/Sidebar";
import "../style.scss";
import { WorkingPanel } from "../WorkingPanel/WorkingPanel";
import "./App.style.scss";
// import { useToken } from "./useToken";
const useToken = () => {
  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");

    if (tokenString) {
      let userToken = JSON.parse(tokenString);

      return userToken?.accessToken;
    }
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken: any) => {
    sessionStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token,
  };
};

export const App = () => {
  const { token, setToken } = useToken();

  if (!token) {
    console.log("No token");
    return <Login setToken={setToken} />;
  }
  const routes = [
    { path: "/dashboard", name: "Dashboard", Component: <Dashboard /> },
    // { path: "/stats", name: "Settings", Component: <Statistics /> },
  ];
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Sidebar />
        <WorkingPanel>
          <Routes>
            {routes.map(({ path, Component }) => (
              <Route key={path} path={path} element={Component} />
            ))}
          </Routes>
        </WorkingPanel>
      </HashRouter>
    </div>
  );
};
