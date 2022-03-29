import ReactTestUtils from "react-dom/test-utils";
import { createContainer } from "../../TestHelpers/domManipulators";
import { Login } from "./Login";

describe("Login page", () => {
  let container, render;
  const form = (id) => container.querySelector(`form[id="${id}"]`);
  const field = (fieldName) => form("login").elements[fieldName];
  const expectToBeInputFieldOfTypeText = (formElement) => {
    expect(formElement).not.toBeNull();
    expect(formElement.tagName).toEqual("INPUT");
    expect(formElement.type).toEqual("text");
  };

  const labelFor = (formElement) => container.querySelector(`label[for="${formElement}"]`);

  const itRendersFieldAsAtextBox = (fieldName) => {
    it("renders as a text box", () => {
      render(<Login onSubmit={() => {}} />);
      expectToBeInputFieldOfTypeText(field(fieldName));
    });
  };

  const itRendersAlabelForField = (fieldName) => {
    it("includes the existing value", () => {
      render(<Login onSubmit={() => {}} />);
      expect(labelFor(fieldName)).not.toBeNull();
      expect(labelFor(fieldName).textContent).toEqual(fieldName);
    });
  };

  const itAssignsAnId = (fieldName, id) => {
    it("assigns an id that matches the label id to the  field", () => {
      render(<Login onSubmit={() => {}} />);
      expect(field(fieldName).id).toEqual(id);
    });
  };

  beforeEach(() => {
    ({ render, container } = createContainer());
  });
  it("Renders a Login form", () => {
    render(<Login onSubmit={() => {}} />);
    expect(form("login")).not.toBeNull();
  });

  describe("Login field", () => {
    itRendersFieldAsAtextBox("login");

    itRendersAlabelForField("login");

    itAssignsAnId("login", "login");

    // it.skip("renders a label for the login field", () => {
    //   render();
    //   expect(labelFor("login").textContent).toEqual("Login");
    // });
  });
  describe("Password field", () => {
    itRendersFieldAsAtextBox("password");

    itRendersAlabelForField("password");

    itAssignsAnId("password", "password");
  });

  it("saves existing first name when submitted", async () => {
    expect.hasAssertions();
    render(<Login password={"123"} onSubmit={(e: React.FormEvent<HTMLFormElement>) => console.log(e.currentTarget)} />);

    await ReactTestUtils.Simulate.submit(form("login"));
  });
});
