import React from "react";
import "./Pedido.css";

import {
	Show,
	SimpleShowLayout,
	TextField,
	DateField,
	ReferenceManyField,
	Datagrid,
	ReferenceField,
	useTranslate,
} from "react-admin";
import Subtitle from "../Commons/Subtitle";
import PedidoTitle from "./PedidoTitle";

const PedidoShow = (props) => {
	const translate = useTranslate();

	return (
		<Show title={<PedidoTitle />} {...props}>
			<SimpleShowLayout>
				<Subtitle
					title={translate("resources.pedidos.fieldsGroups.titulo")}
				/>
				<TextField source="reference" />
				<ReferenceField
					label={translate("resources.pacientes.fieldsGroups.name")}
					source="paciente"
					reference="pacientes"
				>
					<TextField source="nome" />
				</ReferenceField>
				<DateField source="data_cadastro" locales="pt-BR" />
				<DateField source="data_liberacao" locales="pt-BR" />

				<Subtitle
					title={translate(
						"resources.pacientes.fieldsGroups.beneficios",
					)}
				/>
				<ReferenceManyField
					label=""
					reference="pedido-itens"
					target="pedido"
					fullWidth
				>
					<Datagrid>
						<ReferenceField
							label="Produto"
							source="produto"
							reference="produtos"
						>
							<TextField source="descricao" />
						</ReferenceField>
						<TextField source="quantidade" />
					</Datagrid>
				</ReferenceManyField>
			</SimpleShowLayout>
		</Show>
	);
};

export default PedidoShow;
