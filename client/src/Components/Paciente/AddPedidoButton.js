import React from "react";
import QueueIcon from "@material-ui/icons/Queue";
import { Link } from "react-router-dom";
import { Button } from "react-admin";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	button_right: {
		textAlign: "-webkit-right",
	},
});

const AddPedido = ({ record }) => {
	const classes = useStyles();

	return (
		<div className={classes.button_right}>
			<Button
				component={Link}
				to={{
					pathname: "/pedidos/create",
					search: `?paciente=${record.id}`,
				}}
				label="Incluir"
			>
				<QueueIcon />
			</Button>
		</div>
	);
};

export default AddPedido;
