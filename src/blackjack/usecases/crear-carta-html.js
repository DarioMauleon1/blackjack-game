/**
 *
 * @param {String} carta
 * @returns {HTMLImageElement}
 */
export const crearCartaHTML = (carta) => {
  if (!carta) throw new Error("La carta es un argumento obligatorio");
  const imgCarta = document.createElement("img");
  imgCarta.src = `./assets/cartas/${carta}.png`;
  imgCarta.alt = `${carta}`;
  imgCarta.classList.add("carta");

  return imgCarta;
};
