import React from "react";
import Card from "./Cards";

function App() {
	return (
		<div className="">
			<Card
				imgS="https://picsum.photos/150"
				head="Wow"
				text="this is amazing!"
				link1="share"
				link2="explore"
			></Card>
			<Card
				imgS="https://picsum.photos/149"
				head="Nahhh"
				text="not so wow..."
				link1="share"
				link2="explore"
			></Card>
			<Card
				imgS="https://picsum.photos/148"
				head="mmmmm"
				text="pretty pretty cool"
				link1="share"
				link2="explore"
			></Card>
		</div>
	);
}

export default App;
