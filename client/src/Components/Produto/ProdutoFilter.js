import React from "react";
import { Filter, TextInput } from "react-admin";

const ProdutoFilter = (props) => (
	<Filter {...props}>
		<TextInput source="descricao" alwaysOn />
	</Filter>
);

export default ProdutoFilter;
