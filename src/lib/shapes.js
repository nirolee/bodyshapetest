/** 體型的展示名、別名與一句話定義。規則本身在 body-shape.js；這裡只管「叫什麼、怎麼解釋」。
 *  別名要寫清楚——業界對 apple 的用法是相反的：calculator.net 把 Inverted Triangle 標成 apple，
 *  bodytypecalculator.org 的 apple 是腰與上身、臀差不多（對應 FFIT 的 Oval / Diamond）。 */
export const SHAPES = {
  hourglass:         { name: 'Hourglass',         slug: 'hourglass',          aka: [], group: 'hourglass',
    def: 'Bust no more than 1 inch larger than the hips, hips less than 3.6 inches larger than the bust, and a waist at least 9 inches smaller than the bust or 10 inches smaller than the hips.' },
  top_hourglass:     { name: 'Top hourglass',     slug: 'hourglass',          aka: [], group: 'hourglass',
    def: 'Bust more than 1 inch and less than 10 inches larger than the hips, with a waist at least 9 inches smaller than the bust.' },
  bottom_hourglass:  { name: 'Bottom hourglass',  slug: 'hourglass',          aka: [], group: 'hourglass',
    def: 'Hips at least 3.6 and less than 10 inches larger than the bust, a waist at least 9 inches smaller than the hips, and high hip ÷ waist below 1.193.' },
  spoon:             { name: 'Spoon',             slug: 'pear',               aka: ['bottom-heavy hourglass'], group: 'pear',
    def: 'Hips larger than bust by more than 2 inches, a waist at least 7 inches smaller than the hips, and a high hip that flares out well above the waist (high hip ÷ waist ≥ 1.193).' },
  triangle:          { name: 'Triangle',          slug: 'pear',               aka: ['pear'], group: 'pear',
    def: 'Hips at least 3.6 inches larger than the bust with hips − waist between 0 and 9 inches; or a waist larger than the bust and no larger than the hips.' },
  inverted_triangle: { name: 'Inverted triangle', slug: 'inverted-triangle',  aka: ['V-shape', 'called apple by some calculators'], group: 'inverted-triangle',
    def: 'Bust larger than hips by 3.6 inches or more, with a waist less than 9 inches smaller than the bust.' },
  rectangle:         { name: 'Rectangle',         slug: 'rectangle',          aka: ['banana', 'straight', 'athletic'], group: 'rectangle',
    def: 'Bust and hips within 3.6 inches of each other, and a waist less than 9 inches smaller than the bust and less than 10 smaller than the hips.' },
  diamond:           { name: 'Diamond',           slug: 'apple',              aka: ['apple'], group: 'apple',
    def: 'Waist larger than both bust and hips.' },
  oval:              { name: 'Oval',              slug: 'apple',              aka: ['apple', 'round'], group: 'apple',
    def: 'Waist larger than the hips but not larger than the bust.' },
};
export const GROUPS = {
  hourglass:           { name: 'Hourglass',         members: ['hourglass', 'top_hourglass', 'bottom_hourglass'] },
  pear:                { name: 'Pear',              members: ['triangle', 'spoon'] },
  'inverted-triangle': { name: 'Inverted triangle', members: ['inverted_triangle'] },
  rectangle:           { name: 'Rectangle',         members: ['rectangle'] },
  apple:               { name: 'Apple',             members: ['oval', 'diamond'] },
};
export const MALE = {
  trapezoid:         { name: 'Trapezoid',         def: 'Chest at least 3.6 inches wider than hips or clearly defined waist: shoulders and chest carry the width, the waist is at least 9 inches smaller than the chest.' },
  inverted_triangle: { name: 'Inverted triangle', def: 'Chest at least 3.6 inches larger than hips, with less than 9 inches between chest and waist.' },
  rectangle:         { name: 'Rectangle',         def: 'Chest and hips within 3.6 inches, waist less than 9 inches smaller than the chest.' },
  triangle:          { name: 'Triangle',          def: 'Hips at least 3.6 inches larger than the chest.' },
  oval:              { name: 'Oval',              def: 'Waist larger than the hips and no larger than the bust.' },
};
