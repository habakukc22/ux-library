import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SortBox from "../components/layout/SortBox";

describe("SortBox", () => {
  it("renders sortbox with default option", () => {
    render(<SortBox />);

    expect(
      screen.getByRole("button", { name: /sort popularity/i })
    ).toBeInTheDocument();
  });

  it("renders options", async () => {
    render(<SortBox />);

    expect(
      screen.getByRole("button", { name: /sort popularity/i })
    ).toBeInTheDocument();

    await userEvent.click(
      screen.getByRole("button", { name: /sort popularity/i })
    );

    await userEvent.click(screen.getByRole("option", { name: /comments/i }));

    expect(
      screen.getByRole("button", { name: /sort comments/i })
    ).toBeInTheDocument();

    expect(
      screen.queryByRole("button", { name: /sort popularity/i })
    ).not.toBeInTheDocument();
  });
});
