import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "../i18n";

import { RegisterForm } from "./RegisterForm";

describe("< RegisterForm />", () => {
	it("should render without errors", () => {
		expect(() => render(<RegisterForm />)).not.toThrow();
	});
	it("should display a title with 5-30 chars", () => {
		render(<RegisterForm />);
		const el = screen.getAllByRole("heading")[0];

		expect(el).toBeVisible();
		expect(el.textContent?.length).toBeGreaterThanOrEqual(5);
		expect(el.textContent?.length).toBeLessThanOrEqual(30);
	});
	it("should display a small description with 30-120 chars", () => {
		render(<RegisterForm />);
		const el = screen.getAllByText(/^.{30,100}$/i)[0];

		expect(el).toBeVisible();
		expect(el.textContent?.length).toBeGreaterThanOrEqual(30);
		expect(el.textContent?.length).toBeLessThanOrEqual(120);
	});
	it("should display an required email input", async () => {
		render(<RegisterForm />);
		const el = screen.getByLabelText(/mail/i);

		expect(el).toBeVisible();
		expect(el).toBeEnabled();
		expect(el).toBeRequired();

		await userEvent.type(el, "myemail@gmail.com");
		expect(el).toHaveValue("myemail@gmail.com");
	});
	it("should display a password input right after the email input", async () => {
		render(<RegisterForm />);

		/* Password's label may differ due to i18n. */
		const el = screen.getByLabelText(/password/i);
		expect(el).toBeVisible();
		expect(el).toHaveAttribute("type", "password");
		expect(el).toBeRequired();

		const password = "my_password123#";
		await userEvent.type(el, password);
		expect(el).toHaveValue(password);
	});
	it("should display a link to switch to login (10-40ch)", () => {
		render(<RegisterForm />);
		const el = screen.getByRole("link");
		expect(el).toBeVisible();
		expect(el).toHaveTextContent(/^[A-Za-z .!?]{10,40}$/);
		expect(el).toHaveAttribute("href", "/login");
	});
	it("should display a submit button as a second button (4-12ch)", () => {
		render(<RegisterForm />);
		const el = screen.getByRole("button");
		expect(el).toBeVisible();
		expect(el).toHaveTextContent(/^[A-Za-z ]{4,12}$/);
	});
});
