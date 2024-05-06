import nearley from "nearley";
import grammar from "./syntax.cjs";

const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

try {
  parser.feed("1");
  console.log("Sintaxis correcta", parser.results);
} catch (e) {
  console.log("Sintaxis incorrecta", e.message);
}

// Generar archivo: npx nearleyc syntax.ne -o syntax.cjs
