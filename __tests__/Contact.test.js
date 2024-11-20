import { getAllByRole, screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
import Contact from "../src/components/Contact/Contact";
import { render } from "@testing-library/react";

test("Check Header Component", () => {
  render(<Contact />);

  const result = screen.getByRole("heading");
  expect(result).toBeInTheDocumet();

  //if multiple input box
});
