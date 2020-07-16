import React from "react";
import { Filter, TextInput } from "react-admin";

const TipoTratamentoFilter = (props) => (
	<Filter {...props}>
		<TextInput source="descricao" alwaysOn />
	</Filter>
);

export default TipoTratamentoFilter;