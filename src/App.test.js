import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders hero headline and identity", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", { level: 1, name: /Ship reliable systems/i })
  ).toBeInTheDocument();
  expect(screen.getAllByText(/Jagadish Gollapalli/i).length).toBeGreaterThan(0);
});

test("renders primary CTAs", () => {
  render(<App />);
  expect(screen.getByRole("link", { name: /Explore Work/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /Contact Me/i })).toBeInTheDocument();
});
