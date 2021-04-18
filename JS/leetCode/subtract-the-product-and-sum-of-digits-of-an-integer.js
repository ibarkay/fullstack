const subtractProductAndSum = (n) => {
	const arr = n.toString().split("");
	const arrProduct = arr.reduce((acc, cur) => parseInt(acc) * parseInt(cur));
	const arrSum = arr.reduce((acc, cur) => parseInt(acc) + parseInt(cur));
	return arrProduct - arrSum;
};

subtractProductAndSum(234);
// Input: n = 234
// Output: 15
// Product of digits = 2 * 3 * 4 = 24
// Sum of digits = 2 + 3 + 4 = 9
// Result = 24 - 9 = 15
