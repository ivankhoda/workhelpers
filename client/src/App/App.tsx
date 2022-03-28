import React from "react";
import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";
import "../style.scss";
import { WorkingPanel } from "../WorkingPanel/WorkingPanel";
import "./App.style.scss";

export const App = () => {
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
