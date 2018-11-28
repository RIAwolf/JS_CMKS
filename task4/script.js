
// 1-> susikurti sumos kintamaji globalioje erdveje
// 2-> nuskaityti teksta is input lauko
// 3-> paziureti ar tekstas yra lygus "0"
// 4-> jeigu tekstas yra lygus "0", turima atsakyma spausdinti i div
// 5-> jeigu tekstas nelygu "0", ivesta teksta paversti i skaiciu ir prideti prie atsakymo

var atsakymas = 0;

function handleClick() {

    var zodis = document.getElementById("input").value;

    if (zodis == "0") {
        document.getElementById("output").innerHTML = atsakymas;
    } else {
        atsakymas += Number(zodis);
    }
}







































































































