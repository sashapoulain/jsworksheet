//obj destructuring
//mesela obje içindeki keylerin değerlerine obje üzerinden değil direkt erişmek istersek...
let settings = {
    userName: "loremIpsum",
    password: "BadPassword",
    isActive: true,
    ip: "127.0.0.1",
    serverName: "localhost",
};

//erişim yöntemi 1
// let userName = settings.userName;
// console.log(userName);

//erişim yöntemi 2
// let { userName, password, isActive, ip, serverName } = settings;
// console.log(userName);
// console.log(password);
//yada topluca bakabiliriz.

// console.log(userName, password, isActive, ip, serverName);

//diyelim ki username i user olarak almak istiyoruz artık

// let { userName: user, password, isActive, ip, serverName } = settings;

// console.log(user, password, isActive, ip, serverName);
// console.log(settings);

//obje içinden bazı bilgilerin çıkarılması da mümkün

let { userName, password, isActive, ...newSettings } = settings;
console.log(newSettings);
//bu şekilde newSettings objesini yeni obje olarak aldık. yani bir kısmını kesip yeni objeye aldık

//object destructuring ile kopyalamak

//örn: settings i settings2 diye kopyala ve onu kullan
// let settings2 = settings;
// settings2.userName = "değişen username";
// console.log("settings:  ", settings);
// console.log("settings2: ", settings2);
//bu şekilde settings2 değiştiği için settings değişmedi. bu hatalı yöntem ikisinde de username değişti.

//doğru kopyalama yöntemi
let settings3 = {...settings };
settings3.userName = "değişen username";
console.log("settings:  ", settings);
console.log("settings3: ", settings3);

//bu yapı array yani listeler içinde kullanılabilir.
let score = [100, 200, 300, 400, 500];
let [score1, score2, ...otherScores] = score;
console.log(score1, score2, otherScores);

//bunun kopyası
let copyScore = [...score];
console.log(copyScore);
copyScore[0] = 1100;
console.log(copyScore);
console.log(score);