import React, { useState, useEffect } from "react";
import axios from "axios";

const Fetchy = () => {
	const [movie, setMovie] = useState({});

	useEffect(() => {
		const searchMovie = async () => {
			const resp = await axios.get("https://swapi.dev/api/films/1/");
			console.log(resp.data);
			setMovie(resp.data);
		};

		searchMovie();
	}, []);
	if (!movie) {
		return <h1>Fetching</h1>;
	} else {
		return (
			<div>
				<h1>
					{movie.title} dircted by {movie.director}
				</h1>
			</div>
		);
	}
};

export default Fetchy;
