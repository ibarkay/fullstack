import React from "react";
import Button from "./Button";

function App() {
	return (
		<div className="container">
			<Button>
				<strong>importent!</strong>
			</Button>
			<Button>not importent</Button>
		</div>
	);
}

export default App;
