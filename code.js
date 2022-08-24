// helloWorld function
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input) {
    if  (typeof input === "string") {
        return "Hello, " + input + "!";
    }else if (typeof input === "boolean"){
        return "Hello, World!";
    }else{
        return "Hello, World!";

    }
}
function isFive(number){
    return number === 5;
}

function isEven(numbers){
    if (numbers % 2 == 0){
        return true;
    }
}

function isVowel(letter){
    if (typeof letter !== 'string') {
        return false;
    }else if (letter.length > 1){
        return false;
    }else if (letter === "a","e","i","o","u","A","E","I","O","U"){
        return true;
    }else return false;
}