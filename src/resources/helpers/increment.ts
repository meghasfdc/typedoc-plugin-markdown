export function increment(value, options) {
  if (!value) {
    value = 0;
  }
  return parseInt(value, 10) + 1;
}
