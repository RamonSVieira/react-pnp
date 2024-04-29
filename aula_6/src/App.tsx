import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Header from "./components/Header";
import Formulario from "./pages/Formulario";

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/about"
						element={<Sobre />}
					/>
					<Route
						path="form"
						element={<Formulario />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
