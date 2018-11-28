
function handleClick() {
    var zodziai = document.getElementById("input").value;
    var masyvas = zodziai.split(",");

    masyvas.forEach(
        function (item) {
            if (Number(item) > 100) {
                document.getElementById("output").innerHTML += item + "<br>";
            }
        }
    );

}







































































































