import React, { Fragment } from "react";
import {
	List,
	Datagrid,
	TextField,
	DateField,
	ReferenceField,
	FunctionField,
} from "react-admin";
import PacienteFilter from "./PacienteFilter";
import { useCustomStyles } from "../Style/style";
import { rowStyle } from "./SituacaoStyle";
import SituacaoChipField from "./SituacaoChipField";
import { getFormatPhoneNumber } from "./FormatPhoneNumber";

const PacienteList = (props) => {
	const classes = useCustomStyles();

	return (
		<div className={classes.root}>
			<Fragment>
				<List
					className={classes.list}
					bulkActionButtons={false}
					filters={<PacienteFilter />}
					{...props}
				>
					<Datagrid
						rowClick="edit"
						rowStyle={rowStyle()}
						classes={{
							headerRow: classes.headerRow,
							headerCell: classes.headerCell,
							rowCell: classes.rowCell,
						}}
					>
						<TextField source="nome" />
						<TextField source="cidade" />
						<SituacaoChipField label="Situação" />
						<ReferenceField
							source="tipo_tratamento"
							reference="tipos-tratamento"
						>
							<TextField source="descricao" />
						</ReferenceField>
						<FunctionField
							label="Telefone"
							render={(record) =>
								getFormatPhoneNumber(record.telefone)
							}
						/>
						<DateField source="data_cadastro" locales="pt-BR" />
					</Datagrid>
				</List>
			</Fragment>
		</div>
	);
};

export default PacienteList;
