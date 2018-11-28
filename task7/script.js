
function handleClick() {
    var zodziai = document.getElementById("input").value;
    var masyvas = zodziai.split(",");
    var suma = 0;
    masyvas.forEach(
        function (item) {
            suma += Number(item);
            document.getElementById("output").innerHTML += item + "<br>";
        }
    );
    document.getElementById("output").innerHTML += "Suma yra: " + suma + "<br>";
}







































































































