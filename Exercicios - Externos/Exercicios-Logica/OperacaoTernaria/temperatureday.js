// Give day's temperature , return "hot" if above 30º or "cold", if below.
console.clear()

const temperature = 55
const temperature_analyse = temperature >= 30 ? 'Hot Day' : 'Cold Day';

console.log(temperature_analyse, `${temperature}ºC`)