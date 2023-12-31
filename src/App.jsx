import React from "react";
import Footer from "./Global/Footer";
import { Route, Routes } from "react-router-dom";
import ProjectLibrary from "./Pages/Projects";
import Main from "./Pages/Main";

const App = () => {
	return (
		<div className="relative text-gray-700">
			<div className="absolute bg-homeBg bg-repeat animate-ltr-linear-infinite h-[120dvh] w-full -z-20"></div>

			<div className="absolute h-[120dvh] w-full -z-10 bg-gradient-to-b from-white/90 to-white"></div>

			<Routes>
				<Route
					path="/"
					element={<Main />} />

				<Route
					path="/projects"
					element={<ProjectLibrary />}
				/>
			</Routes>

			<Footer />
		</div>
	);
};

export default App;
