import nearley from "nearley";
import grammar from "./syntax.cjs";

export async function analizar(texto) {
  var parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
  try {
    parser.feed(texto);
    return "Sintaxis correcta";
  } catch (e) {
    return messageError(e);
  }
}

function messageError(e) {
  let token = e.token;
  let message = e.message;
  let line = message.match(/at line (\d+)/i)[1];
  let col = message.match(/ col (\d+)/i)[1];
  let newMessage =
    `Error: token "${token.value}" desconocido ` +
    `en línea ${line} columna ${col}.`;
  return newMessage;
}
