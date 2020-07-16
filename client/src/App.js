import React from "react";
import { Admin, Resource } from "react-admin";
import DjangoRestProvider from "./Providers/DjangoRestProvider";

import polyglotI18nProvider from "ra-i18n-polyglot";
import Dashboard from "./Components/Dashboard";
import paciente from "./Components/Paciente";
import produto from "./Components/Produto";
import beneficio from "./Components/Beneficio";
import tipoTratamento from "./Components/TipoTratamento";
import pedidos from "./Components/Pedido";
import portugueseMessages from "./i18n/pt.ts";
import customRoutes from "./routes";
import CustomLayout from "./CustomLayout";
import { fetchJson } from "./CustomFetch";

const httpClient = (url, options = {}) => {
	//   if (!options.headers) {
	//     options.headers = new Headers({ Accept: 'application/json' });
	//   }
	//   const token = localStorage.getItem('token');
	//   options.headers.set('Authorization', `Token ${token}`);
	//   return fetchUtils.fetchJson(url, options);
	return fetchJson(url, options);
};

const i18nProvider = polyglotI18nProvider(() => portugueseMessages, "pt");

const App = () => (
	<Admin
		layout={CustomLayout}
		locale="pt"
		// authProvider={AuthProvider}
		dashboard={Dashboard}
		dataProvider={DjangoRestProvider("http://localhost:8000", httpClient)}
		i18nProvider={i18nProvider}
		customRoutes={customRoutes}
	>
		<Resource name="pacientes" {...paciente} />
		<Resource name="tipos-tratamento" {...tipoTratamento} />
		<Resource name="produtos" {...produto} />
		<Resource name="beneficios" {...beneficio} />
		<Resource name="pedidos" {...pedidos} />
		<Resource name="pedido-itens" />
	</Admin>
);

export default App;
