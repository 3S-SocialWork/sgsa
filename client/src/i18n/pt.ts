// Traduções extraídas de https://github.com/henriko202/ra-language-portuguese
import { TranslationMessages } from "ra-core";

const customPortugueseMessages: TranslationMessages = {
	ra: {
		action: {
			add_filter: "Adicionar Filtro",
			add: "Adicionar",
			back: "Voltar",
			bulk_actions:
				"1 item selecionado |||| %{smart_count} itens selecionados",
			cancel: "Cancelar",
			clear_input_value: "Limpar campo",
			clone: "Duplicar",
			confirm: "Confirmar",
			create: "Novo",
			delete: "Excluir",
			edit: "Editar",
			export: "Exportar",
			list: "Listar",
			refresh: "Atualizar",
			remove_filter: "Cancelar filtro",
			remove: "Excluir",
			save: "Salvar",
			search: "Buscar",
			show: "Exibir",
			sort: "Ordenar",
			undo: "Desfazer",
			expand: "Expandir",
			close: "Fechar",
			open_menu: "Abrir menu",
			close_menu: "Fechar menu",
		},
		boolean: {
			true: "Sim",
			false: "Não",
			null: "",
		},
		page: {
			create: "Novo %{name}",
			dashboard: "Painel de Controle",
			edit: "%{name} #%{id}",
			error: "Um erro ocorreu",
			list: "Listar %{name}",
			loading: "Carregando",
			not_found: "Não encontrado",
			show: "%{name} #%{id}",
			empty: "Ainda não há nenhum registro em %{name}",
			invite: "Gostaria de criar um novo?",
		},
		input: {
			file: {
				upload_several:
					"Arraste alguns arquivos para fazer o upload, ou clique para selecioná-los.",
				upload_single:
					"Arraste o arquivo para fazer o upload, ou clique para selecioná-lo.",
			},
			image: {
				upload_several:
					"Arraste algumas imagens para fazer o upload ou clique para selecioná-las",
				upload_single:
					"Arraste um arquivo para upload ou clique em selecionar arquivo.",
			},
			references: {
				all_missing:
					"Não foi possível encontrar os dados das referencias.",
				many_missing:
					"Pelo menos uma das referências passadas não está mais disponível.",
				single_missing:
					"A referência passada aparenta não estar mais disponível.",
			},
			password: {
				toggle_visible: "Esconder senha",
				toggle_hidden: "Mostrar senha",
			},
		},
		message: {
			about: "Sobre",
			are_you_sure: "Tem certeza?",
			bulk_delete_content:
				"Você tem certeza que deseja excluir %{name}? |||| Você tem certeza que deseja excluir estes %{smart_count} itens?",
			bulk_delete_title:
				"Excluir %{name} |||| Excluir %{smart_count} %{name} itens",
			delete_content: "Você tem certeza que deseja excluir?",
			delete_title: "Excluir %{name} #%{id}",
			details: "Detalhes",
			error:
				"Um erro ocorreu e a sua requisição não pôde ser completada.",
			invalid_form:
				"Este formulário não está valido. Certifique-se de corrigir os erros",
			loading: "A página está carregando. Um momento, por favor",
			no: "Não",
			not_found:
				"Foi digitada uma URL inválida, ou o link pode estar quebrado.",
			yes: "Sim",
			unsaved_changes:
				"Algumas das suas mudanças não foram salvas, deseja realmente ignorá-las?",
		},
		navigation: {
			no_results: "Nenhum resultado encontrado",
			no_more_results:
				"A página numero %{page} está fora dos limites. Tente a página anterior.",
			page_out_of_boundaries: "Página %{page} fora do limite",
			page_out_from_end: "Não é possível ir após a última página",
			page_out_from_begin: "Não é possível ir antes da primeira página",
			page_range_info: "%{offsetBegin}-%{offsetEnd} de %{total}",
			page_rows_per_page: "Resultados por página:",
			next: "Próximo",
			prev: "Anterior",
		},
		auth: {
			auth_check_error: "Por favor, faça login para continuar",
			user_menu: "Perfil",
			username: "Usuário",
			password: "Senha",
			sign_in: "Entrar",
			sign_in_error: "Erro na autenticação, tente novamente.",
			logout: "Sair",
		},
		notification: {
			updated:
				"Item atualizado com sucesso |||| %{smart_count} itens foram atualizados com sucesso",
			created: "Item criado com sucesso",
			deleted:
				"Item removido com sucesso! |||| %{smart_count} itens foram removidos com sucesso",
			bad_item: "Item incorreto",
			item_doesnt_exist: "Esse item não existe mais",
			http_error: "Erro na comunicação com servidor",
			data_provider_error: "Erro interno do servidor. Entre em contato",
			i18n_error:
				"Não foi possível carregar as traduções para o idioma especificado",
			canceled: "Ação cancelada",
			logged_out: "Sua sessão foi encerrada. Por favor, reconecte",
		},
		validation: {
			required: "Obrigatório",
			minLength: "Deve ser ter no mínimo %{min} caracteres",
			maxLength: "Deve ter no máximo %{max} caracteres",
			minValue: "Deve ser %{min} ou maior",
			maxValue: "Deve ser %{max} ou menor",
			number: "Deve ser um número",
			email: "Deve ser um email válido",
			oneOf: "Deve ser uma das seguintes opções: %{options}",
			regex: "Deve ter o formato específico (regexp): %{pattern}",
		},
	},
	resources: {
		pacientes: {
			name: "Paciente |||| Pacientes",
			fields: {
				id: "Código",
				nome: "Nome",
				telefone: "Telefone",
				tel_contato: "Tel. Contato",
				num_doc: "Documento",
				sexo: "Sexo",
				obs: "Observações",
				data_nascimento: "Data Nascimento",
				data_cadastro: "Data Cadastro",
				email: "email",
				situacao: "Situação",
				logradouro: "Logradouro",
				numero: "Número",
				complemento: "Complemento",
				bairro: "Bairro",
				cidade: "Cidade",
				cep: "CEP",
				uf: "UF",
				tipo_tratamento: "Tipo Tratamento",
			},
			fieldsGroups: {
				name: "Paciente",
				endereco: "Endereço",
				situacao: "Situação",
				tipo_tratamento: "Tipo de Tratamento",
				beneficios: "Benefícios",
				produto: "Produto",
				pedidos: "Pedidos",
				obs: "Observações",
			},
		},
		"tipos-tratamento": {
			name: "Tipo Tratamento |||| Tipos de Tratamento",
			fields: {
				id: "Código",
				descricao: "Descrição",
			},
		},
		situacoes: {
			name: "Situação |||| Situações",
			fields: {
				id: "Código",
				descricao: "Descrição",
			},
		},
		produtos: {
			name: "Produto |||| Produtos",
			fields: {
				id: "Código",
				descricao: "Descrição",
				especificacao: "Especificação",
			},
		},
		beneficios: {
			name: "Benefício |||| Benefícios",
			fields: {
				id: "Código",
				paciente: "Cód. Paciente",
				produto: "Cód. Produto",
				quantidade: "Qtd.",
				data_ultimo_lancamento: "Último Lançamento",
				periodo: "Período",
			},
		},
		pedidos: {
			name: "Pedido |||| Pedidos",
			fields: {
				id: "Código",
				data_cadastro: "Data Cadastro",
				data_liberacao: "Data Liberação",
				paciente: "Cód. Paciente",
				reference: "Pedido Nº",
				itens: {
					produto: "Descrição",
					quantidade: "Qtd.",
				},
			},
			fieldsGroups: {
				itens: "Itens",
				titulo: "Pedido",
			},
		},
		"pedido-itens": {
			name: "Item |||| Itens",
			fields: {
				id: "Código",
				pedido_id: "Cód. Pedido",
				produto: "Cód. Produto",
				quantidade: "Qtd.",
			},
		},
	},
};

export default customPortugueseMessages;
