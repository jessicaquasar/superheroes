import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { Home } from "./home.component";

describe("Testing Home", () => {
  it("should be able to show H1 element", () => {
    render(<Home />);
    const element = screen.getByText("EXPLORE O UNIVERSO");
    expect(element).toBeInTheDocument();
  });
});

describe("Testing Router", () => {
  it("should go to 'Home'", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Home />
      </Router>
    );

    expect(screen.getByText("EXPLORE O UNIVERSO")).toBeInTheDocument();
  });
});
