import _ from "underscore";
import {
  crearDeck,
  pedirCarta,
  valorCarta,
  turnoPC,
  crearCartaHTML,
} from "./usecases/index.js";

let deck = [];
const tipos = ["C", "D", "H", "S"];
const especiales = ["A", "J", "Q", "K"];
let puntosJugador = 0;
let puntosComputadora = 0;

// Referencias del HTML
const btnPedir = document.querySelector("#btnPedir");
const btnDetener = document.getElementById("btnDetener");
const btnNuevo = document.getElementById("btnNuevo");
const puntuacion = document.querySelectorAll("p");
const divCartasJugador = document.getElementById("jugador-cartas");
const divCartasComputadora = document.getElementById("computadora-cartas");

deck = crearDeck(tipos, especiales);

// Turno de PC

// Eventos
btnPedir.addEventListener("click", (e) => {
  const carta = pedirCarta(deck);
  puntosJugador += valorCarta(carta);
  console.log(puntosJugador);
  puntuacion[0].innerText = puntosJugador;

  const imgCarta = crearCartaHTML(carta);
  divCartasJugador.append(imgCarta);

  if (puntosJugador > 21) {
    console.warn("Perdiste");
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoPC(puntosJugador, puntuacion[1], divCartasComputadora, deck);
  } else if (puntosJugador === 21) {
    console.warn("21, Genial");
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoPC(puntosJugador, puntuacion[1], divCartasComputadora, deck);
  }
});

btnDetener.addEventListener("click", () => {
  btnPedir.disabled = true;
  btnDetener.disabled = true;
  turnoPC(puntosJugador, puntuacion[1], divCartasComputadora, deck);
});

btnNuevo.addEventListener("click", () => {
  console.clear();
  deck = [];
  deck = crearDeck(tipos, especiales);

  puntosComputadora = 0;
  puntosJugador = 0;

  puntuacion[0].innerText = 0;
  puntuacion[1].innerText = 0;

  divCartasComputadora.innerHTML = "";
  divCartasJugador.innerHTML = "";

  btnPedir.disabled = false;
  btnDetener.disabled = false;
});
