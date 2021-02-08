function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} pepole and its capital city is ${capitalCity}`;
}
const london = describeCountry('england', '7 mil', 'london');
const jerusalem = describeCountry('israel', '8 mil', 'jerusalem');
const aman = describeCountry('jordan', '40 mil', 'aman');

listy = [london, jerusalem, aman];

listy.forEach((element) => {
  console.log(element);
});
