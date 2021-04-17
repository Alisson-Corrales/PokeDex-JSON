function changeInput() {
    let input = document.getElementById("demo").innerHTML = "Page path is " + window.location.pathname;

    input = input.split("/")
    input = input.splice(", ");

    //console.log(input);

    //let length = 0;

    let lastInput = input[input.length - 1];
    //document.getElementById("demo").innerHTML = lastInput;

    let empty = [];

    if (lastInput == "test.html") {
        empty.push("this is the first page");
        document.getElementById("test").innerHTML = empty;
    } if (lastInput == "test2.html") {
        empty.push("this is the second page");
        document.getElementById("test").innerHTML = empty;
    } if (lastInput == "test3.html") {
        empty.push("this is the third page");
        document.getElementById("test").innerHTML = empty;
    }
    console.log(lastInput);
}

changeInput();