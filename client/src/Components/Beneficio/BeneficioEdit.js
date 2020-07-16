import React from "react";
import { Edit } from "react-admin";
import BeneficioTitle from "./BeneficioTitle";
import BeneficioForm from "./BeneficioForm";

const BeneficioEdit = (props) => {
	return (
		<Edit title={<BeneficioTitle />} {...props}>
			<BeneficioForm/>
		</Edit>
	);
};

export default BeneficioEdit;
