import Lexer from "flex-js/src/Lexer.js";

var lexer = new Lexer();
var cadena;
var res = "";

lexer.addDefinition("desconocido", /\S/);
lexer.addDefinition("digito", /[0-9]+/);
lexer.addDefinition("lenguaje", /[a-zA-Z_]+/);
lexer.addDefinition("espacio", /[ ,\t,\r,\n]+/);
lexer.addDefinition("operadores", /[\+,\-,\*,\/,\<,\>,\=]/);
lexer.addDefinition("unitarios", /(\+\+|\-\-)/);
lexer.addDefinition("logicos", /(\&\&|\|\||\!|\!\=|\=\=|\>\=|\<\=)/);
lexer.addDefinition("caracteres", /[\,,\;,\:,\.,\(,\),\{,\},\[,\]]/);
lexer.addDefinition(
  "reservadas",
  /(if|else|for|while|do|swtich|case|try|catch|var|let|new|void|null|undefined)/
);
lexer.addDefinition("tiposDeDatos", /(int|float|double|char|string|long)/);
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

lexer.addRule(/{tiposDeDatos}/, function (lexer) {
  res += "Tipo de dato: " + lexer.text + "\n";
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
  }
  res += lexer.text + "\n";
});

lexer.addRule(/{unitarios}/, function (lexer) {
  switch (lexer.text) {
    case "++":
      res += "Incremento: ";
      break;
    case "--":
      res += "Decremento: ";
      break;
  }
  res += lexer.text + "\n";
});

lexer.addRule(/{logicos}/, function (lexer) {
  switch (lexer.text) {
    case "&&":
      res += "AND: ";
      break;
    case "||":
      res += "OR: ";
      break;
    case "!":
      res += "NOT: ";
      break;
    case "!=":
      res += "No es igual que: ";
      break;
    case "==":
      res += "Igual que: ";
      break;
    case ">=":
      res += "Mayor igual: ";
      break;
    case "<=":
      res += "Menor igual: ";
      break;
  }
  res += lexer.text + "\n";
});

lexer.addRule(/{caracteres}/, function (lexer) {
  switch (lexer.text) {
    case ",":
      res += "Coma: ";
      break;
    case ".":
      res += "Punto: ";
      break;
    case ";":
      res += "Punto y coma: ";
      break;
    case ":":
      res += "Dos puntos: ";
      break;
    case "(":
      res += "Parentesis de apertura: ";
      break;
    case ")":
      res += "Parentesis de cerradura: ";
      break;
    case "{":
      res += "Llave de apertura: ";
      break;
    case "}":
      res += "Llave de cerradura: ";
      break;
    case "[":
      res += "Corchete de apertura: ";
      break;
    case "]":
      res += "Corchete de cerradura: ";
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

console.log(analizar("x++ * >= == = && ["));
