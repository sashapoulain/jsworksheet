//obje içinde array, function, object, metod, string, number, boolean, undefined, null her şey tutabiliriz.

let user1 = {
    firstName: "Bilgin",
    lastName: "Uzman",
    score: [1, 2, 3, 4],
    isActive: true,
    //metod ekleyelim
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    },
    shortName: function() {
        return `${this.firstName[0].toUpperCase()}. ${this.lastName}`;
    },
};
console.log(user1);
console.log(user1.fullName());
console.log(user1.shortName());
//metod bu şekilde de eklenebilir.
// user1.fullName = function() {
//     return this.firstName + " " + this.lastName;
// };
// console.log(user1.fullName());
// console.log(user1);