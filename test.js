let input = document.getElementById("demo").innerHTML = "Page path is " + window.location.pathname;

input = input.split("/");

console.log(input);

let length = 0;

for (i in input) {
    length = i.length - 1;
    document.getElementById("demo").innerHTML = input[length];
}
