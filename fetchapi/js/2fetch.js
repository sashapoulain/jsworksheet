//web sitesinden çekilen verileri htmlde göstermek için...

let ul = document.querySelector("#userList");
fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((responseJSON) => {
        console.log(responseJSON);
        console.log(responseJSON[0].title);
        console.log(responseJSON[0].body);
        //veya
        console.log(responseJSON[0].title);
        //veya
        console.log(responseJSON[0]);
        //yada foreach ile dolaşıp listeleyebiliriz.
        responseJSON.forEach((element) => {
            console.log(element);
            //sadece title ı da listeleyebiliriz.
            console.log(element.title);
            //lİ Oluştur
            const li = document.createElement("li");
            li.innerHTML = element.title;
            ul.appendChild(li);
        });
    });