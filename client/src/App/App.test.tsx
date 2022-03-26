import ReactDOM from "react-dom";
import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";
import { WorkingPanel } from "../WorkingPanel/WorkingPanel";
import { App } from "./App";

describe("App", () => {
  let container;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });
  // eslint-disable-next-line react/no-render-return-value
  const render = (component) => ReactDOM.render(component, container);

  it("Renders App main component", () => {
    const text = "Welcome to Control panel";

    render(<App />);
    expect(document.body.textContent).toMatch(text);
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
