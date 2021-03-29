import React, { useState } from "react";

const Todo = () => {
	const todoList = [
		{ name: "CSS", completed: true },
		{ name: "JavaScript", completed: true },
		{ name: "Learn React", completed: false },
		{ name: "Learn mongoDB", completed: false },
		{ name: "Learn Node JS", completed: false },
	];
	const [todos, setTodos] = useState(todoList);

	const handeClick = (name) => {
		//creating a new array
		const newTodos = todos.map((todo) => {
			if (todo.name === name) {
				return { ...todo, completed: !todo.completed };
			} else {
				return todo;
			}
		});
		setTodos(newTodos); // seting state with new array
	};

	return (
		<div>
			{todos.map((e) => {
				if (e.completed) {
					return (
						<div>
							<h1 style={{ textDecoration: "line-through", display: "inline" }}>
								{e.name}
							</h1>
							<a
								style={{ display: "inline" }}
								onClick={() => handeClick(e.name)}
							>
								X
							</a>
						</div>
					);
				} else {
					return (
						<div>
							<span style={{ display: "inline" }}>
								{e.name}
								<a
									style={{ display: "inline" }}
									onClick={() => handeClick(e.name)}
									// console.log(e.target.parentElement.innerText)
								>
									V
								</a>
							</span>
						</div>
					);
				}
			})}
		</div>
	);
};

export default Todo;
