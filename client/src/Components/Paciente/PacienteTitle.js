import React from "react";

const PacienteTitle = ({ record }) => {
	return <span> {record ? `${record.nome}` : ""}</span>;
};

export default PacienteTitle;
