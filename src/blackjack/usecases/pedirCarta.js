// Función pedir una carta

/**
 * Función para solicitar una carta del mazo
 * @param {Array<String>} deck Arreglo de String
 * @returns {String} Retorna una carta Ejemplo: "2H"
 */
export const pedirCarta = (deck) => {
  if (!deck || deck.length === 0)
    throw new Error("No hay más cartas en el Deck");
  return deck.pop();
};
