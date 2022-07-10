//fetch api
//json dosyasından veri çekmek için...

fetch("settings.json")
    .then((response) => {
        //  console.log(response);
        //her şey yolundaysa bu logdan sonra alınan bilgileri return ile döneriz.
        return response.json();
    })
    .then((responseJSON) => {
        console.log(responseJSON);
        console.log(responseJSON.userName);
    });

//bir web sitesinden veri çekmek için...
//ws: https://jsonplaceholder.typicode.com/
//mesela posts u alalım : link ve /posts şeklinde

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
        });
    });