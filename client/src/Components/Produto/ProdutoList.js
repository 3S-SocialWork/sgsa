import React, { Fragment } from "react";
import { List, Datagrid, TextField } from "react-admin";
import ProdutoFilter from "./ProdutoFilter";
import { useCustomStyles } from "../Style/style";

const ProdutoList = (props) => {
	const classes = useCustomStyles();

	return (
		<div className={classes.root}>
			<Fragment>
				<List
					className={classes.list}
					filters={<ProdutoFilter />}
					bulkActionButtons={false}
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
						<TextField source="especificacao" />
					</Datagrid>
				</List>
			</Fragment>
		</div>
	);
};

export default ProdutoList;
