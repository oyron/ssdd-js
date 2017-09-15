let defaultBackground;
let buttonBeforeToggle = true;

function getFizzBuzz() {
    const textArea = document.getElementById("fizzbuzz-response");
    let counter = 0;
    axios.get("/api/fizzbuzz").then(function(response) {
        textArea.innerHTML = response.data.reduce(function(accumulator, currentValue){
            if (currentValue === "Fizz") {
                currentValue = '<span style="color:red">' + currentValue + "</span>";
            }
            if (currentValue === "Buzz") {
                currentValue = '<span style="color:blue">' + currentValue + "</span>";
            }
            if (currentValue === "FizzBuzz") {
                currentValue = '<span style="color:green">' + currentValue + "</span>";
            }
            if (++counter % 10 === 0) {
                currentValue += "<br>";
            }
            return (accumulator ? accumulator + ", " : "") + currentValue;
        }, "");
    });
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