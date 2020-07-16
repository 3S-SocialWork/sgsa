import React from "react";

import {
	DateInput,
	useTranslate,
	TabbedForm,
	TextInput,
	RadioButtonGroupInput,
	SelectInput,
	ReferenceInput,
	AutocompleteInput,
	required,
	ReferenceManyField,
	Datagrid,
	TextField,
	FormTab,
	SelectField,
	ReferenceField,
	DateField,
	DeleteButton,
} from "react-admin";

import { Grid } from "@material-ui/core";
import situacoes from "../Choices/situacao";
import gender from "../Choices/gender";
import uf from "../Choices/uf";
import periodo from "../Choices/periodo";
import AddBeneficio from "./AddBeneficioButton";
import AddPedidoButton from "./AddPedidoButton";
import Subtitle from "../Commons/Subtitle";

const PacienteForm = (props) => {
	const translate = useTranslate();

	return (
		<TabbedForm undoable={false} submitOnEnter={false} {...props}>
			<FormTab
				label={translate("resources.pacientes.fieldsGroups.name")}
				path=""
			>
				<Grid container spacing={1} style={{ width: "100%" }}>
					<Grid item xs={12} sm={9}>
						<TextInput
							source="nome"
							resource="pacientes"
							validate={required()}
							fullWidth
						/>
					</Grid>
					<Grid item xs={12} sm={3}>
						<DateInput
							disabled
							fullWidth
							source="data_cadastro"
							options={{
								format: "MM/DD/YYYY",
							}}
							resource="pacientes"
						/>
					</Grid>
					<Grid item xs={12} sm={9}>
						<ReferenceInput
							label={translate(
								"resources.pacientes.fieldsGroups.tipo_tratamento",
							)}
							source="tipo_tratamento"
							reference="tipos-tratamento"
							resource="pacientes"
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
					</Grid>
					<Grid item xs={12} sm={3}>
						<DateInput
							source="data_nascimento"
							fullWidth
							options={{
								format: "MM/DD/YYYY",
							}}
							resource="pacientes"
						/>
					</Grid>
					<Grid item xs={12}>
						<RadioButtonGroupInput
							source="situacao"
							resource="pacientes"
							choices={situacoes}
							fullWidth
							validate={required()}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<SelectInput
							fullWidth
							source="sexo"
							resource="pacientes"
							choices={gender}
							validate={required()}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextInput
							fullWidth
							source="num_doc"
							resource="pacientes"
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextInput
							source="email"
							type="email"
							resource="pacientes"
							validation={{ email: true }}
							fullWidth
						/>
					</Grid>
					<Grid item xs={12} sm={3}>
						<TextInput
							source="telefone"
							type="phone"
							resource="pacientes"
							fullWidth
						/>
					</Grid>
					<Grid item xs={12} sm={3}>
						<TextInput
							source="tel_contato"
							type="phone"
							resource="pacientes"
							fullWidth
						/>
					</Grid>
					<Subtitle
						style={{"margin-left": "0.5em"}}
						title={translate(
							"resources.pacientes.fieldsGroups.endereco",
						)}
					/>
					<Grid item xs={12}>
						<TextInput
							source="cep"
							resource="pacientes"
							validate={required()}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextInput
							source="logradouro"
							resource="pacientes"
							fullWidth
							validate={required()}
						/>
					</Grid>
					<Grid item xs={12} sm={3}>
						<TextInput
							source="numero"
							resource="pacientes"
							fullWidth
							validate={required()}
						/>
					</Grid>
					<Grid item xs={12} sm={3}>
						<TextInput
							source="complemento"
							resource="pacientes"
							fullWidth
						/>
					</Grid>
					<Grid item xs={12} sm={5}>
						<TextInput
							source="bairro"
							resource="pacientes"
							fullWidth
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextInput
							source="cidade"
							resource="pacientes"
							fullWidth
							validate={required()}
						/>
					</Grid>
					<Grid item xs={12} sm={1}>
						<AutocompleteInput
							fullWidth
							source="uf"
							resource="pacientes"
							optionText="id"
							choices={uf}
							validate={required()}
						/>
					</Grid>
				</Grid>
			</FormTab>
			<FormTab
				label={translate("resources.pacientes.fieldsGroups.obs")}
				path="observacoes"
			>
				<TextInput
					source="obs"
					resource="pacientes"
					multiline
					rows={8}
					fullWidth
					resettable
				/>
			</FormTab>
			{props.record && props.record.id ? (
				<FormTab
					label={translate(
						"resources.pacientes.fieldsGroups.beneficios",
					)}
					path="beneficios"
				>
					<AddBeneficio />
					<ReferenceManyField
						label=""
						reference="beneficios"
						target="paciente"
						fullWidth
					>
						<Datagrid rowClick="edit" redirect="pacientes">
							<TextField source="id" />
							<ReferenceField
								label="Produto"
								source="produto"
								reference="produtos"
							>
								<TextField source="descricao" />
							</ReferenceField>
							<TextField source="quantidade" />
							<DateField
								source="data_ultimo_lancamento"
								locales="pt-BR"
							/>
							<SelectField source="periodo" choices={periodo} />

							<DeleteButton
								label=""
								redirect={false}
								undoable={false}
							/>
						</Datagrid>
					</ReferenceManyField>
				</FormTab>
			) : null}
			{props.record && props.record.id ? (
				<FormTab
					label={translate(
						"resources.pacientes.fieldsGroups.pedidos",
					)}
					path="pedidos"
				>
					<AddPedidoButton />
					<ReferenceManyField
						label=""
						reference="pedidos"
						target="paciente"
						fullWidth
					>
						<Datagrid rowClick="edit">
							<TextField source="reference" />
							<DateField
								source="data_cadastro"
								locales="pt-BR"
								showTime
							/>
							<DateField
								source="data_liberacao"
								locales="pt-BR"
							/>
						</Datagrid>
					</ReferenceManyField>
				</FormTab>
			) : null}
		</TabbedForm>
	);
};

export default PacienteForm;
