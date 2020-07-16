import React from "react";

const TipoTratamentoTitle = ({ record }) => {
	return <span> {record ? `${record.descricao}` : ""}</span>;
};

export default TipoTratamentoTitle;
