

// encriptar
const muneco = document.getElementById("muneco");
const mensajeEncriptado = document.getElementById("mensaje_encriptado");
const botonCopiar = document.getElementById("boton_copiar")
const mensajeMuneco = document.getElementById("mensaje_muneco2")
const ingresoInformacion = document.getElementById("IngresoInformacion")

function encriptar() {
    let texto = document.getElementById("IngresoInformacion").value.toLowerCase();
    
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    
        
   
    document.getElementById("mensajeDeAlerta").value = textoEncriptado;
    mensajeDeAlerta.innerHTML = textoEncriptado;
    console.log(textoEncriptado)

    muneco.style.display="none"
    mensajeMuneco.style.display="none"
    botonCopiar.style.display="block"
    ingresoInformacion.value=""
    
   
    
}

// desencriptar
function desencriptar() {
    let texto = document.getElementById("IngresoInformacion").value.toLowerCase();
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

 
   document.getElementById("mensajeDeAlerta").value = textoDesencriptado;
   mensajeDeAlerta.innerHTML = textoDesencriptado;
    ingresoInformacion.value=""
    
}

// copiar
function copiar() {
    let textoCopiado = document.getElementById("mensajeDeAlerta");
    navigator.clipboard.writeText(textoCopiado.value)
    alert("Se copio texto")
    
}