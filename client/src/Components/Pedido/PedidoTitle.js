import React from "react";

const PedidoTitle = ({ record }) => {
	return <span> {record ? `${record.reference}` : ""}</span>;
};

export default PedidoTitle;
