import React from "react";
import { Create } from "react-admin";
import ProdutoForm from "./ProdutoForm";

const ProdutoCreate = (props) => (
	<Create title="Incluindo um produto" {...props}>
		<ProdutoForm />
	</Create>
);

export default ProdutoCreate;
