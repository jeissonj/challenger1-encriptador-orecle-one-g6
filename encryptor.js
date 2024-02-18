// regla de sustitucion 
// let tituloCaja2 = document.getElementById("alert");
// tituloCaja2.innerHTML  = "Aun no se ha asignado un texto a encriptar"


function presionEncriptar(){
    let cambio = { "e":"enter", "i":"imes", "a":"ai", "o":"ober", "u":"ufat"};
    alert('click')
    let mensajeOriginal = document.getElementById('comentario').value;
    console.log(mensajeOriginal)
    let mensajeModificado = mensajeOriginal.replace(/[eiaou]/g, letra => cambio[letra] ? cambio[letra] : letra);
    let tituloCaja2 = document.getElementById("bloque-texto");
    tituloCaja2.innerHTML  = mensajeModificado
    document.getElementById("bloque-imagen").src = "https://cdn-icons-png.flaticon.com/128/2572/2572665.png"
    // document.querySelector("bloque-imagen").setAttribute("disable","true");
}

function presionDesencriptar(){
    let cambio = { "enter":"e", "imes":"i", "ai":"a", "ober":"o", "ufat":"u"};
    let mensajeOriginal = document.getElementById('comentario').value;
    let mensajeModificado = mensajeOriginal.replace(/(enter|imes|ai|ober|ufat)/g, letra => cambio[letra] ? cambio[letra] : letra);
    let tituloCaja2 = document.getElementById("bloque-texto");
    tituloCaja2.innerHTML  = mensajeModificado
    document.getElementById("bloque-imagen").src = "https://cdn-icons-png.flaticon.com/128/2912/2912783.png"

}

function presionCopiar(){
    let mensajeCopiar = document.getElementById('bloque-texto').value;
    console.log(mensajeCopiar)
    navigator.clipboard.writeText(mensajeCopiar)
    .then(() => {
        console.log('Texto copiado al portapapeles correctamente.');
    })
    .catch(err => {
        console.error('Error al copiar el texto al portapapeles:', err);
    });
}



// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"