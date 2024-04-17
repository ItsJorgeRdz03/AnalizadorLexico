import Lexer from "flex-js/src/Lexer.js";

var lexer = new Lexer();
var cadena;
var res = "";

lexer.addDefinition("desconocido", /\S/);
lexer.addDefinition("digito", /[0-9]+/);
lexer.addDefinition("lenguaje", /[a-zA-Z_]+/);
lexer.addDefinition("espacio", /[ ,\t,\r,\n]+/);
lexer.addDefinition("operadores", /[+,\-,*,/,<,>,=]/);
lexer.addDefinition(
  "reservadas",
  /(int|float|double|char|string|long|if|else|for|while)/
);
lexer.addDefinition(
  "comentarios",
  /(\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*+\/|\/\/.*\n?)/
);

lexer.addRule(/{digito}/, function (lexer) {
  res += "Número Entero: " + lexer.text + "\n";
});

lexer.addRule(/{digito}(\.|\,){digito}/, function (lexer) {
  res += "Número Decimal: " + lexer.text + "\n";
});

lexer.addRule(/{reservadas}/, function (lexer) {
  res += "Reservado: " + lexer.text + "\n";
});

lexer.addRule(/{lenguaje}({lenguaje}|{digito})*/, function (lexer) {
  res += "Identificador: " + lexer.text + "\n";
});

lexer.addRule(/{operadores}/, function (lexer) {
  switch (lexer.text) {
    case "+":
      res += "Suma: ";
      break;
    case "-":
      res += "Resta: ";
      break;
    case "*":
      res += "Multiplicación: ";
      break;
    case "/":
      res += "División: ";
      break;
    case ">":
      res += "Mayor: ";
      break;
    case "<":
      res += "Menor: ";
      break;
    case "=":
      res += "Igual: ";
      break;
    default:
      res += "Error: ";
      break;
  }
  res += lexer.text + "\n";
});

lexer.addRule(/{desconocido}/, function (lexer) {
  res += "Desconocido: " + lexer.text + "\n";
});

lexer.addRule(/{comentarios}/, lexer.discard());

lexer.addRule(/{espacio}/, lexer.discard());

lexer.addRule(/\s+/, lexer.discard());

export async function analizar(texto) {
  lexer.setSource(texto);
  lexer.lex();

  cadena = {
    res,
  };
  res = "";
  return cadena.res;
}
