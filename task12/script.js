
function handleClick() {
    var masyvas = [1, 2, 3, 4, 7, 2];
    document.getElementById("output").innerHTML = "Didziaussias yra: " + getMax(masyvas);
}


function getMax(array) {
    var result = array[0];
    array.forEach(function (item) {

        if (item > result) {
            result = item;
        }
    });
    return result;
}


































































































