function handleClick() {
    var text = document.getElementById("input").value;
    if (!isNaN(text)) {
        document.getElementById("output").innerHTML = "Zodyje " + text + " ab poru surasta : " + 0;
        return;
    }

    var kiekis = 0;
    for (var i = 0; i < text.length - 1; i++) {
        if (text.charAt(i) == "a" && text.charAt(i + 1) == b) kiekis++;
    }


    document.getElementById("output").innerHTML = "Zodyje " + text + " a raidziu surasta : " + kiekis;
}




































































































