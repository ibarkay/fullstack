import logo from "./logo.svg";
import "./App.css";
const data = ["hello", "world"];
const number1 = 5;
const number2 = 6;
const string = "I love React!";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Click Me
				</a>
				<p>
					{data[0]} {data[1]}
				</p>
				<p>
					{number1} + {number2} = {number1 + number2}
				</p>
				<p>The string’s length is : {string.length}</p>
			</header>
		</div>
	);
}

export default App;
