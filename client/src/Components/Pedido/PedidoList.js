import React, { Fragment } from "react";
import {
	List,
	Datagrid,
	TextField,
	DateField,
	ReferenceField,
} from "react-admin";
import { useCustomStyles } from "../Style/style";

const PedidoList = (props) => {
	const classes = useCustomStyles();

	return (
		<div className={classes.root}>
			<Fragment>
				<List
					className={classes.list}
					bulkActionButtons={false}
					{...props}
				>
					<Datagrid
						rowClick="show"
						classes={{
							headerRow: classes.headerRow,
							headerCell: classes.headerCell,
							rowCell: classes.rowCell,
						}}
					>
						<TextField source="reference" />
						<ReferenceField
							label="Paciente"
							source="paciente"
							reference="pacientes"
						>
							<TextField source="nome" />
						</ReferenceField>
						<DateField
							source="data_cadastro"
							locales="pt-BR"
							showTime
						/>
						<DateField
							source="data_liberacao"
							locales="pt-BR"
							showTime
						/>
					</Datagrid>
				</List>
			</Fragment>
		</div>
	);
};

export default PedidoList;
