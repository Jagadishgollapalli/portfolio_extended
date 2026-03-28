import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders hero headline", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", { level: 1, name: /Jagadish Gollapalli/i })
  ).toBeInTheDocument();
  expect(
    screen.getByText("Full stack developer", { exact: true })
  ).toBeInTheDocument();
});
