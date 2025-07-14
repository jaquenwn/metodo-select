import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //Cuerpo completo de sitio web

  let cuerpo = document.getElementById("cuerpo");
  let webs = document.getElementById("webs");
  webs.style.background = "#9acded";
  webs.style.height = "100vh";
  webs.setAttribute("class", "container-fluid  d-flex flex-column align-items-center");
  cuerpo.setAttribute("class", " justify-content-center d-flex align-items-center");

  //input 
  const boton = document.createElement("button");
  let divBoton = document.getElementById("boton");
  let inp = document.createElement('input');
  divBoton.appendChild(inp);
  divBoton.setAttribute('class', 'd-flex align-items-center');
  inp.setAttribute('class', 'mx-3 p-3 h-50 border-0 rounded-pill');
  inp.setAttribute('id', 'valor');




  //Estructura de Carta 

  //Funcion Carta aleatoria

  function randomCarrd() {

    cuerpo.innerHTML = ""
    let valor = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
    let figura = ["♤", "♧", "⟡", "♡"];


    let mazo = document.getElementById('valor').value;

    for (let i = 0; i < mazo; i++) {
      let randomNumber = valor[Math.floor(Math.random() * valor.length)]
      let randomfig = figura[Math.floor(Math.random() * figura.length)]
      let array1 = [randomNumber, randomfig];
      console.log(array1, i)

      //Contenedor de carta 

      let contenedorCarta = document.createElement("div");

      contenedorCarta.setAttribute("class", "card d-flex border border-3 rounded-3 shadow  mb-5 mx-1");
      contenedorCarta.style.width = "150px";
      contenedorCarta.style.height = "250px";
      cuerpo.appendChild(contenedorCarta);

      //Carta 

      //Carta Header
      //Creacion Div superior carta
      let divCartaHeader = document.createElement("div");
      divCartaHeader.setAttribute("class", "card-header border-0 ");

      //Figura a mostrar
      let figure1 = document.createElement("p");
      figure1.setAttribute("id", "top-figure");
      figure1.innerHTML = array1[1];
      figure1.setAttribute("class", "fs-2");

      //Anexo de texto y header al contenedor
      divCartaHeader.appendChild(figure1);
      contenedorCarta.appendChild(divCartaHeader);

      //Carta main
      //Creacion Div main carta
      let divCartaBody = document.createElement("div");
      divCartaBody.setAttribute("class", "card-body text-center ");


      //Numero a mostrar
      let cardnum = document.createElement("h1");
      cardnum.innerHTML = array1[0];
      cardnum.setAttribute("class", "display-6");
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
      figure2.innerHTML = array1[1];
      figure2.setAttribute("class", "fs-2 ");

      //Anexo de texto y header al contenedor
      divCartaFooter.appendChild(figure2);
      contenedorCarta.appendChild(divCartaFooter);


      //cambio de color de fuente

      if (array1[1] === "⟡" || array1[1] === "♡") {
        figure1.setAttribute("class", " text-danger fs-2");
        figure2.setAttribute("class", "text-danger fs-2");
      }
    }

  };


  //Boton de cambio de carta

  boton.setAttribute("class", "btn btn-primary d-block my-3");
  divBoton.appendChild(boton);
  boton.addEventListener('click', randomCarrd);
  boton.innerHTML = "Generar Cartas"


  console.log("Hello Rigo from the console!");
};
