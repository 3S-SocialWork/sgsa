import React, { Fragment } from "react";
import { Typography, Divider } from "@material-ui/core";
import { useCustomStyles } from "../Style/style";

const Subtitle = ({ title }) => {
	const classes = useCustomStyles();
	return (
		<Fragment>
			<Typography className={classes.subtitle} variant="subtitle1">
				{title}
			</Typography>
			<Divider dark />
		</Fragment>
	);
};

Subtitle.defaultProps = {
	title: "",
};

export default Subtitle;
