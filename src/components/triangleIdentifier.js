import React from "react";

const types = {
  EQUILATERO: "EQUILATERO",
  ESCALENO: "ESCALENO",
  ISOSCELES: "ISOSCELES",
  INVALIDO: "INVALIDO",
};

function triangleIdentifier(a, b, c) {
  if (a < b + c && b < a + c && c < b + a) {
    if (a === b && b === c) return types.EQUILATERO;
    if (a !== b && a !== c && b !== c) return types.ESCALENO;
    return types.ISOSCELES;
  }
  return types.INVALIDO;
}

export default triangleIdentifier;
