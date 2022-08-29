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
  let signoForm ="";

  btnSuscripcion.addEventListener("click",()=>{


    if (validar_formulario()){
        guardar_usuario();
        resetear_formulario();
        mensajeExito.textContent ="Gracias por suscribirte"

    }else{

        mensajeAlerta.textContent = "Completá todos los campos"

    }

})


  function resetear_formulario(){

    document.getElementById("exampleFormControlInput2").value = "";
    document.getElementById("exampleFormControlInput1").value = "";
    document.getElementById("exampleFormControlInput3").value = "";
}


  function validar_formulario(){
    nombreForm = document.getElementById("exampleFormControlInput2").value
    mailForm = document.getElementById("exampleFormControlInput1").value
    signoForm =document.getElementById("exampleFormControlInput3").value
    if (!nombreForm){

        return false;

    }
    if (!mailForm ){

        return false;

    }

    if (!signoForm){

      return false;

  }
    return true;

}
let suscriptores= []

  suscriptores.push(suscriptorUno);
  suscriptores.push(suscriptorDos);
  
  function guardar_usuario(){
  
      suscriptores.push({nombre: nombreForm, mail: mailForm, signo:signoForm});
      localStorage.setItem("listaUsuarios", JSON.stringify(suscriptores));
  
  }
  let btnSuscriptores = document.getElementById("btnConsul")
  let lista = document.getElementById("listadoSuscriptores");
  
  btnSuscriptores.addEventListener("click",()=>{
    mostrar_lista(suscriptores);
  })
  
  function consultar_usuarios(arrayUsuarios){
    let ul = document.createElement("ul")
    lista.appendChild (ul);
    arrayUsuarios.forEach(suscriptores =>{
      let li = document.createElement("li");
      li.innerHTML = `<p>${suscriptores.nombre} - ${suscriptores.signo}</p>`
      ul.appendChild(li);
    })
  }
  
  function mostrar_lista(){
  
        let arrayUsuarios= JSON.parse(localStorage.getItem("listaUsuarios"));
  
        consultar_usuarios(arrayUsuarios);
  
    }
  
  
  console.log(localStorage);