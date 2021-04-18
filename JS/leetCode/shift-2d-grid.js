const shiftGrid = (grid, k) => {
	const m = grid[0].length;
	const n = grid.length;
	// console.log(m, n, grid);
	for (let i in grid) {
		for (let j in grid) {
			// console.log(grid[i][j]);
			grid[i][j + 1] = grid[i][j];
			console.log(grid);
			// console.log(grid[i + 1][0);
			grid[i + 1][0] = grid[i][n - 1];
			grid[0][0] = grid[m - 1][n - 1];
			// console.log(grid);

			// 			Element at grid[i][j] moves to grid[i][j + 1].
			// Element at grid[i][n - 1] moves to grid[i + 1][0].
			// Element at grid[m - 1][n - 1] moves to grid[0][0].
		}
	}
};

shiftGrid(
	[
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	],
	1
);
