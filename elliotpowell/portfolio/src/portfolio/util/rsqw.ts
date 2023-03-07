export default function rsqw(t: number, delta = 0.1, a = 1, f = 1 / (2 * Math.PI)) {
  return (a / Math.atan(1 / delta)) * Math.atan(Math.sin(2 * Math.PI * t * f) / delta);
}
