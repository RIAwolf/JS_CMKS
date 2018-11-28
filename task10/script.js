
function handleClick() {
    var n = document.getElementById("input").value;
    n = Number(n);

    if (n < 1) {
        document.getElementById("output").innerHTML = "Skaicius mazesnis uz 1";
    } else {
        var suma = 0;
        for (var i = 1; i <= n; i++) {
            suma += i;
        }
        document.getElementById("output").innerHTML = "Suma yra: " + suma;
    }

}





































































































