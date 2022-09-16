import { render, screen, waitFor } from '@testing-library/react';
import Home from '@pages/index';
import { userEvent } from '@storybook/testing-library';
import { handlers } from '@mocks/handlers';
import { server } from '@mocks/server';

describe('Home', () => {
  test('renders homepage unchanged', () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });

  test('renders a heading', async () => {
    server.use(...handlers);

    render(<Home />);

    const button = screen.findByRole('button');
    button.then((element) => {
      userEvent.click(element);
    });

    await waitFor(
      () =>
        screen.findByRole('heading', {
          name: /vuong/i,
        }),
      {
        timeout: 2000,
      },
    );

    expect(
      screen.getByRole('heading', {
        name: /vuong/i,
      }),
    ).toBeInTheDocument();
  });
});
