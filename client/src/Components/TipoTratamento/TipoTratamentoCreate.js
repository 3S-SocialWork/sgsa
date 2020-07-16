import React from "react";
import { Create } from "react-admin";
import TipoTratamentoForm from "./TipoTratamentoForm";

const TipoTratamentoCreate = (props) => (
	<Create title="Criando tipo de tratamento" {...props}>
		<TipoTratamentoForm />
	</Create>
);

export default TipoTratamentoCreate;