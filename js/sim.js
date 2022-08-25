let h1 = document.getElementById("tituloUno");
h1.textContent = "¿Cuál es tu fortuna?";

let h2 = document.getElementById("tituloDos");
h2.textContent = "Elige tu signo y Madame LeFortune te contará qué te espera ";

let p = document.getElementById ("disclaimer")
p.textContent = "Disclaimer: Este sitio es sólo diversión, ningún signo del zodíaco fue maltratado durante su construcción."

let arraySignos = [aries, tauro, geminis, cancer, leo, virgo, libra, escorpio, sagitario, capricornio, acuario, piscis];
let arrayHoroscopo =[horoscopoAries, horoscopoTauro, horoscopoGeminis, horoscopoCancer, horoscopoLeo, horoscopoVirgo, horoscopoLibra, horoscopoEscorpio, horoscopoSagitario, horoscopoCarpricornio, horoscopoAcuario, horocopoPiscis];


function signoCaja(horoscopoElegido, destino){
  let stn = document.getElementById("signo")
  stn.innerHTML= ''
  let img = document.createElement("img");
  img.setAttribute("src", horoscopoElegido.img);

    let ctn = document.createElement("div");
    ctn.className = 'divHoroscopo'
    ctn.innerHTML=`<p>Signo: ${horoscopoElegido.signo}</p>
                    <p>Fortuna: ${horoscopoElegido.horoscopo}</p>
                    <p>Elemento: ${destino.elemento}</p>
                    <p>Son de este signo los nacidos entre: ${destino.fechas}</p>
                    <p>Sus principales características son: ${destino.rasgos}</p>
                    `
    ctn.appendChild(img);

    stn.appendChild(ctn);
  }

let seleccionar = document.getElementById("seleccionar");  

  seleccionar.addEventListener("change", () => {

    let horoscopoElegido = arrayHoroscopo.find(item => item.signo == seleccionar.value)
    let destino = arraySignos.find(dest=> dest.nombre == seleccionar.value)
    signoCaja(horoscopoElegido,destino);
    
  });

  //captura de suscripción

  let btnSuscripcion = document.getElementById("btnSusc");
  let mensajeAlerta = document.getElementById("alerta");
  let mensajeExito =document.getElementById("exito");
  let nombreForm = "";
  let mailForm ="";

  btnSuscripcion.addEventListener("click",()=>{


    if (validar_formulario()){
        guardar_usuario();
        resetear_formulario();
        mensajeExito.textContent ="Gracias por suscribirte"

    }else{

        mensajeAlerta.textContent = "Completá los dos campos"

    }

})


  function resetear_formulario(){

    document.getElementById("exampleFormControlInput2").value = "";
    document.getElementById("exampleFormControlInput1").value = "";
}


  function validar_formulario(){
    nombreForm = document.getElementById("exampleFormControlInput2").value
    mailForm = document.getElementById("exampleFormControlInput1").value

    if (!nombreForm){

        return false;

    }
    if (!mailForm ){

        return false;

    }


    return true;

}
let suscriptores= Array();
suscriptores.push(suscriptorUno);
suscriptores.push(suscriptorDos);

function guardar_usuario(){

    suscriptores.push([nombreForm, mailForm]);
    localStorage.setItem("listaUsuarios", JSON.stringify(suscriptores));

}

function consultar_usuarios(){
  localStorage.getItem("listaUsuario", JSON.parse(suscriptores));

}

console.log(localStorage);