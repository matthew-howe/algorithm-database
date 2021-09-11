def to_jaden_case(string):
    newstring = string[0].upper()
    for x in range(1, len(string)):
        if string[x-1] == ' ':
            newstring = newstring + string[x].upper()
        else:
            newstring = newstring + string[x]
    return newstring

print(to_jaden_case("How can mirrors be real if our eyes aren't real"))
