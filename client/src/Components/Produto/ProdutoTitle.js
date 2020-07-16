import React from "react";

const ProdutoTitle = ({ record }) => {
	return <span> {record ? `${record.descricao}` : ""}</span>;
};

export default ProdutoTitle;
