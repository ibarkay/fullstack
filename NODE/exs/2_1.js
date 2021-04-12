const fs = require("fs");

const dir = "./";

fs.appendFileSync("text.txt", "this is a test file");
fs.copyFileSync("text.txt", "t2.txt");
fs.renameSync("t2.txt", "t3.txt");
console.log(
	fs.readdir(dir, (err, files) => {
		files.forEach((file) => {
			console.log(file);
		});
	})
);

fs.readFileSync("./t3.txt");

// 1. Create a new txt file using the same fs module method we have
// learned before.
// 2. Create a copy of the newly created txt file using a method from
// the fs module.
// 3. Rename one of the files using a method from the fs module.
// 4. Get a list of all the file names of the current directory using a
// method from the fs module.
// 5. Find out and implement another method for the fs module.
