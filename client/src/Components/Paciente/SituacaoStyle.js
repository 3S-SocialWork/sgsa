import cor_ativo from "@material-ui/core/colors/amber";
import cor_de_alta from "@material-ui/core/colors/teal";
import cor_inativo from "@material-ui/core/colors/blueGrey";
import cor_falecido from "@material-ui/core/colors/indigo";

export const rowStyle = () => (record, index, defaultStyle = {}) => {
	let style = defaultStyle;
	if (isAtivo(record.situacao))
		return {
			...style,
			borderLeftColor: cor_ativo[500],
			borderLeftWidth: 5,
			borderLeftStyle: "solid",
		};
	if (isInativo(record.situacao))
		return {
			...style,
			borderLeftColor: cor_inativo[500],
			borderLeftWidth: 5,
			borderLeftStyle: "solid",
		};
	if (isAltaMedica(record.situacao))
		return {
			...style,
			borderLeftColor: cor_de_alta[500],
			borderLeftWidth: 5,
			borderLeftStyle: "solid",
		};
	if (isFalecido(record.situacao))
		return {
			...style,
			borderLeftColor: cor_falecido[500],
			borderLeftWidth: 5,
			borderLeftStyle: "solid",
		};
	return style;
};

export const chipStyle = (item) => {
	let style = {};
	if (isAtivo(item))
		return {
			...style,
			backgroundColor: cor_ativo[50],
			color: cor_ativo[800],
			borderColor: cor_ativo[800],
		};
	if (isInativo(item))
		return {
			...style,
			backgroundColor: cor_inativo[50],
			color: cor_inativo[700],
			borderColor: cor_inativo[500],
		};
	if (isAltaMedica(item))
		return {
			...style,
			backgroundColor: cor_de_alta[50],
			color: cor_de_alta[700],
			borderColor: cor_de_alta[500],
		};
	if (isFalecido(item))
		return {
			...style,
			backgroundColor: cor_falecido[50],
			color: cor_falecido[700],
			borderColor: cor_falecido[500],
		};
	return style;
};

function isFalecido(situacao) {
	return situacao === "FALECIDO";
}

function isAltaMedica(situacao) {
	return situacao === "DE_ALTA";
}

function isInativo(situacao) {
	return situacao === "INATIVO";
}

function isAtivo(situacao) {
	return situacao === "ATIVO";
}
