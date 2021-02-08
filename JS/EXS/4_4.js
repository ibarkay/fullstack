function Boom(n) {
  for (i = 0; i < n; i++) {
    stringy = i.toString();
    if (i % 7 === 0) {
      if (stringy.includes('7')) {
        console.log('BOOMBOOM');
      } else console.log('BOOM');
    } else console.log(i);
  }
}
Boom(100);
