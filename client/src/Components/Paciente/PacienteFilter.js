import React from "react";
import { Filter, TextInput } from "react-admin";

const PacienteFilter = (props) => (
	<Filter {...props}>
		<TextInput source="nome" alwaysOn />
		<TextInput source="cidade" alwaysOn />
	</Filter>
);

export default PacienteFilter;
