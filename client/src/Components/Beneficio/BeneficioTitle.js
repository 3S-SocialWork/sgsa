import React from "react";

const BeneficioTitle = ({ record }) => {
	console.log(record)
	return <span> {record && record.descricao ? `${record.descricao}` : ""}</span>;
};

export default BeneficioTitle;
