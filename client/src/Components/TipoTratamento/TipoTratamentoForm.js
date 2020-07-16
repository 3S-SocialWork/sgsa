import React from "react";
import { FormWithRedirect, TextInput, required, Toolbar } from "react-admin";
import { Box } from "@material-ui/core";
import BoxId from "../Commons/BoxId";

const TipoTratamentoForm = (props) => (
	<FormWithRedirect
		{...props}
		render={(formProps) => (
			<form>
				<Box ml="1em" mt="1em">
					<BoxId {...props} />
				</Box>
				<Box ml="1em">
					<Box flex={2} mr="1em">
						<TextInput
							source="descricao"
							resource="tipos-tratamento"
							fullWidth
							validate={required()}
						/>
					</Box>
				</Box>
				<Toolbar
					record={formProps.record}
					invalid={formProps.invalid}
					handleSubmit={formProps.handleSubmit}
					saving={formProps.saving}
					resource="tipos-tratamento"
				/>
			</form>
		)}
	/>
);

export default TipoTratamentoForm;
