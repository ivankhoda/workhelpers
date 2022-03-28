import React, { useState } from "react";
import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";
import "../style.scss";
import { WorkingPanel } from "../WorkingPanel/WorkingPanel";
import "./App.style.scss";

export const App = () => {
  const [token, setToken] = useState();
  // if(!token) {
  //   return <Login setToken={setToken} />
  // }
  // const routes = [
  //   { path: "/", name: "Dashboard", Component: <Dashboard /> },
  //   { path: "/stats", name: "Settings", Component: <Statistics /> },
  // ];
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <WorkingPanel />
    </div>
    // <HashRouter>
    //   <StyledDiv>
    //     <Header />
    //     <Sidebar />
    //     <StyledWorkspace>
    //       <Routes>
    //         {routes.map(({ path, Component }) => (
    //           <Route key={path} path={path} element={Component} />
    //         ))}
    //       </Routes>
    //     </StyledWorkspace>
    //   </StyledDiv>
    // </HashRouter>
  );
};
