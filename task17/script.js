function handleClick() {
    // var text = document.getElementById("input").value;
    // text = text.toLowerCase().split(' ').join('');
    // var textBackwards = text.split('').reverse().join('');
    // if (text == textBackwards) {
    //     document.getElementById("output").innerHTML = 'Ivestas tekstas "' + text + '" yra palindromas';
    // } else {
    //     document.getElementById("output").innerHTML = 'Ivestas tekstas "' + text + '" yra ne palindromas, nes apsukus gaunasi "' + textBackwards + '"';
    // }

    var text = document.getElementById("input").value;
    text = text.toLowerCase().split(' ').join('');
    var masyvas = text.split('');
    var arPalindromas = true;
    for (var i = 0; i < masyvas.length / 2; i++) {
        if (masyvas[i] != masyvas[masyvas.length - 1 - i]) {
            arPalindromas = false;
        }
    }
    if (arPalindromas) {
        document.getElementById("output").innerHTML = 'Ivestas tekstas "' + text + '" yra palindromas';
    } else {
        document.getElementById("output").innerHTML = 'Ivestas tekstas "' + text + '" yra ne palindromas';
    }
}




































































































