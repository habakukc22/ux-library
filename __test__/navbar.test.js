import { render, screen } from "@testing-library/react";
import Navbar from "../components/layout/Navbar";
import userEvent from "@testing-library/user-event";

describe("Navbar", () => {
  it("renders textbox", () => {
    render(<Navbar />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("renders the typed text", async () => {
    render(<Navbar />);

    await userEvent.type(screen.getByRole("textbox"), "Hey you");

    // screen.logTestingPlaygroundURL();

    expect(screen.getByDisplayValue(/hey you/i)).toBeInTheDocument();
  });
});
