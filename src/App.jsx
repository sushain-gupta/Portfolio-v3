import React from "react";
import Footer from "./Global/Footer";
import { Route, Routes } from "react-router-dom";
import ProjectLibrary from "./Pages/Projects";
import Main from "./Pages/Main";
import Header from "./Global/Header";

const App = () => {
	return (
		<div className="relative text-gray-700">
			<Header />

			<div className="absolute bg-homeBg bg-no-repeat bg-cover h-[100dvh] w-full -z-20"></div>

			<div className="absolute h-[120dvh] w-full -z-10 bg-gradient-to-b from-white/90 to-white"></div>

			<Routes>
				<Route
					path="/"
					element={<Main />} />

				<Route
					path="/projects"
					element={<ProjectLibrary />}
				/>

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
