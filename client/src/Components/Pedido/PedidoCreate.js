import React from "react";
import { Create } from "react-admin";
import PedidoForm from "./PedidoForm";
import { parse } from "query-string";

const validateCreation = (values) => {
	const errors = {};

	if (!values || !values.itens || Object.keys(values.itens).length < 1) {
		errors.itens = ["Não há itens inseridos no pedido."];
	}

	return errors;
};

const PedidoCreate = (props) => {
	const { paciente: paciente_str } = parse(props.location.search);
	const paciente = paciente_str ? parseInt(paciente_str, 10) : "";

	const redirect = paciente ? `/pacientes/${paciente}/pedidos` : false;

	const valoresPadrao = {
		data_cadastro: new Date(),
		paciente: paciente,
	};

	return (
		<Create title="Realizando pedido..." {...props}>
			<PedidoForm
				initialValues={valoresPadrao}
				redirect={redirect}
				validate={validateCreation}
				{...props}
			/>
		</Create>
	);
};

export default PedidoCreate;
