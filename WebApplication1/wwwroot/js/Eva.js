let boton = document.getElementById("enter");
boton.addEventListener("click", pulsarBoton);
function pulsarBoton() {
    let primero = document.getElementById("numIntroducido");
    let segundo = document.getElementById("numIntroducido2");
    let valorprimero = primero.value;
    let valorsegundo = segundo.value;
    let numero = parseIn(valorprimero);
    let numero2 = parseIn(valorsegundo);

    if (numero>numero2)
}