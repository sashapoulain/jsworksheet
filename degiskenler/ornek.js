let mail = "sashapoulain5@gmail.com";
console.log(mail.search("@"));
let domain = mail.slice(14);
console.log(domain);
//noktaya kadar olan kısmı almak için...
let domainG = mail.slice(14, mail.indexOf("."));
console.log(domainG);
//bu şekilde replace de değişim olmaz
// mail.replace("gmail.com", "icloud.com");
//mail e eşitleme yapman gerek
mail = mail.replace("gmail.com", "icloud.com");
console.log(mail);