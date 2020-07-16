import React from "react";
import { FormWithRedirect, TextInput, required, Toolbar } from "react-admin";
import { Box } from "@material-ui/core";
import BoxId from "../Commons/BoxId";

const ProdutoForm = (props) => (
	<FormWithRedirect
		{...props}
		render={(formProps) => (
			<form>
				<Box
					ml="1em"
					mt="0.5em"
					mr="1em"
					display="flex"
					justifyContent="space-between"
				>
					<Box flex={1} mr={{ md: 0, lg: "1em" }}>
						<Box
							display={{
								xs: "block",
								sm: "flex",
							}}
						>
							<BoxId {...props} />
						</Box>
						<Box
							display={{
								xs: "block",
								sm: "flex",
							}}
						>
							<Box flex={0.75} mr={{ xs: 0, sm: "0.5em" }}>
								<TextInput
									source="descricao"
									resource="produtos"
									fullWidth
									validate={required()}
								/>
							</Box>
							<Box flex={0.25}>
								<TextInput
									fullWidth
									source="especificacao"
									resource="produtos"
								/>
							</Box>
						</Box>
					</Box>
				</Box>
				<Toolbar
					record={formProps.record}
					undoable={true}
					invalid={formProps.invalid}
					handleSubmit={formProps.handleSubmit}
					saving={formProps.saving}
					resource="produtos"
				/>
			</form>
		)}
	/>
);

export default ProdutoForm;
