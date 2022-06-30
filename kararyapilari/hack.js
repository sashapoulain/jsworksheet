//hackerrank challange
//if the first letter is a,e,i,o,u return A
//if the first letter is b,c,d,f,g return B
//if the first letter is h,j,k,l,m return C
//if the first letter is n,p,q,r,s,t,v,w,x,y,z return D

function getLetter(s) {
    let letter;
    if (
        s.charAt(0) === "a" ||
        s.charAt(0) === "e" ||
        s.charAt(0) === "i" ||
        s.charAt(0) === "o" ||
        s.charAt(0) === "u"
    ) {
        letter = "A";
        return letter;
    } else if (
        s.charAt(0) === "b" ||
        s.charAt(0) === "c" ||
        s.charAt(0) === "d" ||
        s.charAt(0) === "f" ||
        s.charAt(0) === "g"
    ) {
        letter = "B";
        return letter;
    } else if (
        s.charAt(0) === "h" ||
        s.charAt(0) === "j" ||
        s.charAt(0) === "k" ||
        s.charAt(0) === "l" ||
        s.charAt(0) === "m"
    ) {
        letter = "C";
        return letter;
    } else if (
        s.charAt(0) === "n" ||
        s.charAt(0) === "p" ||
        s.charAt(0) === "q" ||
        s.charAt(0) === "r" ||
        s.charAt(0) === "s" ||
        s.charAt(0) === "t" ||
        s.charAt(0) === "v" ||
        s.charAt(0) === "w" ||
        s.charAt(0) === "x" ||
        s.charAt(0) === "y" ||
        s.charAt(0) === "z"
    ) {
        letter = "D";
        return letter;
    }
}