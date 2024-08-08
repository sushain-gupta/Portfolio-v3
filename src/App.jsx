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
			{/* <div className="absolute h-[120dvh] w-full -z-10 bg-gradient-to-b from-white/90 to-white"></div> */}

			<Routes>
				<Route
					path="/"
					element={<Main />} />

				{/* <Route
					path="/projects"
					element={<ProjectLibrary />}
				/> */}

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
