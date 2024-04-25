import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";

type FormInput = {
	nome: string;
	email: string;
	telefone: string;
	idade: string;
};

function Formulario() {
	const {
		handleSubmit,
		register,
		reset,
		formState: { errors },
	} = useForm<FormInput>();

	function dataHandler(data: FormInput) {
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
							<div className="br-input">
								<label htmlFor="nome">Nome</label>
								<input
									id="nome"
									type="text"
									placeholder="Insira seu nome"
									{...register("nome", {
										required: "O campo Nome é obrigatório",
									})}
								/>
								<ErrorMessage
									errors={errors}
									name="nome"
								/>
							</div>

							<div className="br-input">
								<label htmlFor="email">email</label>
								<input
									id="email"
									type="email"
									placeholder="Insira seu Email"
									{...register("email", {
										required: "O campo Email é obrigatório",
									})}
								/>
								<ErrorMessage
									errors={errors}
									name="email"
								/>
							</div>

							<div className="br-input">
								<label htmlFor="telefone">Telefone</label>
								<input
									id="telefone"
									type="text"
									placeholder="Insira seu telefone"
									{...register("telefone", {
										required:
											"O campo Telefone é obrigatório",
									})}
								/>
								<ErrorMessage
									errors={errors}
									name="telefone"
								/>
							</div>

							<div className="br-input">
								<label htmlFor="idade">idade</label>
								<input
									id="idade"
									type="text"
									placeholder="Insira sua idade"
									{...register("idade", {
										required: "O campo Idade é obrigatório",
									})}
								/>
								<ErrorMessage
									errors={errors}
									name="idade"
								/>
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
