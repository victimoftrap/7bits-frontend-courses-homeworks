"use strict";

let url = location.search; // "file:///path/index.html?firstName=Иван&lastName=Иванов&email=example@mail.com&gender=male";
let startPosition;
let nextPosition;
let parameter;

startPosition = url.indexOf("firstName");
if (startPosition !== -1) {
    nextPosition = url.indexOf("&", startPosition);

    nextPosition !== -1 ? parameter = url.substring(startPosition + "firstName".length + 1, nextPosition) :
        parameter = url.substring(startPosition + "firstName".length + 1);

    if (parameter.length !== 0) {
        document.getElementById("first-name").value = parameter;
    }
}

startPosition = url.indexOf("lastName");
if (startPosition !== -1) {
    nextPosition = url.indexOf("&", startPosition);

    nextPosition !== -1 ? parameter = url.substring(startPosition + "lastName".length + 1, nextPosition) :
        parameter = url.substring(startPosition + "lastName".length + 1);

    if (parameter.length !== 0) {
        document.getElementById("last-name").value = parameter;
    }
}

startPosition = url.indexOf("email");
if (startPosition !== -1) {
    nextPosition = url.indexOf("&", startPosition);

    nextPosition !== -1 ? parameter = url.substring(startPosition + "email".length + 1, nextPosition) :
        parameter = url.substring(startPosition + "email".length + 1);

    if (parameter.length !== 0) {
        document.getElementById("email").value = parameter;
    }
}