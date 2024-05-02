export default interface IBotaoProps {
	/** Função acionada pelo boão quando clicado */
	action: () => void;
	label: string;
	className?: string;
}
