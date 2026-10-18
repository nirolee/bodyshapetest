/** Shared UI only: classification thresholds remain in body-shape.js. */
export function setupMeasurements(form, { lang = 'en', onEdit = () => {} } = {}) {
  const inputs = [...form.querySelectorAll('input[type=number]')];
  const unit = () => form.querySelector('input[name=unit]:checked').value;
  let previousUnit = unit();
  // Keep original precision when switching units repeatedly, including at rule boundaries.
  const converted = new WeakMap();
  /** @param {string} name @returns {number | null} */
  const read = name => {
    const el = form.elements.namedItem(name);
    if (!el || el.value.trim() === '') return null;
    const cached = converted.get(el);
    if (cached && cached.text === el.value && cached.unit === unit()) return cached.cm;
    const value = Number(el.value);
    return Number.isFinite(value) && value > 0 ? value * (unit() === 'in' ? 2.54 : 1) : null;
  };
  const updateLabels = () => {
    for (const el of form.querySelectorAll('[data-measure-unit]')) el.textContent = unit() === 'cm' ? (lang === 'zh' ? '公分（cm）' : 'cm') : (lang === 'zh' ? '英吋（in）' : 'inches');
  };
  for (const el of inputs) el.addEventListener('input', () => {
    converted.delete(el);
    el.removeAttribute('aria-invalid');
    onEdit();
  });
  for (const radio of form.querySelectorAll('input[name=unit]')) radio.addEventListener('change', () => {
    if (unit() === previousUnit) return;
    for (const el of inputs) {
      el.removeAttribute('aria-invalid');
      const value = Number(el.value);
      if (el.value.trim() === '' || !Number.isFinite(value) || value <= 0) continue;
      const cached = converted.get(el);
      const cm = cached && cached.text === el.value && cached.unit === previousUnit ? cached.cm : value * (previousUnit === 'in' ? 2.54 : 1);
      el.value = String(Number((unit() === 'in' ? cm / 2.54 : cm).toFixed(6)));
      converted.set(el, { text: el.value, unit: unit(), cm });
    }
    previousUnit = unit();
    updateLabels();
    onEdit();
  });
  for (const radio of form.querySelectorAll('input[name=sex]')) radio.addEventListener('change', onEdit);
  const syncUnits = () => { previousUnit = unit(); updateLabels(); };
  updateLabels();
  const invalid = name => {
    const el = form.elements.namedItem(name);
    el.setAttribute('aria-invalid', 'true');
    el.focus();
  };
  return { read, invalid, syncUnits };
}
