for (let row = 0; row < 3; row++) {
  for (let col = 0; col < 3; col++) {
    console.log('row', row, 'col', col);
  }
}

const matrix = [
  [1, 2, 3, 4],
  ['babka', 'dsaj', 'dsa'],
  [827398, 32819, 1231, 123],
  [10, 20, 11, 2, 13],
];

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix.length; j++) {
    console.log(matrix[i][j]);
  }
}
