// Instructions
// In your app component create 4 MusicAlbum components.
// Pass to your MusicAlbum component the following props:
// 1. Album Title
// 2. Artist Name
// 3. Number of songs
// 4. Length
// 5. A link to one of the songs in the Album
// Display them in a simple way in JSX.
// You should have one MusicAlbum for a Hebrew album (pass all props to
// it)
// You should have one MusicAlbum for an English album (pass all props to
// it)
// You should have one MusicAlbum for a random album (do not pass artist
// name and length into props)
// You should have one MusicAlbum for a default album (do not pass any
// props to it).
// Set default props in case we don’t pass any props or missing props to the
// MusicAlbum component
import React from "react";
const MusicAlbum = (props) => {
	return (
		<div>
			<h1>{props.albumTitle}</h1>
			<h3>{props.artistName}</h3>
			<h4>Number of songs : {props.numberOfSongs}</h4>
			<h5>length : {props.Length}</h5>
			<a href={props.link}>link</a>
		</div>
	);
};
MusicAlbum.defaultProps = {
	albumTitle: "Album",
	artistName: "lorem",
	numberOfSongs: 0,
	Length: 0,
	link: "/",
};

class App extends React.Component {
	render() {
		return (
			<div>
				<MusicAlbum
					albumTitle="black"
					artistName="metallica"
					numberOfSongs="12"
					Length="60min"
					link="https://www.youtube.com/watch?v=tAGnKpE4NCI"
				/>
				<hr />
				<MusicAlbum
					albumTitle="ניצוצות"
					artistName="ברי סחרוף"
					numberOfSongs="80"
					Length="400min"
					link="youtube.com/watch?v=qQ63NqCCRps"
				/>
				<hr />
				<MusicAlbum
					numberOfSongs="12"
					Length="60min"
					link="https://www.youtube.com/watch?v=tAGnKpE4NCI"
				/>
				<hr />
				<MusicAlbum />
			</div>
		);
	}
}

export default App;
