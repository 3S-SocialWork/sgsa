import React from "react";
import { Edit } from "react-admin";
import ProdutoTitle from "./ProdutoTitle";
import ProdutoForm from "./ProdutoForm";

const ProdutoEdit = (props) => (
	<Edit title={<ProdutoTitle />} {...props}>
		<ProdutoForm />
	</Edit>
);

export default ProdutoEdit;
