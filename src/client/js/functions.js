let defaultBackground;
let buttonBeforeToggle = true;

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