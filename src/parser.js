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

/*import fs, { write } from "fs";
import { exec } from "child_process";

var texto;

export async function start(text) {
  await escTexto(text);
  let data = await leerTexto();
  return await data;
}

async function escTexto(text) {
  fs.writeFile("text.txt", text, function (err) {
    if (err) {
      return console.error(err);
    }
  });
  await console.log(1);
  return;
}*/

async function leerTexto() {
  var text;
  await fs.readFile("text.txt", function read(err, data) {
    text = data.toString();
    console.log(data.toString());
  });
  return text;
}

async function execute(command) {
  exec(command, (err, stdout, stderr) => {
    process.stdout.write(stdout);
  });
}
