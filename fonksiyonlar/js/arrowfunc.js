//normal fonk.
function hello(name) {
    console.log(`Hello ${name}`);
}
hello("Js");
//arrow fonk.
//değişken gibi tanımlanırlar
const sayHi = () => {
    console.log("Hi");
};
sayHi();
//parametre de alabilirler.
const helloFunc = (name) => {
    console.log(`Hello ${name}`);
};
helloFunc("HTML");

//birden fazla parametre de alabilirler.
const sayHello = (name, surname) => {
    console.log(`Merhaba ${name} ${surname}`);
};
sayHello("Şeyma", "Yılmaz");

//return kullanımı

const funcWRet = (name, surname) => {
    let info = `Merhaba ${name} ${surname}`;
    //console.log(info);
    return info;
};
console.log(funcWRet("Mert", "Korkmaz"));

//return kullanımı 2
const funcWRet2 = (name, surname) => {
    return `Merhaba ${name} ${surname}`;
};
console.log(funcWRet2("Ahmet", "Korkmaz"));