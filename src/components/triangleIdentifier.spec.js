import React from "react";
import { render } from "@testing-library/react";
import TriangleIdentifier from "./triangleIdentifier";

test("Test Scalene triangle", () => {
  const { debug, getByText } = render(TriangleIdentifier(2, 3, 4));
  debug();
  const renderText = getByText("ESCALENO");
  expect(renderText).toBeInTheDocument();
});

test("Test Equilateral triangle", () => {
  const { getByText } = render(TriangleIdentifier(5, 5, 5));
  const renderText = getByText("EQUILATERO");
  expect(renderText).toBeInTheDocument();
});

test("Test Isosceles triangle", () => {
  const { getByText } = render(TriangleIdentifier(6, 6, 7));
  const renderText = getByText("ISOSCELES");
  expect(renderText).toBeInTheDocument();
});

test("Test Invalid triangle", () => {
  const { getByText } = render(TriangleIdentifier(6, 6, -7));
  const renderText = getByText("INVALIDO");
  expect(renderText).toBeInTheDocument();
});
