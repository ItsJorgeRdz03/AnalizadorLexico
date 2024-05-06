// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "input", "symbols": ["number"]},
    {"name": "number", "symbols": ["digits", {"literal":"."}, "digits"]},
    {"name": "number", "symbols": ["digits"]},
    {"name": "digits", "symbols": ["digit"]},
    {"name": "digits", "symbols": ["digit", "digits"]},
    {"name": "digit", "symbols": [/[0-9]/]}
]
  , ParserStart: "input"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
