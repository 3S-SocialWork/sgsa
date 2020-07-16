import React from "react";
import Chip from "@material-ui/core/Chip";
import { chipStyle } from "./SituacaoStyle";

const situacoes = {
	ATIVO: { descricao: "Ativo" },
	INATIVO: { descricao: "Inativo" },
	DE_ALTA: { descricao: "Alta Médica" },
	FALECIDO: { descricao: "Falecido" },
};

const SituacaoChipField = ({ record }) => {
	const value = situacoes[record.situacao];
	const classes = chipStyle(record.situacao);
	return record ? (
		<span className={classes.main}>
			<Chip
				size="small"
				variant="outlined"
				key={record}
				style={classes}
				label={value.descricao}
			/>
		</span>
	) : null;
};

SituacaoChipField.defaultProps = {
	addLabel: true,
};

export default SituacaoChipField;
