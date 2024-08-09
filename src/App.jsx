import React, { useEffect } from "react";
import Footer from "./Global/Footer";
import { Route, Routes } from "react-router-dom";
import Main from "./Pages/Main";

const App = () => {
	const animationPlayed = sessionStorage.getItem('animationPlayed') || false;

	useEffect(() => {
		if (!animationPlayed) {
			sessionStorage.setItem('animationPlayed', 'true');
		}
	}, [animationPlayed])

	return (
		<div className="relative text-gray-700">
			<Routes>
				<Route
					path="/"
					element={<Main />} />

				<Route
					path="/*"
					element={<Main />}
				/>
			</Routes>

			<Footer />
		</div>
	);
};

export default App;
