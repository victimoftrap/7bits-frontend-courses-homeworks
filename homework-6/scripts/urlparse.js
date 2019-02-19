"use strict";

let search = new URLSearchParams(location.search);

if (search.has("firstName")) {
    document.getElementById("first-name").value = search.get("firstName");
}

if (search.has("lastName")) {
    document.getElementById("last-name").value = search.get("lastName");
}

if (search.has("email")) {
    document.getElementById("email").value = search.get("email");
}

if (search.has("gender")) {
    if (search.get("gender") === "male") {
        document.getElementById("gender-male").checked = true;
    }
    if (search.get("gender") === "female") {
        document.getElementById("gender-female").checked = true;
    }
}