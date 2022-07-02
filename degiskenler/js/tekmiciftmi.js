//burada bir sayının tek mi yoksa çift mi olduğunu gösteren küçük bir uygulama yapılacaktır.
//örnek
let num = prompt("sayı giriniz!");
if (num === "") {
    alert("bir sayı girmelisin!");
} else if (num % 2 === 0) {
    alert("sayı çifttir");
} else {
    alert("sayı tektir");
}