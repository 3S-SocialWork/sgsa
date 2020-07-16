import React, { Fragment } from "react";
import { List, Datagrid, TextField } from "react-admin";
import TipoTratamentoFilter from "./TipoTratamentoFilter";
import { useCustomStyles } from "../Style/style";

const TipoTratamentoList = (props) => {
	const classes = useCustomStyles();

	return (
		<div className={classes.root}>
			<Fragment>
				<List
					className={classes.list}
					filters={<TipoTratamentoFilter />}
					bulkActionButtons={false}
					perPage={25}
					sort={{ field: 'descricao', order: 'ASC' }}
					{...props}
				>
					<Datagrid
						rowClick="edit"
						classes={{
							headerRow: classes.headerRow,
							headerCell: classes.headerCell,
							rowCell: classes.rowCell,
						}}
					>
						<TextField source="id" />
						<TextField source="descricao" />
					</Datagrid>
				</List>
			</Fragment>
		</div>
	);
};

export default TipoTratamentoList;
