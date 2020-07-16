import React from "react";
import { Notification } from "react-admin";
import { withStyles } from "@material-ui/core/styles";

// Allow multi-line messages to be displayed
const cssMsg = {
	snackbarContent: {
        whiteSpace: "pre-wrap",
        // textTransform: "capitalize",
	},
};

const CustomNotification = withStyles(cssMsg)(({ classes, ...props }) => (
	<Notification
		{...props}
		className={classes.snackbarContent}
		autoHideDuration={5000}
	/>
));

export default CustomNotification;
