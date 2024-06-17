function verificarPassword() {
    let pass1 = document.getElementById('password1').value;
    let pass2 = document.getElementById('password2').value;
    let pass3 = document.getElementById('password3').value;

    if (pass1 === "9" && pass2 === "1" && pass3 === "1") {
        document.getElementById('resultado').textContent = "Password 1 correcto";
    } else if (pass1 === "7" && pass2 === "1" && pass3 === "4") {
        document.getElementById('resultado').textContent = "Password 2 es correcto";
    } else {
        document.getElementById('resultado').textContent = "Password incorrecto";
    }
}