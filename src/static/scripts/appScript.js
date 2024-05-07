const input = document.getElementById("in");
const output = document.getElementById("out");
const button = document.getElementById("anBtn");
const t1 = document.getElementById("t1");
const t2 = document.getElementById("t2");

var actualSt = 1;

function changeColor(st) {
  if (st === 1) {
    t1.style.backgroundColor = "#0a255f";
    t2.style.backgroundColor = "#0d47a1";
  } else {
    t2.style.backgroundColor = "#0a255f";
    t1.style.backgroundColor = "#0d47a1";
  }
}

t1.addEventListener("click", () => {
  actualSt = 1;
  changeColor(actualSt);
});

t2.addEventListener("click", () => {
  actualSt = 2;
  changeColor(actualSt);
});

button.addEventListener("click", () => {
  let cadena = {
    string: input.value,
  };
  const req = new XMLHttpRequest();
  req.onreadystatechange = function () {
    if (req.readyState == XMLHttpRequest.DONE) {
      output.value = req.responseText;
    }
  };
  actualSt === 1
    ? req.open("POST", "lexer", true)
    : req.open("POST", "parser", true);
  req.setRequestHeader("Content-type", "application/json");
  req.send(JSON.stringify(cadena));
  console.log(cadena);
});

changeColor(actualSt);
