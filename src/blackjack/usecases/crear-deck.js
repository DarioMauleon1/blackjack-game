import _ from "underscore";

/**
 * Función para crear un Deck
 * @param {Array<String>} tiposDeCartas Ejemplo: ["C", "D", "H", "S"]
 * @param {Array<String>} tiposEpeciales Ejemplo: ["A", "J", "Q", "K"]
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCartas, tiposEpeciales) => {
  if (!tiposDeCartas || tiposDeCartas <= 0)
    throw new Error("TiposDeCartas es obligatorio como un arreglo de string");
  let deck = [];
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDeCartas) {
      deck.push(i + tipo);
    }
  }
  for (let tipo of tiposDeCartas) {
    for (let esp of tiposEpeciales) {
      deck.push(esp + tipo);
    }
  }
  return _.shuffle(deck);
};
