import express from "express";
import path from "path";
import { fileURLToPath } from "url";
//import html from "./static/index.html";
import * as lexer from "./app.js";

const port = 80;
//const host = "localhost";
//const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/static"));

function iniciar() {
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

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

iniciar();
