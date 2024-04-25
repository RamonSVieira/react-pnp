import { useEffect, useState } from "react";
import "./App.css";
import Botao from "./components/Botao";

function App() {
	const [numero, setNumero] = useState(0);
	const [nome, setNome] = useState<string>("");

	function decrementar(): void {
		setNumero(numero - 1);
	}

	function incrementar(): void {
		setNumero(numero + 1);
	}

	return (
		<div className="mt-3 ml-3">
			<Botao
				label="-"
				action={decrementar}
				className="br-button primary"
			/>
			<span
				className={`numero mr-3 ml-3 ${numero % 2 == 0 ? "green" : "red"}`}
			>
				{numero}
			</span>
			<Botao
				label="+"
				action={incrementar}
				className="br-button secondary"
			/>

			{numero % 2 == 0 ? <p>É PAR</p> : <p>É IMPAR</p>}
		</div>
	);
}

export default App;
