import React from "react";
import { Filter, TextInput } from "react-admin";

const BeneficioFilter = (props) => (
	<Filter {...props}>
		<TextInput source="paciente" alwaysOn />
	</Filter>
);

export default BeneficioFilter;
