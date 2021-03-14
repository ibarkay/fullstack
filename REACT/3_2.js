import React from "react";
import ReactDOM from "react-dom";

const App = () => {
	return (
		<div className="Quiz" style={{ border: "2px black solid", width: 400 }}>
			<h1 className="QuizTitle">Are You 1337 ?</h1>
			<div className="Q1">
				<h2 className="Q1Title">whats your OS?</h2>
				<input type="text" className="Q1Input"></input>
			</div>
			<div className="Q2">
				<h2 className="Q1Title">whats your code Editor ?</h2>
				<input type="text" className="Q2Input"></input>
			</div>
			<div className="Q3">
				<h2 className="Q3title">how much you love c0d3?</h2>
				<input type="range" min="0" max="3" />
			</div>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector("#root"));
