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

test("Test Isosceles triangle", () => {
  const { getByText } = render(TriangleIdentifier(6, 7, 6));
  expect(getByText("ISOSCELES")).toBeTruthy();
});

test("Test Isosceles triangle", () => {
  const { getByText } = render(TriangleIdentifier(7, 6, 6));
  expect(getByText("ISOSCELES")).toBeTruthy();
});

test("Test Invalid triangle", () => {
  const { getByText } = render(TriangleIdentifier(8, 0, 9));
  expect(getByText("INVALIDO")).toBeTruthy();
});

test("Test Invalid triangle", () => {
  const { getByText } = render(TriangleIdentifier(2, 3, -4));
  expect(getByText("INVALIDO")).toBeTruthy();
});

test("Test is not a triangle", () => {
  const { getByText } = render(TriangleIdentifier(1, 2, 3));
  expect(getByText("NÃO É TRIANGULO")).toBeTruthy();
});

test("Test is not a triangle", () => {
  const { getByText } = render(TriangleIdentifier(1, 3, 2));
  expect(getByText("NÃO É TRIANGULO")).toBeTruthy();
});

test("Test is not a triangle", () => {
  const { getByText } = render(TriangleIdentifier(3, 2, 1));
  expect(getByText("NÃO É TRIANGULO")).toBeTruthy();
});

test("Test is not a triangle", () => {
  const { getByText } = render(TriangleIdentifier(1, 2, 8));
  expect(getByText("NÃO É TRIANGULO")).toBeTruthy();
});

test("Test is not a triangle", () => {
  const { getByText } = render(TriangleIdentifier(8, 1, 2));
  expect(getByText("NÃO É TRIANGULO")).toBeTruthy();
});

test("Test is not a triangle", () => {
  const { getByText } = render(TriangleIdentifier(0, 0, 0));
  expect(getByText("NÃO É TRIANGULO")).toBeTruthy();
});

test("Test Invalid triangle", () => {
  const { getByText } = render(TriangleIdentifier(1 / 2, 3 / 4, 5));
  expect(getByText("INVALIDO")).toBeTruthy();
});

test("Test Invalid triangle", () => {
  const { getByText } = render(TriangleIdentifier(7, 8));
  expect(getByText("INVALIDO")).toBeTruthy();
});
