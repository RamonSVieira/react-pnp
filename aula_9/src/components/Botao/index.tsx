import "./styles.css";
import IBotaoProps from "./IBotaoProps";

/** Componente de botão */

export default function Botao({ action, label, className }: IBotaoProps) {
	return (
		<>
			<button
				className={className}
				onClick={action}
			>
				{label}
			</button>
		</>
	);
}
