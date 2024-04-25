import { Link } from "react-router-dom";

function Header() {
	return (
		<header className="br-header d-flex justify-content-center">
			<Link
				to={"/"}
				className="br-button"
			>
				Home
			</Link>
			<Link
				to={"about"}
				className="br-button"
			>
				Sobre nós
			</Link>
			<Link
				to={"form"}
				className="br-button"
			>
				Formulário
			</Link>
		</header>
	);
}

export default Header;
