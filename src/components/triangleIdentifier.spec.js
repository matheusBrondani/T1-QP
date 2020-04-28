import React from "react";
import { render } from "@testing-library/react";
import TriangleIdentifier from "./triangleIdentifier";

test("Test Scalene triangle", () => {
  const { getByText } = render(TriangleIdentifier(2, 3, 4));
  expect(getByText("ESCALENO")).toBeTruthy();
});

test("Test Equilateral triangle", () => {
  const { getByText } = render(TriangleIdentifier(5, 5, 5));
  expect(getByText("EQUILATERO")).toBeTruthy();
});

test("Test Isosceles triangle", () => {
  const { getByText } = render(TriangleIdentifier(6, 6, 7));
  expect(getByText("ISOSCELES")).toBeTruthy();
});

test("Test Invalid triangle", () => {
  const { getByText } = render(TriangleIdentifier(6, 6, -7));
  expect(getByText("INVALIDO")).toBeTruthy();
});
