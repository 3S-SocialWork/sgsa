import React from "react";
import { Create } from "react-admin";
import BeneficioForm from "./BeneficioForm";
import { parse } from "query-string";

const BeneficioCreate = (props) => {
	const { paciente: paciente_str } = parse(props.location.search);
	const paciente = paciente_str ? parseInt(paciente_str, 10) : "";

	const redirect = paciente ? `/pacientes/${paciente}/beneficios` : false;

	const valoresPadrao = { paciente, quantidade: 1, periodo: 7 };
	return (
		<Create title="Incluindo um benefício" {...props}>
			<BeneficioForm defaultValue={valoresPadrao} redirect={redirect} />
		</Create>
	);
};

export default BeneficioCreate;
