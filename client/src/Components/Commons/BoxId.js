import React from "react";
import { TextInput } from "react-admin";
import { Box } from "@material-ui/core";

const BoxId = (props) =>
	props.record && props.record.id ? (
		<Box flex={1} mr="1em">
			<TextInput disabled {...props} />
		</Box>
	) : null;

BoxId.defaultProps = {
	source: "id",
};

export default BoxId;
