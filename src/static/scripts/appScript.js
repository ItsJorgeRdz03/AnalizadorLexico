const input = document.getElementById("in");
const output = document.getElementById("out");
const button = document.getElementById("anBtn");

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
  req.open("POST", "analizar", true);
  req.setRequestHeader("Content-type", "application/json");
  req.send(JSON.stringify(cadena));
  console.log(cadena);
});
