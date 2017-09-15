"use strict";

let defaultBackground;
let buttonBeforeToggle = true;

function getFizzBuzz() {
    const textArea = document.getElementById("fizzbuzz-response");
    axios.get("/api/fizzbuzz").then(responseHandler);

    function responseHandler(result) {

        let html = "";
        for (let i = 0; i < result.data.length; i++) {
            let item = formatItem(result.data[i]);
            html = (html ? html + ", " : "") + item;
        }
        textArea.innerHTML = html;
    }

    function formatItem(item) {
        if (item === "Fizz") {
            return '<span style="color: green">' + item + "</span>";
        }
        if (item === "Buzz") {
            return '<span style="color: blue">' + item + "</span>";
        }
        if (item === "FizzBuzz") {
            return '<span style="color: red">' + item + "</span>";
        }
        return item;
    }
}


function toggleBackground() {
    const button = document.getElementById("panel-heading");
    if (defaultBackground === undefined) {
        defaultBackground = button.style.background;
    }

    if (button.style.background === defaultBackground) {
        button.style.background = 'red';
    }
    else {
        button.style.background = defaultBackground;
    }
}

function toggleSize() {
    const button = document.getElementById("size-button");
    if (buttonBeforeToggle) {
        document.getElementById("panel-body").insertBefore(button, document.getElementById("button"));
    }
    else {
        document.getElementById("panel-body").appendChild(button);
    }
    buttonBeforeToggle = !buttonBeforeToggle;
}