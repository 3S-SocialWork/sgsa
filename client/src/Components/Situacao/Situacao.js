import React from "react";
import Card from "@material-ui/core/Card";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { useTranslate, Title } from "react-admin";
import situacoes from "../Choices/situacao";
import { useCustomStyles } from "../Style/style";

const Situacoes = () => {
	const translate = useTranslate();
	const classes = useCustomStyles();
	return (
		<Card className={classes.cardSituacao}>
			<Title title={translate("resources.situacoes.name")} />
			<Table size="small">
				<TableHead>
					<TableRow>
						<TableCell>
							{translate("resources.situacoes.fields.descricao")}
						</TableCell>
						<TableCell />
					</TableRow>
				</TableHead>
				<TableBody>
					{situacoes.map((item) => (
						<TableRow key={item.id}>
							<TableCell>{translate(item.descricao)}</TableCell>
							<TableCell></TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Card>
	);
};

export default Situacoes;
