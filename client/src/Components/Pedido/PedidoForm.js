import React from "react";
import "./Pedido.css";

import {
	FormWithRedirect,
	useTranslate,
	Toolbar,
	ReferenceInput,
	AutocompleteInput,
	required,
	minValue,
	number,
	DateInput,
	ArrayInput,
	SimpleFormIterator,
	NumberInput,
	FormDataConsumer,
} from "react-admin";
import { Box, Grid } from "@material-ui/core";
import BoxId from "../Commons/BoxId";
import Subtitle from "../Commons/Subtitle";

const validarQuantidade = [number(), minValue(1)];

const SanitizedGrid = ({ basePath, ...props }) => {
	return <Grid {...props} />;
};

const PedidoForm = (props) => {
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
								<Subtitle
									title={translate(
										"resources.pedidos.fieldsGroups.titulo",
									)}
								/>
								<BoxId source="reference" {...props} />
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
									resource="Pedidos"
									filterToQuery={(searchText) => ({
										title: searchText,
									})}
									sort={{
										field: "nome",
										order: "ASC",
									}}
									filter={{ situacao: "ATIVO" }}
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
								<Box flex={0.2}>
									<DateInput
										disabled
										fullWidth
										source="data_cadastro"
										options={{
											format: "MM/DD/YYYY",
										}}
										resource="pacientes"
									/>
								</Box>
								<Box flex={0.2} mx={{ xs: 0, sm: "0.5em" }}>
									<DateInput
										disabled
										fullWidth
										source="data_liberacao"
										options={{
											format: "MM/DD/YYYY",
										}}
										resource="pacientes"
									/>
									<Box flex={0.3} />
								</Box>
							</Box>
							<Subtitle
								title={translate(
									"resources.pacientes.fieldsGroups.beneficios",
								)}
							/>

							<ArrayInput source="itens">
								<SimpleFormIterator>
									<FormDataConsumer>
										{({ getSource, scopedFormData }) => {
											return (
												<div>
													<SanitizedGrid
														container
														spacing={1}
													>
														<Grid item xs={8}>
															<ReferenceInput
																label={translate(
																	"resources.pedidos.fields.itens.produto",
																)}
																source={getSource(
																	"produto",
																)}
																record={
																	scopedFormData
																}
																reference="produtos"
															>
																<AutocompleteInput
																	fullWidth
																	optionText="descricao"
																	validate={required()}
																/>
															</ReferenceInput>
														</Grid>
														<Grid item xs={4}>
															<NumberInput
																label={translate(
																	"resources.pedidos.fields.itens.quantidade",
																)}
																source={getSource(
																	"quantidade",
																)}
																record={
																	scopedFormData
																}
																validate={
																	validarQuantidade
																}
																initialValue={1}
															/>
														</Grid>
													</SanitizedGrid>
												</div>
											);
										}}
									</FormDataConsumer>
								</SimpleFormIterator>
							</ArrayInput>
						</Box>
					</Box>
					<Toolbar
						record={formProps.record}
						basePath={formProps.basePath}
						undoable={true}
						invalid={formProps.invalid}
						handleSubmit={formProps.handleSubmit}
						saving={formProps.saving}
						resource="pedidos"
					/>
				</form>
			)}
		/>
	);
};

export default PedidoForm;
