//https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model

//sayfa url
console.log(document.URL);
console.log(document.baseURI);
//location yada hostname
console.log(document.location);
console.log(document.location.hostname);
console.log(document.location.pathname);
//body,head,script...vb
console.log(document.body);
console.log(document.head);
console.log(document.scripts);
console.log(document.links);
//bodyi manipule etmek...
document.body.style.backgroundColor = "red";