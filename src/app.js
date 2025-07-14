import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
   //Cuerpo completo de sitio web

  let cuerpo = document.getElementById("cuerpo");
  cuerpo.style.background = "#9acded";
  cuerpo.style.height = "100vh";
  cuerpo.setAttribute("class", "container-fluid  d-flex flex-column align-items-center");

  //Estructura de Carta 

  //Funcion Carta aleatoria

  function randomCarrd() {
    let valor = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
    let figura = ["♤", "♧", "⟡", "♡"];
    let randomNumber = Math.floor(Math.random() * 13);
    let randomfig = Math.floor(Math.random() * 4);
    let array1 = [valor[randomNumber], figura[randomfig]];
    
    //Contenedor de carta 

  let contenedorCarta = document.createElement("div");
  contenedorCarta.setAttribute("class", "card d-flex border border-3 rounded-3 shadow  mb-5");
  contenedorCarta.style.width = "300px";
  contenedorCarta.style.height = "400px";
  cuerpo.appendChild(contenedorCarta);

  //Carta 
  //Carta Header
  //Creacion Div superior carta
  let divCartaHeader = document.createElement("div");
  divCartaHeader.setAttribute("class", "card-header border-0 ");

  //Figura a mostrar
  let figure1 = document.createElement("p");
  figure1.setAttribute("id", "top-figure");
  figure1.innerHTML= array1[1];
  figure1.setAttribute("class", "display-2");

  //Anexo de texto y header al contenedor
  divCartaHeader.appendChild(figure1);
  contenedorCarta.appendChild(divCartaHeader);

  //Carta main
  //Creacion Div main carta
  let divCartaBody = document.createElement("div");
  divCartaBody.setAttribute("class", "card-body text-center ");
  

  //Numero a mostrar
  let cardnum = document.createElement("h1");
  cardnum.innerHTML= array1[0];
  cardnum.setAttribute("class", "display-1");
  cardnum.setAttribute("id", "main-text");

  //Anexo de texto y body al contenedor
  divCartaBody.appendChild(cardnum);
  contenedorCarta.appendChild(divCartaBody);

  //Carta footer
  //Creacion Div inferior carta
  let divCartaFooter = document.createElement("div");
  divCartaFooter.setAttribute("class", "card-footer text-end border-0 ");

  //Figura a mostrar
  let figure2 = document.createElement("p");
  figure2.setAttribute("id", "bottom-figure");
  figure2.innerHTML= array1[1];
  figure2.setAttribute("class", "display-2");

  //Anexo de texto y header al contenedor
  divCartaFooter.appendChild(figure2);
  contenedorCarta.appendChild(divCartaFooter);

//cambio de color de fuente

if (array1[1] === "⟡" || array1[1] ==="♡"){
  figure1.setAttribute("class", " text-danger display-2");
  figure2.setAttribute("class", "text-danger display-2");
}
    //return carrd
  };

  
 //Boton de cambio de carta
  const boton = document.createElement("button");
  boton.setAttribute("class", "btn btn-primary d-block my-3");
  cuerpo.appendChild(boton);
  boton.addEventListener('click', randomCarrd);

  

 


  


boton.innerHTML= "Nueva Carta"
  console.log("Hello Rigo from the console!");
};
