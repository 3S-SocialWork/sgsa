import React from "react";
import { Create } from "react-admin";
import PacienteForm from "./PacienteForm";

const valoresPadrao = {
	data_cadastro: new Date(),
	sexo: "N",
	situacao: "ATIVO",
};

const PacienteCreate = (props) => (
	<Create title="Incluindo paciente" {...props}>
		<PacienteForm initialValues={valoresPadrao} {...props}/>
	</Create>
);

export default PacienteCreate;
