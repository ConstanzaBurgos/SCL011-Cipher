// Llamo los ID de mis cajas

let botoncitoEncode = document.getElementById("botonCifrado");
//let botoncitoDecode = document.getElementById("botonDescifrado");
let claveDescifrada = document.getElementById("claveDescifrada");
let claveCifrada = document.getElementById("claveCifrada");
//let botonIngreso= document.getElementById("botonIngreso");



//llamo bontoncito a cifrar

botoncitoEncode.addEventListener("click",encode);
function encode() {

	
let offset = parseInt(document.getElementById("llaveHtml").value);


let string = document.getElementById("ingresoNombre").value;

claveCifrada.innerHTML = window.cipher.encode(offset,string);


}

//llamo botoncito a descifrar

botoncitoEncode.addEventListener("click",decode);
function decode() {

	
let offset = parseInt(document.getElementById("llaveHtml").value);


let string = document.getElementById("ingresoNombre").value;

claveDescifrada.innerHTML = window.cipher.decode(offset,string);


}
