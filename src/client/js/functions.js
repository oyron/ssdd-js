"use strict";

function getFizzBuzz() {
    const textArea = document.getElementById("fizzbuzz-response");
    textArea.innerHTML = "Not implemented";
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
