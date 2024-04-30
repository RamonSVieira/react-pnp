import { useEffect, useState } from "react";
import CharactersService from "../services/CharactersService";
import Card from "../components/Card";

export default function Home() {
	const [personagens, setPersonagens] = useState<any[]>([]);

	function handleData() {
		CharactersService.listarPersonagens()
			.then((res) => {
				const { data } = res;
				setPersonagens(data.data);
			})
			.catch((err) => {
				console.error(err);
			});
	}

	useEffect(() => {
		handleData();
	}, []);

	return (
		<>
			<h1>Listagem dos personagens</h1>
			<main className="container">
				{personagens.map((personagem) => (
					<Card
						key={personagem._id}
						name={personagem.name}
						imageUrl={personagem.imageUrl}
					/>
				))}
			</main>
		</>
	);
}
