let greeting = document.querySelector("#greeting");
//classlara ulaşmak için
console.log(greeting.classList);
//class eklemek için
greeting.classList.add("text-primary");
//class a şu şekilde de ulaşmak mümkün.
console.log(greeting.className);
// aynı anda birden fazla veya tek class da ekleyebiliriz.
greeting.classList.add("text-danger", "text-bold");
greeting.classList.add("text-new");
console.log(greeting.className);

//Class silmek için
greeting.classList.remove("text-new");
//araya eklediğimiz gibi virgül koyarak birden fazla class da silebiliriz.
console.log(greeting.className);