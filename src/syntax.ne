programa -> sentencia+
sentencia -> declaracion_variable
           | declaracion_funcion
           | sentencia_conditional
           | sentencia_expresion
           | NLINEA

declaracion_variable -> VAR IDENTIFICADOR "=" expresion PCOMA
                      | LET IDENTIFICADOR "=" expresion PCOMA
                      | CONST IDENTIFICADOR "=" expresion PCOMA

declaracion_funcion -> FUNCTION IDENTIFICADOR APAREN parametros CPAREN bloque

parametros -> IDENTIFICADOR (COMA IDENTIFICADOR)*
           | /* empty */

bloque -> ALLAVE sentencia* CLLAVE

sentencia_conditional -> IF APAREN expresion CPAREN bloque (ELSE bloque)?

sentencia_expresion -> expresion PCOMA

expresion -> term (OPERADOR term)*

term -> IDENTIFICADOR
    | NUMERO
    | STRING
    | APAREN expresion CPAREN
    | expresion OPERADOR expresion

NLINEA -> ESP NLINEA

ESP -> 

IDENTIFICADOR -> palabra
    | palabra NUMERO
    | palabra NUMERO IDENTIFICADOR 

STRING -> DCOM [^\"] DCOM

NUMERO -> digitos
    | digitos PUNTO digitos

digitos -> digito
    | digito digitos

FUNCTION -> "function"
-> ""
IF -> "if"
ELSE -> "else"
VAR -> "var"
LET -> "let"
CONST -> "const"
APAREN -> "("
CPAREN -> ")"
ALLAVE -> "{"
CLLAVE -> "}"
PUNTO -> "."
COMA -> ","
DCOM -> [\"]
PCOMA -> ";"

palabra -> lenguaje
    | lenguaje palabra

lenguaje -> [a-zA-Z_]
digito -> [0-9]