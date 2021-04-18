/**
 * @param {number[][]} moves
 * @return {string}
 */
const tictactoe = (moves) => {
	const matrix = [];
	for (let i = 0; i < 3; i++) {
		matrix[i] = new Array(3);
		for (let j = 0; j < 3; j++) {
			matrix[i][j] = j;
		}
	}
	let count = 0;
	for (let m of moves) {
		if (count % 2 === 0) {
			matrix[m[0]][m[1]] = "x";
			count++;
		} else {
			matrix[m[0]][m[1]] = "o";
			count++;
		}
	}
	// check win
	for (let i in matrix) {
		i = parseInt(i);
		console.log(matrix[i + 1][i + 1]);
		// console.log(matrix[parseInt(i) + 1]);
		// console.log(matrix[i][0], matrix[i][1], matrix[i][2]); //check horizontal
		// console.log(matrix[0][i], matrix[1][i], matrix[2][i]); //check up down
		// console.log(matrix[i][i], matrix[i + 1][i + 1], matrix[i + 2][i + 2]); //check up down
	}
	// console.log(matrix);
};

tictactoe([
	[0, 0],
	[2, 0],
	[1, 1],
	[2, 1],
	[2, 2],
]);
// tictactoe([[0,0],[2,0],[1,1],[2,1],[2,2]])
// Output: "A"
// Explanation: "A" wins, he always plays first.
// "X  "    "X  "    "X  "    "X  "    "X  "
// "   " -> "   " -> " X " -> " X " -> " X "
// "   "    "O  "    "O  "    "OO "    "OOX"
