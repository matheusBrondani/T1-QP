import React from "react";
import types from "../enum/types";

function TriangleIdentifier(a, b, c) {
  if (isNullOrUndefined(a, b, c)) return types.INVALID;

  if (isInvalidNumber(a, b, c)) return types.INVALID;

  if (a < b + c && b < a + c && c < b + a) {
    if (a === b && b === c) return types.EQUILATERAL;
    if (a !== b && a !== c && b !== c) return types.SCALENE;
    return types.ISOSCELES;
  }
  return types.NOTTRIANGLE;
}

function isNullOrUndefined(a, b, c) {
  if (a === undefined || a === null) return true;
  if (b === undefined || b === null) return true;
  if (c === undefined || c === null) return true;

  return false;
}

function isInvalidNumber(a, b, c) {
  const greaterThenZeroOrAllZero =
    (a > 0 && b > 0 && c > 0) || (a === 0 && b === 0 && c === 0);
  const isInteger =
    Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c);

  if (greaterThenZeroOrAllZero && isInteger) return false;

  return true;
}

export default TriangleIdentifier;
