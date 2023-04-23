import { render } from "@testing-library/react";
import "../i18n";

// Components
import AboutYou from "../components/Profile/AboutYou";
import RequiredProfileInformation from "../components/Profile/RequiredProfileInformation";
import ProfilePreview from "../components/Profile/ProfilePreview";

describe("<Profile />", () => {
  it("should render RequiredProfileInformation without errors", () => {
    expect(() => render(<RequiredProfileInformation />)).not.toThrow();
  });

  it("should render AboutYou without errors", () => {
    expect(() => render(<AboutYou />)).not.toThrow();
  });

  it("should render ProfilePreview without errors", () => {
    expect(() => render(<ProfilePreview />)).not.toThrow();
  });
});
