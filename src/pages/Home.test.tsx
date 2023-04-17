import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import "../i18n";

import Home from "./Home";

describe("Home Component", () => {
  const jsxComponent = (
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  it("renders H1 (10-50ch) on first Page", () => {
    render(jsxComponent);
    const headingElement = screen.getByRole("heading", { level: 1 });
    expect(headingElement).toBeVisible();
    expect(headingElement.textContent?.length).toBeGreaterThanOrEqual(10);
    expect(headingElement.textContent?.length).toBeLessThanOrEqual(50);
  });
  it("renders a text description (50-220ch) on first Page", () => {
    render(jsxComponent);
    const textElement = screen.getByTestId("subtitle");
    expect(textElement).toBeVisible();
    expect(textElement.textContent?.length).toBeGreaterThanOrEqual(50);
    expect(textElement.textContent?.length).toBeLessThanOrEqual(220);
  });
  it("renders a button that Link to the register page", () => {
    render(jsxComponent);
    const buttons = screen.getAllByRole("button");
    let found = false;
    for (const btn of buttons) {
      if (btn.parentElement) {
        if (btn.parentElement.getAttribute("href") == "/register") {
          found = true;
          break;
        }
      }
    }
    expect(found).toBe(true);
  });
});
