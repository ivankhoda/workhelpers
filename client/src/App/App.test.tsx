import { createContainer } from "../../TestHelpers/domManipulators";
import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";
import { WorkingPanel } from "../WorkingPanel/WorkingPanel";
import { App } from "./App";

describe("App", () => {
  let container, render;

  beforeEach(() => {
    ({ render, container } = createContainer());
  });

  it("Renders App main component", () => {
    render(<App />);
    expect(<App />).not.toBe(null);
  });
  it("Renders Header component", () => {
    render(<Header />);

    expect(<Header />).not.toBe(null);
  });
  it("Renders Sidebar component", () => {
    render(<Sidebar />);

    expect(<Sidebar />).not.toBe(null);
  });
  it("Renders Workingpanel component", () => {
    render(<WorkingPanel />);

    expect(<WorkingPanel />).not.toBe(null);
  });
});
