John and Mike both play basketball in different teams. In the latest 3 games,
John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94
and 123 points.

const John = [89, 120, 103];
const Mike = [116, 94, 123];
// const John = [10];
// const Mike = [10];

function avrg(listy) {
  let sum = 0;
  listy.forEach((element) => {
    sum += element;
  });
  return sum / listy.length;
}
const JohnAvg = avrg(John);
const MikeAvg = avrg(Mike);

if (JohnAvg > MikeAvg) {
  console.log(`The Winner is John with ${JohnAvg} Avrage!`);
} else if (JohnAvg === MikeAvg){
  console.log("A tie!")
}else console.log(`The Winner is Mike with ${MikeAvg} Avrage!`);


