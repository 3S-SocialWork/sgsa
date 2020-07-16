import { makeStyles } from "@material-ui/core";

export const useCustomStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	list: {
		flexGrow: 1,
		transition: theme.transitions.create(["all"], {
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginRight: 0,
	},
	listWithDrawer: {
		marginRight: 400,
	},
	drawerPaper: {
		zIndex: 100,
	},
	headerRow: {
		borderLeftColor: "white",
		borderLeftWidth: 5,
		borderLeftStyle: "solid",
	},
	headerCell: {
		padding: "6px 8px 6px 8px",
	},
	rowCell: {
		padding: "6px 8px 6px 8px",
	},
	subtitle: {
		textTransform: "uppercase",
	},
	cardSituacao: {
		marginTop: 16,
	},
}));
