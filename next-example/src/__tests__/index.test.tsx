import { render, screen, waitFor } from "@testing-library/react";
import Home from "@pages/index";
import { server } from "@mocks/server";
import { userEvent } from "@storybook/testing-library";
import { handlers } from "@mocks/handlers";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Home", () => {
  test("renders homepage unchanged", () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });

  test("renders a heading", async () => {
    server.use(...handlers);

    render(<Home />);

    userEvent.click(screen.getByRole("button"));

    await waitFor(
      () =>
        screen.getByRole("heading", {
          name: /vuong/i,
        }),
      {
        timeout: 2000,
      }
    );
    expect(
      screen.getByRole("heading", {
        name: /vuong/i,
      })
    ).toBeInTheDocument();
  });
});
