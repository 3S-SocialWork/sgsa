import React from "react";
import { Edit } from "react-admin";
import TipoTratamentoTitle from "./TipoTratamentoTitle";
import TipoTratamentoForm from "./TipoTratamentoForm";

const TipoTratamentoEdit = (props) => (
	<Edit title={<TipoTratamentoTitle />} {...props}>
		<TipoTratamentoForm />
	</Edit>
);

export default TipoTratamentoEdit;