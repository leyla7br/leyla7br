let buttons = document.querySelectorAll(".button");
let resultBox = document.getElementById("result");
let calcBtn = document.querySelector(".buttoon").addEventListener("click", function () {
    resultBox.value = Math.round(eval(resultBox.value) * 100000) / 100000;
});
document.getElementById("clearBox").addEventListener("click", function () {
    resultBox.value = "";
});

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        if (buttons[i].value != "C" && buttons[i].value != "=") {
            resultBox.value += buttons[i].value;
        }
    });
};