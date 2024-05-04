import express from "express";
import { fileURLToPath } from "url";
import path from "path";
import * as lexer from "./lexer.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/static"));

app.get("/", async (req, res) => {
  //res.send(html);
  res.sendFile("/static/index.html");
});

app.post("/analizar", async (req, res) => {
  let data = await lexer.analizar(req.body.string);
  console.log(data);
  res.send(data).end;
  data = "";
});

export default app;
