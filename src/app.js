import express, { text } from "express";
import { fileURLToPath } from "url";
import path from "path";
import * as lexer from "./lexer.js";
import * as parser from "./parser.js";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/static"));

app.get("/", async (req, res) => {
  res.sendFile("/static/index.html");
});

app.post("/lexer", async (req, res) => {
  let data = await lexer.analizar(req.body.string);
  console.log(data);
  res.send(data).end;
  data = "";
});

app.post("/parser", async (req, res) => {
  if (req.body.string === "") {
    res.send("").end;
  }
  let data = await parser.analizar(req.body.string);
  console.log(data);
  res.send(data).end;
  /*
  await parser.escTexto(req.body.string);
  await parser.leerTexto();
  await parser.execute("java src/parser/src/codigo/Principal.java");
  await parser.execute('echo "Hello"');
  await console.log(3);
  await console.log(data);
  await res.send(data).end;*/
});

/*
await new Promise((resolve, reject) => {
  const timeoutId = setTimeout(() => {
    reject(new Error("timeout"));
  }, 500); // wait 10 sec

  escTexto(req.body.string).then((value) => {
    clearTimeout(timeoutId);
    resolve(value);
  });
});
await new Promise((resolve, reject) => {
  const timeoutId = setTimeout(() => {
    reject(new Error('timeout')) 
  }, 500) // wait 10 sec

  leerTexto().then(value => {
    clearTimeout(timeoutId)
    resolve(value)
  })
})*/

export default app;
