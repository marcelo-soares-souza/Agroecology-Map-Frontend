import { render } from "@testing-library/react";
import "../i18n";

import Profile from "./Profile";

describe("<Profile />", () => {
  it("should render without errors", () => {
    expect(() => render(<Profile />)).not.toThrow();
  });
});
