import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import About from "..";

describe("About component", () => {
  // First Test
  it("renders", () => {
    render(<About />);
  });

  it(",matches snapshot DOM structure", () => {
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
  });
});

afterEach(cleanup);
