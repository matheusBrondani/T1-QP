import React from "react";
import types from "../enum/types";

function TriangleIdentifier(a, b, c) {
  if (a < b + c && b < a + c && c < b + a) {
    if (a === b && b === c) return types.EQUILATERAL;
    if (a !== b && a !== c && b !== c) return types.SCALENE;
    return types.ISOSCELES;
  }
  return types.INVALID;
}

export default TriangleIdentifier;
