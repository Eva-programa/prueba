let boton = document.getElementById("boton");
boton.addEventListener("click", pulsarBoton);

function pulsarBoton() {
    let elementoInputText = document.getElementById("numIntroducido");
    let texto = elementoInputText.value;
    let numero = parseInt(texto);

    let elementoDiv = document.getElementById("salida");
    if (numero > 17)
        elementoDiv.className = "verde";
    else
        elementoDiv.className = "rojo";
}
 