input
    -> number

number
    -> digits "." digits
    | digits

digits
    -> digit
    | digit digits

digit
    -> [0-9]