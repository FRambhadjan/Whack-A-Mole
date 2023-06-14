//easyMode link...........................................
function easyMode() {
    window.location.href = "../easyMode/easyMode.html"
}
//easyMode link...........................................

//okayMode link...........................................
function okayMode() {
    window.location.href = "../normalMode/normalMode.html"
}
//okayMode link...........................................

//hardMode............................................
function hardMode() {
    window.location.href = "../hardMode/hardMode.html"
}
//hardMode............................................

//LET............................................................
let startGameButton = document.querySelector('.okayModeDiv');
let startGameButtonEasy = document.querySelector('.easyModeDiv');
let startGameButtonHard = document.querySelector('.hardModeDiv');
//LET............................................................

//easyMode button...........................................
startGameButtonEasy.addEventListener('click', function () {
    easyMode();
})
//easyMode button...........................................

//okayMode button......................................
startGameButton.addEventListener('click', function () {
    okayMode();
})
//okayMode button......................................

//hardMode button..........................................
startGameButtonHard.addEventListener('click', function () {
    hardMode();
})
//hardMode button..........................................