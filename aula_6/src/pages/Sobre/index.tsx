import { Link } from "react-router-dom";

function Sobre() {
	return (
		<>
			<div className="container">
				<h1 className="mt-5">Sobre nós</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
					omnis deserunt. Nam, nihil! Esse adipisci quos accusamus
					totam, voluptas delectus, iusto non illo laudantium dicta,
					nostrum culpa similique iure voluptatibus.Lorem ipsum dolor
					sit amet consectetur adipisicing elit. Et, omnis deserunt.
					Nam, nihil! Esse adipisci quos accusamus totam, voluptas
					delectus, iusto non illo laudantium dicta, nostrum culpa
					similique iure voluptatibus.Lorem ipsum dolor sit amet
					consectetur adipisicing elit. Et, omnis deserunt. Nam,
					nihil! Esse adipisci quos accusamus totam, voluptas
					delectus, iusto non illo laudantium dicta, nostrum culpa
					similique iure voluptatibus.
				</p>

				<Link
					to="/"
					className="br-button secondary"
				>
					Voltar
				</Link>
			</div>
		</>
	);
}

export default Sobre;
