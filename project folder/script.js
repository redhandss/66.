/* script.js */
function checkPasskey() {
    const passkey = document.getElementById("passkey").value;
    const output = document.getElementById("output");

    if (passkey === "1626") {
        output.textContent = "they go up and down.. the waves…\n34.0381° N, 118.6923° W";
    } else {
        output.textContent = "Incorrect... try again.";
    }
}
