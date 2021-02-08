const WorldPop = 7900000000;
function percentageOfWorld1(population) {
  return (population * 100) / WorldPop;
}

const contryz = { chaina: 1441000000, israel: 9000000, holand: 24000000 };

const a = percentageOfWorld1(contryz.chaina);
const b = percentageOfWorld1(contryz.israel);
const c = percentageOfWorld1(contryz.holand);
listy = [a, b, c];
listy.forEach((element) => {
  console.log(element);
});

const percentageOfWorld2 = (population) => (population * 100) / WorldPop;

const d = percentageOfWorld2(contryz.chaina);
const f = percentageOfWorld2(contryz.israel);
const g = percentageOfWorld2(contryz.holand);
listy2 = [d, f, g];
listy2.forEach((element) => {
  console.log(element);
});