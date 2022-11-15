function palindrome(string){
    console.log(string);
    let middle = Math.floor(string.length/2);
    let index = string.length - 1;
    for (let i = 0; i < middle; i++){
        if (string[i] !== string[index - i]){
            return false;
        }
        console.log(string[i]+" = "+string[index - i]);
    }
    return true;
}

function pardis (userOption, userNumber){
    console.log(userNumber);
    var cpuNumber = Math.floor((Math.random()*5)+1);
    console.log(cpuNumber);
    var somma = parseInt(userNumber) + cpuNumber;
    console.log(somma)
    var win = false;
    if ((userOption === "p")&&(somma%2 == 0)){
        win = true;
    }
    if ((userOption === "d")&&(somma%3 == 0)){
        win = true;
    }
    if (win == true){
        return [true, cpuNumber, somma, userOption];
    }
    else {
        return [false, cpuNumber, somma, userOption];
    }
}
//PALINDROME
window.alert("Palindrome check");
var string = window.prompt("Digita una parola");
while (isNaN(string) !== true) {
    string = window.prompt("Non può contenere solo numeri\nDigita una parola");
}
if (palindrome(string) === true){
    window.alert(string+" è palindroma");
}
else {
    window.alert(string+" non è palindroma");
}

// PARI DISPARI
window.alert("Pari Dispari Game");
var userOpt = window.prompt("Scegli:\ndispari digita 'd'\npari digita 'p'");
console.log(userOpt);
// while ((userOption !== "d") || (userOption !== "p")){
//     userOption = window.prompt("Inserimento non corretto:\ndispari digita 'd'\npari digita 'p'");
// }
var userNum = window.prompt("Inserisci un numero da 1 a 5");
console.log(userNum);

var result = pardis(userOpt, userNum);
if (result[0] == true){
    window.alert("Hai vinto!\nIl numero scelto dal cpu: "+result[1]+"\nLa somma dei numeri: "+result[2]+"\nLa tua scelta: "+result[3]);
}
else {
    window.alert("Hai perso.\nIl numero scelto dal cpu: "+result[1]+"\nLa somma dei numeri: "+result[2]+"\nLa tua scelta: "+result[3]);
}




