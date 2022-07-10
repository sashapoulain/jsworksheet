const products = ["laptop", "phone", "tablet", "tv", "camera", "speaker"];
//forEach 3 parametre alabilir. 1. element 2. index 3. array
products.forEach(
    (product, index, array) =>
    // console.log(product)
    //  console.log(array[index])
    //  console.log((array[index] = product + " 111"))
    //  console.log((array[index] = `${product.toUpperCase()}`))
    (array[index] = `${product.toUpperCase()}`)
);
// yada console.log(array[index]) ile de direkt product yazarak ulaşabildiğimize ulaşabiliriz.
//yani console.log(array[index]) = console.log(product)

console.log(products);

//yani tek başına product ı da alabiliriz ama array ve indexi de alarak içinde işlem de yapabiliriz.

const ul = document.querySelector("#userList");

products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = product;
    ul.append(li);
});