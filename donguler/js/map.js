//map == for each e benzer ama map de yeni liste döneriz
const users = ["AYSE", "MehMet", "TugCE", "AkSEL"];

//map ile hepsini küçük harfe çevir

let newUsers = users.map((user) => user.toLowerCase());
console.log(newUsers);

//orn: users ın her bir indexi için {userName: 'AYSE', shortName: 'A.', newName: 'Ayse'} şeklinde bir yapı oluştur.
//not return dönmek gerekirse süslü parantez kullanılır {} veya return yerine normal parantez kullanıp tek bir obje oluşturulup onu dönecem denir.
let n = users.map((item) => {
    //   1.
    console.log("1.yol");
    return {
        userName: item,
        shortName: item[0].toUpperCase(),
        newName: item.toLowerCase(),
    };
    console.log("2.yol");
    //  2.
    //  return {
    //      userName: item,
    //      shortName: `${item[0]}.`,
    //      newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`,
    //  };
});
console.log(n);
//3.
console.log("3.yol");
let a = users.map((item) => ({
    userName: item,
    shortName: `${item[0]}.`,
    newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`,
}));
console.log(a);