/*letra "e" é convertida para "enter"
*letra "i" é convertida para "imes"
*letra "a" é convertida para "ai"
*letra "o" é convertida para "ober"
*letra "u" é convertida para "ufat"*/


const mensagemPrincipal = document.querySelector(".mensagemPrincipal");
const resultado = document.querySelector(".resultado");
const botaoCopiar = document.querySelector(".botaoCopiar");

function botaoEncrip() {

    const encriptarTexto = encriptar(mensagemPrincipal.value);
    resultado.value = encriptarTexto;
}

function encriptar(stringEncriptada) {
    let codigoMensagem = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < codigoMensagem.length; i++) {
        if (stringEncriptada.includes(codigoMensagem[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(codigoMensagem[i][0], codigoMensagem[i][1]);
        }
    }
    return stringEncriptada;
}


function botaoDescr() {
    const descripTexto = descriptografar(mensagemPrincipal.value);
    resultado.value = descripTexto;
}

function descriptografar(stringDescriptografada) {
    let codigoMensagem = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDescriptografada = stringDescriptografada.toLowerCase();

    for (let i = 0; i < codigoMensagem.length; i++) {
        if (stringDescriptografada.includes(codigoMensagem[i][1])) {
            stringDescriptografada = stringDescriptografada.replaceAll(codigoMensagem[i][1], codigoMensagem[i][0]);
        }
    }
    return stringDescriptografada;
}


botaoCopiar.addEventListener("click", copiar);

function copiar() {
    navigator.clipboard.writeText(document.querySelector(".resultado").value);
}