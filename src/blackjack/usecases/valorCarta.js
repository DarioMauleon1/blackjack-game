/**
 * Obtener el valor de la carta
 * @param {String} carta Ej: "3C"
 * @returns {Number} Retorna el valor de la carta
 */
export const valorCarta = (carta) => {
  if (!carta) throw new Error("El valor de la carta es obligatorio");
  const valor = carta.substring(0, carta.length - 1);
  return isNaN(valor) ? (valor === "A" ? 11 : 10) : parseInt(valor);
};
