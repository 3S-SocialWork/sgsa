import React from "react";
import {
	FormWithRedirect,
	SelectInput,
	NumberInput,
	ReferenceInput,
	useTranslate,
	AutocompleteInput,
	Toolbar,
	required,
} from "react-admin";
import { Box } from "@material-ui/core";
import BoxId from "../Commons/BoxId";
import periodo from "../Choices/periodo";

const BeneficioForm = (props) => {
	const translate = useTranslate();

	return (
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
								<ReferenceInput
									label={translate(
										"resources.pacientes.fieldsGroups.name",
									)}
									source="paciente"
									reference="pacientes"
									resource="beneficios"
									filterToQuery={(searchText) => ({
										title: searchText,
									})}
									sort={{
										field: "nome",
										order: "ASC",
									}}
								>
									<AutocompleteInput
										fullWidth
										validate={required()}
										optionText="nome"
									/>
								</ReferenceInput>
							</Box>
							<Box
								display={{
									xs: "block",
									sm: "flex",
								}}
							>
								<Box flex={0.75}>
									<ReferenceInput
										label={translate(
											"resources.pacientes.fieldsGroups.produto",
										)}
										source="produto"
										reference="produtos"
										resource="beneficios"
										filterToQuery={(searchText) => ({
											title: searchText,
										})}
										sort={{
											field: "descricao",
											order: "ASC",
										}}
									>
										<AutocompleteInput
											fullWidth
											validate={required()}
											optionText="descricao"
										/>
									</ReferenceInput>
								</Box>
								<Box flex={0.25} mx={{ xs: 0, sm: "0.5em" }}>
									<NumberInput
										fullWidth
										source="quantidade"
										resource="beneficios"
										validate={required()}
									/>
								</Box>
								<Box flex={0.25}>
									<SelectInput
										fullWidth
										source="periodo"
										resource="pacientes"
										choices={periodo}
										validate={required()}
									/>
								</Box>
							</Box>
						</Box>
					</Box>
					<Toolbar
						record={formProps.record}
						basePath={formProps.basePath}
						undoable={false}
						invalid={formProps.invalid}
						handleSubmit={formProps.handleSubmit}
						saving={formProps.saving}
						resource="beneficios"
					/>
				</form>
			)}
		/>
	);
};

export default BeneficioForm;
