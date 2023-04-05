import { render, screen } from "@testing-library/react";
import "../i18n";

import Home from "./Home";

describe("Home Component", () => {
  it("renders 'Agroecology Map' on first Page", () => {
    render(<Home />);
    const textElement = screen.getByText(/Agroecology Map/);
    expect(textElement).toBeInTheDocument();
  });
});
