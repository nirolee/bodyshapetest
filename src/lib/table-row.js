/** Validate dynamic content before passing it to a three-column guide table.
 * @param {readonly string[]} cells
 * @returns {[string, string, string]}
 */
export function tableRow(cells) {
  if (cells.length !== 3 || !cells.every(cell => typeof cell === 'string')) {
    throw new TypeError('Guide tables require exactly three text cells per row.');
  }
  return [cells[0], cells[1], cells[2]];
}
