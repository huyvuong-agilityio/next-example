import { render, screen } from "@testing-library/react";
import Home from "@pages/index";

describe("Home", () => {
  test("renders homepage unchanged", () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });

  test("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /next app/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
