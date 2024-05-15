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
});

export default app;
