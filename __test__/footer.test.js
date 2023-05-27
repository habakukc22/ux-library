import { render, screen } from "@testing-library/react";
import Footer from "../components/layout/Footer";
// import { toBeInTheDocument } from "@testing-library/jest-dom/matchers";

describe("Footer", () => {
  it("renders the main UX header", () => {
    render(<Footer />);

    expect(
      screen.getByRole("heading", { name: /the ux library/i })
    ).toBeInTheDocument();
  });

  it("renders the facebook and twitter", () => {
    render(<Footer />);

    expect(screen.getByText(/facebook/i)).toBeInTheDocument();

    expect(screen.getByRole("img", { name: /facebook/i })).toBeInTheDocument();

    expect(screen.getByText(/twitter/i)).toBeInTheDocument();

    expect(screen.getByRole("img", { name: /twitter/i })).toBeInTheDocument();
  });
});
