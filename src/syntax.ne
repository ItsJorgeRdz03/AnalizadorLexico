input
    -> funcion
    |  variable

funcion
    -> "function" " " identificador propfun conLA contenido conLC
    |  "const" " " identificador conIgual propfun conD conLA contenido conLC

propfun
    -> conPA parametros conPC
    -> conPA conPC

contenido
    -> variable
    |  variable contenido
    |  objeto
    |  objeto contenido

variable
    -> tipoDato " " identificador ";" 
    |  tipoDato " " identificador conIgual valor ";"
    |  tipoDato " " identificador conIgual identificador propfun ";"
    |  tipoDato " " identificador conIgual objeto ";"
    |  identificador conIgual valor ";" 
    |  tipoDato " " identificador  conIgual operacion ";"
    |  identificador conIgual operacion ";" 
    |  identificador conIgual identificador propfun ";" 
    |  identificador conIgual objeto ";"

objeto
    -> propob
    |  propob "." propfun

propob
    -> identificador 
    |  identificador "." objeto

operacion
    -> valor
    |  valor conOp operacion
    |  identificador
    |  identificador conOp operacion
    |  conCA operacion conCC

valor
    -> numero
    |  caracter
    |  string
    |  booleano
    |  arreglo
    |  null

arreglo
    -> conCA parametros conCC

parametros
    -> valor
    |  identificador
    |  objeto
    |  valor conComa parametros
    |  objeto conComa parametros
    |  identificador conComa parametros

numero
    -> digitos "." digitos
    |  digitos

identificador
    -> lenguaje
    |  lenguaje identificador
    |  lenguaje identificador digitos

conOp
    -> operadores
    |  " " operadores " "

operadores
    -> "+"
    |  "-"
    |  "*"
    |  "/"
    |  ">"
    |  "<"
    |  ">="
    |  "<="
    |  "=="

tipoDato
    -> "var"
    |  "let"
    |  "const"

Nulo
    -> "null"

booleano
    -> "true"
    |  "false"

string
    -> "\"" caracteres "\""

digitos
    -> digito
    |  digito digitos

caracteres
    -> caracter
    |  caracteres

lenguaje
    -> [a-zA-Z_]

caracter
    -> [^\"]

digito
    -> [0-9]

conIgual
 -> "="
 |  " " "=" " "

 conPA
 -> "("
 |  " " "("
 |  " " "(" " "

 conPC
 -> ")"
 |  " " ")"
 |  " " ")" " "

 conLA
 -> "{"
 |  " " "{" 
 |  " " "{" " "

 conLC
 -> "}"
 |  " " "}"
 |  " " "}" " "

 conCA
 -> "["
 |  " " "["
 |  " " "[" " "

 conCC
 -> "]"
 |  " " "]"
 |  " " "]" " "

 conComa
 -> ","
 |  "," " "
 
 conD
 -> "=>"
 |  "=>" " "
 |  " " "=>"
 |  " " "=>" " "