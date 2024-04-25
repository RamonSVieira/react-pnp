function Botao(props) {
	const { action, label, className } = props;
	return (
		<button
			onClick={action}
			className={className}
		>
			{label}
		</button>
	);
}

export default Botao;
