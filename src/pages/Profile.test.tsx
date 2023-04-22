import { render } from "@testing-library/react";
import "../i18n";

// Components
import AboutYou from "../components/Profile/AboutYou";
import RequiredProfileInformation from "../components/Profile/RequiredProfileInformation";

describe("<Profile />", () => {
  it("should render RequiredProfileInformation without errors", () => {
    expect(() => render(<RequiredProfileInformation />)).not.toThrow();
  });

  it("should render RequiredProfileInformation without errors", () => {
    expect(() => render(<AboutYou />)).not.toThrow();
  });
});
