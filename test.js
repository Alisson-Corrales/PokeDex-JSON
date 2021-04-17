let input = document.getElementById("demo").innerHTML = "Page path is " + window.location.pathname;

input = input.split("/")
input = input.splice(", ");

console.log(input);

let length = 0;

/*
for (i in input) {
    length = i.length - 1;
    document.getElementById("demo").innerHTML = input[length];
}
*/


let lastInput = input[input.length - 1];
document.getElementById("demo").innerHTML = lastInput;