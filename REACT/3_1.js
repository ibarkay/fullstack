import React from "react";
import reactDom from "react-dom";

const App = () => {
	return (
		<div
			className="box-1"
			style={{
				width: 500,
				height: 300,
				background: "green",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<div
				className="box-2"
				style={{
					width: 470,
					height: 260,
					background: "blue",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<div
					className="box-3"
					style={{
						width: 420,
						height: 200,
						background: "pink",
						display: "flex",
						justifyContent: "space-around",
						alignItems: "center",
						flexDirection: "column",
					}}
				>
					<div
						className="box-4"
						style={{
							width: 380,
							height: 80,
							background: "purple",
						}}
					></div>
					<div
						className="box-4"
						style={{
							width: 380,
							height: 80,
							background: "purple",
						}}
					></div>
				</div>
			</div>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector("#root"));
