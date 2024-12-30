import { crearCartaHTML, pedirCarta, valorCarta } from "./index.js";

/**
 * Turno de la Computadora
 * @param {Number} puntosMinimos Puntos minimos que la computadora necesita para ganar
 * @param {HTMLElement} puntuacion Elemento HTML para mostrar puntos
 * @param {HTMLElement} puntuacion Elemento HTML para mostrar cartas
 * @param {Array<String>} deck
 */
export const turnoPC = (
  puntosMinimos,
  puntuacion,
  divCartasComputadora,
  deck = []
) => {
  if (!puntosMinimos) throw new Error("Puntos minimos son necesarios");
  if (!puntuacion) throw new Error("Argumentos puntuacion es necesario");

  let puntosComputadora = 0;
  do {
    const carta = pedirCarta(deck);

    puntosComputadora += valorCarta(carta);
    puntuacion.innerText = puntosComputadora;

    const imgCarta = crearCartaHTML(carta);
    divCartasComputadora.append(imgCarta);

    if (puntosMinimos > 21) break;
  } while (puntosMinimos <= 21 && puntosComputadora < puntosMinimos);

  setTimeout(() => {
    if (puntosComputadora === puntosMinimos) {
      alert("Hay Tablas!");
    } else if (puntosComputadora > 21) {
      alert("Ganaste!");
    } else if (puntosMinimos > 21) {
      alert("La computadora Gana");
    } else {
      alert("La computadora Gana");
    }
  }, 1000);
};
