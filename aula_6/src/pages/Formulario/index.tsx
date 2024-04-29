import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
	nome: yup
		.string()
		.required("Nome é um campo obrigatório")
		.min(3, "Deve conter no mínimo 3 caracteres"),
	email: yup
		.string()
		.email()
		.max(30, "Contém no máximo 30 caracteres")
		.required("Email é um campo obrigatório"),
	telefone: yup
		.string()
		.max(11, "Contém no máximo 11 caracteres")
		.required("Telefone é um campo obrigatório"),
	idade: yup
		.number()
		.positive("A idade deve ser um número positivo")
		.required("Idade é um campo obrigatório"),
});

function Formulario() {
	const {
		handleSubmit,
		register,
		reset,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	function dataHandler(data): void {
		console.log(data);
	}

	return (
		<>
			<div className="container">
				<div className="row d-flex justify-content-center">
					<div className="col-6">
						<form
							action=""
							className="mt-5"
							onSubmit={handleSubmit(dataHandler)}
						>
							<div
								className={`br-input ${errors.nome !== undefined ? "danger" : ""}`}
							>
								<label htmlFor="nome">Nome</label>
								<input
									id="nome"
									type="text"
									placeholder="Insira seu nome"
									{...register("nome")}
								/>
								{errors.nome && (
									<span
										className="feedback danger"
										role="alert"
										id="danger"
									>
										<i
											className="fas fa-times-circle"
											aria-hidden="true"
										></i>
										{errors.nome?.message}
									</span>
								)}
							</div>

							<div className="br-input">
								<label htmlFor="email">email</label>
								<input
									id="email"
									type="email"
									placeholder="Insira seu Email"
									{...register("email")}
								/>
								{errors.email && (
									<span
										className="feedback danger"
										role="alert"
										id="danger"
									>
										<i
											className="fas fa-times-circle"
											aria-hidden="true"
										></i>
										{errors.email?.message}
									</span>
								)}
							</div>

							<div className="br-input">
								<label htmlFor="telefone">Telefone</label>
								<input
									id="telefone"
									type="text"
									placeholder="Insira seu telefone"
									{...register("telefone")}
								/>
								{errors.telefone && (
									<span
										className="feedback danger"
										role="alert"
										id="danger"
									>
										<i
											className="fas fa-times-circle"
											aria-hidden="true"
										></i>
										{errors.telefone?.message}
									</span>
								)}
							</div>

							<div className="br-input">
								<label htmlFor="idade">idade</label>
								<input
									id="idade"
									type="number"
									placeholder="Insira sua idade"
									{...register("idade")}
								/>
								{errors.idade && (
									<span
										className="feedback danger"
										role="alert"
										id="danger"
									>
										<i
											className="fas fa-times-circle"
											aria-hidden="true"
										></i>
										{errors.idade?.message}
									</span>
								)}
							</div>

							<button
								type="submit"
								className="br-button primary mr-2"
							>
								Enviar
							</button>

							<button
								type="button"
								value="Apagar campos"
								onClick={() => reset()}
								className="br-button secondary"
							>
								Apagar
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

export default Formulario;
