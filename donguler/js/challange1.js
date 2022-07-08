function vowelsAndConsonants(s) {
    for (let index = 0; index < s.length; index++) {
        //   console.log(s[index]);
        if (
            s[index] == "a" ||
            s[index] == "e" ||
            s[index] == "i" ||
            s[index] == "o" ||
            s[index] == "u"
        ) {
            let a = s[index];
            console.log(a);
        }
    }
    for (let i = 0; i < s.length; i++) {
        if (
            s[i] === "b" ||
            s[i] === "c" ||
            s[i] === "d" ||
            s[i] === "f" ||
            s[i] === "g" ||
            s[i] === "h" ||
            s[i] === "j" ||
            s[i] === "k" ||
            s[i] === "l" ||
            s[i] === "m" ||
            s[i] === "n" ||
            s[i] === "p" ||
            s[i] === "q" ||
            s[i] === "r" ||
            s[i] === "s" ||
            s[i] === "t" ||
            s[i] === "v" ||
            s[i] === "w" ||
            s[i] === "x" ||
            s[i] === "y" ||
            s[i] === "z"
        ) {
            let b = s[i];
            console.log(b);
        }
    }
}
vowelsAndConsonants("javascriptloops");