import React from "react";
import { Edit } from "react-admin";
import PacienteTitle from "./PacienteTitle";
import PacienteForm from "./PacienteForm";

const PacienteEdit = (props) => {
	return (
		<Edit undoable={false} title={<PacienteTitle />} {...props}>
			<PacienteForm />
		</Edit>
	);
};
export default PacienteEdit;
