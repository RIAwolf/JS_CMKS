function handleClick() {
    var text = document.getElementById("input").value;

    text=text.toLowerCase();
    text=text.split(' ').join();
    var textBackwards=text.split('').reverse().join('');

   if(text == textBackwards) {
       document.getElementById("output").innerHTML = 'Ivestas tekstas "'+text+'" yra palindromas';
   }else{
       document.getElementById("output").innerHTML = 'Ivestas tekstas "'+text+'" yra ne palindromas, nes apsukus gaunasi "'+textBackwards+'"';
   }
}




































































































