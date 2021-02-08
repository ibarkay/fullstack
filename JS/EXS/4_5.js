function isLeap(year) {
  const respons = ['It is indeed a leap year', 'This is not a leap year.'];
  if ((year % 4 === 0 && year % 100 != 0) || year % 400 != 0) {
    console.log(year, '-', respons[0]);
  } else console.log(year, '-', respons[1]);
}
// run -check.
isLeap(2100);
