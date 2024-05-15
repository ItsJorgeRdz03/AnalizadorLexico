programa -> sentencia:+

sentencia -> declaracion_variable NLINEA:* TAB:?
          |  declaracion_sentencia NLINEA:* TAB:?
          |  declaracion_funcion NLINEA:* TAB:?
          |  declaracion_condicional NLINEA:* TAB:?
          |  declaracion_ciclica NLINEA:* TAB:?

declaracion_funcion -> FUNCTION ESP funcion ESP ALLAVE NLINEA:? contenido_funcion:+ CLLAVE
                    |  APAREN parametros CPAREN ESP "=>" ESP ALLAVE NLINEA:? contenido_funcion:+ CLLAVE

contenido_funcion -> TAB:? declaracion_variable NLINEA:*
                   | TAB:? declaracion_sentencia NLINEA:*
                   | TAB:? declaracion_condicional NLINEA:*
                   | TAB:? declaracion_ciclica NLINEA:*

declaracion_ciclica -> FOR ESP APAREN parametros_ciclica CPAREN ESP ALLAVE NLINEA:? contenido_cic:+ TAB:? CLLAVE

parametros_ciclica -> declaracion_variable ESP IDENTIFICADOR ESP COPERADOR ESP term PCOMA ESP IDENTIFICADOR ESP IGUAL ESP operacion
                    | IDENTIFICADOR PCOMA ESP IDENTIFICADOR ESP COPERADOR ESP NUMERO PCOMA ESP IDENTIFICADOR ESP IGUAL ESP operacion

contenido_cic -> TAB:? declaracion_variable NLINEA:*
                | TAB:? declaracion_sentencia NLINEA:*
                | TAB:? declaracion_condicional NLINEA:*

declaracion_condicional -> IF ESP APAREN parametros_condicional CPAREN ESP ALLAVE NLINEA:? contenido_cond:+ TAB:? CLLAVE (ESP ELSE ESP ALLAVE NLINEA:? contenido_cond:+ TAB:? CLLAVE):?

parametros_condicional -> BOOLEANO
                        | term ESP COPERADOR ESP term (ESP LOPERADOR ESP term ESP COPERADOR ESP term):*

contenido_cond -> TAB:? declaracion_variable NLINEA:*
                | TAB:? declaracion_sentencia NLINEA:*

declaracion_sentencia -> funcion PCOMA
                      | objeto IDENTIFICADOR PCOMA
                      | objeto funcion PCOMA

declaracion_variable -> VAR ESP IDENTIFICADOR ESP IGUAL ESP term PCOMA
                      | LET ESP IDENTIFICADOR ESP IGUAL ESP term PCOMA
                      | CONST ESP IDENTIFICADOR ESP IGUAL ESP term PCOMA

objeto -> (IDENTIFICADOR PUNTO):+

funcion -> IDENTIFICADOR APAREN parametros CPAREN

parametros -> (term (COMA ESP term):*):?



operacion -> term ESP OPERADOR ESP term (ESP OPERADOR ESP term):*

term -> IDENTIFICADOR
    | NUMERO
    | STRING
    | BOOLEANO

TAB -> ESP ESP:+ 

NLINEA -> ESP:* "\n"

ESP -> " "

IDENTIFICADOR -> lenguaje
               | (lenguaje NUMERO):+

STRING -> DCOM TEXTO:+ DCOM

TEXTO -> lenguaje
       | digito
       | ESP

BOOLEANO -> "true"
        |  "false"

NUMERO -> digito
    | digito PUNTO digito

FUNCTION -> "function"
RETURN -> "return"
IF -> "if"
ELSE -> "else"
FOR -> "for"
VAR -> "var"
LET -> "let"
CONST -> "const"
IGUAL -> "="
APAREN -> "("
CPAREN -> ")"
ALLAVE -> "{"
CLLAVE -> "}"
PUNTO -> "."
COMA -> ","
DCOM -> ["]
PCOMA -> ";"

LOPERADOR -> "&&"
        |  "||"
        |  "!"

COPERADOR -> "=="
          |  ">="
          |  ">"
          |  "<="
          |  "<"

OPERADOR -> "+"
        |  "-"
        |  "*"
        |  "/"

lenguaje -> [a-zA-Z_]:+
digito -> [0-9]:+