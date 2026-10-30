export function summarizeReadings(readings) {
  if (!Array.isArray(readings) || readings.length !== 3) return null;
  if (readings.some(value => typeof value !== 'number' && typeof value !== 'string')) return null;
  if (readings.some(value => typeof value === 'string' && !value.trim())) return null;
  const values = readings.map(Number);
  if (values.some(value => !Number.isFinite(value) || value <= 0)) return null;
  const ordered = [...values].sort((first, second) => first - second);
  return { median: ordered[1], range: ordered[2] - ordered[0] };
}
