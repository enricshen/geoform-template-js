﻿define(
     ({
        map: {
            error: "Não foi possível criar o mapa"
        },
        onlineStatus: {
            offline: "De momento, está a trabalhar em modo offline. Submissões de formulários serão guardadas localmente até que possa ser estabelecida uma ligação com o servidor. until a connection to the server can be made.",
            reconnecting: "Reconectando&hellip;",
            pending: "${total} edições pendentes serão submetidas assim que seja restabelecida uma ligação à rede."
        },
        configure: {
            mapdlg: {
                items: {
                    organizationLabel: "A Organização",
                    onlineLabel: "ArcGIS Online",
                    contentLabel: "O Meu Conteúdo",
                    favoritesLabel: "Os Meus Favoritos"
                },
                title: "Selecionar Mapa Web",
                searchTitle: "Pesquisar",
                ok: "Ok",
                cancel: "Cancelar",
                placeholder: "Introduza termo de pesquisa"
            },
            groupdlg: {
                items: {
                    organizationLabel: "A Organização",
                    onlineLabel: "ArcGIS Online",
                    contentLabel: "O Meu Conteúdo",
                    favoritesLabel: "Os Meus Favoritos"
                },
                title: "Selecionar Grupo",
                searchTitle: "Pesquisar",
                ok: "Ok",
                cancel: "Cancelar",
                placeholder: "Introduza termo de pesquisa"
            }
        },
        user: {
            mgrs: "MGRS",
            usng: "USNG",
            utm: "UTM",
            utm_northing: "Northing",
            utm_easting: "Easting",
            utm_zone_number: "Número da Zona",
            geoFormGeneralTabText: "1. Introduzir Informação",
            locationInformationText: "2. Escolher Localização",
            submitInformationText: "3. Completar Formulário",
            submitInstructions: "Adicione estas informações ao mapa.",
            myLocationText: "Localização Atual",
            locationDescription: "Especifique a localização para esta entrada clicando/tocando no mapa ou utilizando uma das seguintes opções.",
            addressText: "Pesquisar",
            geographic: "Lat/Lon",
            locationTabText: "Localização",
            locationPopupTitle: "Local",
            submitButtonText: "Submeter Entrada",
            submitButtonTextLoading: "A submeter&hellip;",
            formValidationMessageAlertText: "Os seguintes campos são necessários:",
            selectLocation: "Por favor selecione uma ${openLink}localização${closeLink} para a sua submissão.",
            emptylatitudeAlertMessage: "Por favor introduza a coordenada ${openLink}latitude${closeLink}.",
            emptylongitudeAlertMessage: "Por favor introduza a coordenada ${openLink}longitude${closeLink}.",
            shareUserTitleMessage: "Obrigado pela sua contribuição!",
            entrySubmitted: "A sua entrada foi submetida ao mapa.",
            shareThisForm: "Partilhar Este Formulário",
            shareUserTextMessage: "Diga a outros que contribuam utilizando as seguintes opções.",
            addAttachmentFailedMessage: "Impossível adicionar anexo à camada",
            addFeatureFailedMessage: "Impossível adicionar elemento à camada",
            noLayerConfiguredMessage: "Ocorreu um erro ao carregar ou procurar uma camada de elementos editável. Para exibir o formulário e começar a recolher submissões, adicione uma Camada de Elementos editável ao Mapa Web.",
            placeholderLatitude: "Latitude (Y)",
            placeholderLongitude: "Longitude (X)",
            latitude: "Latitude",
            longitude: "Longitude",
            findMyLocation: "Localizem-me",
            finding: "A localizar&hellip;",
            backToTop: "Voltar ao topo",
            addressSearchText: "A sua submissão aparecerá aqui. Pode arrastar o alfinete para corrigir a localização.",
            shareModalFormText: "Ligação para o Formulário",
            close: "Fechar",
            locationNotFound: "A localização não pode ser encontrada.",
            setLocation: "Definir Localização",
            find: "Localizar endereço ou lugar",
            attachment: "Anexo",
            toggleDropdown: "Alternar lista dropdown",
            invalidLatLong: "Por favor introduza as coordenadas de ${latLink}latitude${closeLink} e ${lngLink}longitude${closeLink}.",
            invalidUTM: "Por favor introduza coordenadas ${openLink}UTM${closeLink} válidas.",
            invalidUSNG: "Por favor introduza coordenadas ${openLink}USNG${closeLink} válidas.",
            invalidMGRS: "Por favor introduza coordenadas ${openLink}MGRS${closeLink} válidas.",
            geoformTitleText: "GeoForm",
            domainDefaultText: "Selecionar&hellip;",
            applyEditsFailedMessage: "Lamentamos mas a sua entrada não pode ser submetida. Por favor tente novamente.",
            requiredFields: "Existem alguns erros. Por favor corriga-os abaixo.",
            requiredField: "(necessário)",
            error: "Erro",
            textRangeHintMessage: "${openStrong}Dica:${closeStrong} Valor mínimo ${minValue} e Valor máximo ${maxValue}",
            dateRangeHintMessage: "${openStrong}Dica:${closeStrong} Data Mínima ${minValue} e Data Máxima ${maxValue}"
        },
        builder: {
            invalidUser: "Lamentamos, não tem permissão para visualizar este item",
            invalidWebmapSelectionAlert: "O mapa web selecionado não contém uma camada válida para utilizar. Por favor, adicione uma Camada de Elementos editável ao seu mapa web para continuar.",
            invalidWebmapSelectionAlert2: "Para mais informações, por favor consulte ${openLink}O que é um Serviço de Elementos?${closeLink}",
            selectFieldsText: "Selecionar Campos do Formulário",
            selectThemeText: "Escolher o Tema do Formulário",
            webmapText: "Mapa Web",
            layerText: "Camada",
            detailsText: "Detalhes",
            fieldsText: "Campos",
            styleText: "Estilo",
            optionText: "Parâmetros de Consulta",
            previewText: "Pré-Visualizar",
            publishText: "Publicar",
            optionsApplicationText: "Parâmetros de Consulta",
            titleText: "Builder",
            descriptionText: "GeoForm é um modelo configurável para a edição de dados baseados em formuláriosde um ${link1}Serviço de Elementos${closeLink}. Esta aplicação permite aos utilizadores introduzir dados através de um formulário, ao invés de uma janela pop-up de mapa, aproveitando as potencialidades do  ${link2}Mapa Web${closeLink} e Serviços de Elementos editáveis. Siga as seguintes etapas para personalizar e implementar o seu GeoForm.",
            btnPreviousText: "Anterior",
            btnNextText: "Seguinte",
            webmapTabTitleText: "Selecionar um Mapa Web",
            viewWebmap: "Visualizar Mapa Web",
            btnSelectWebmapText: "Escolher Mapa Web",
            btnSelectWebmapTextLoading: "Carregando&hellip;",
            layerTabTitleText: "Escolher Camada Editável",
            selectLayerLabelText: "Camada",
            selectLayerDefaultOptionText: "Selecionar Camada",
            detailsTabTitleText: "Detalhes do Formulário",
            detailTitleLabelText: "Título",
            detailLogoLabelText: "Imagem do Logotipo",
            descriptionLabelText: "Texto de Ajuda (opcional)",
            fieldTabFieldHeaderText: "Campo",
            fieldTabLabelHeaderText: "Rótulo",
            fieldTabDisplayTypeHeaderText: "Exibir Como",
            selectMenuOption: "Selecionar Menu",
            selectRadioOption: "Botão de Rádio",
            selectTextOption: "Texto",
            selectCheckboxOption: "Caixa de Seleção",
            selectMailOption: "Correio eletrónico",
            selectUrlOption: "URL",
            selectTextAreaOption: "Área de Texto",
            previewApplicationText: "Pré-visualizar Aplicação",
            saveApplicationText: "Guardar Aplicação",
            saveText: "Guardar",
            toggleNavigationText: "Alternar navegação",
            formPlaceholderText: "O Meu Formulário",
            shareBuilderInProgressTitleMessage: "A publicar o GeoForm",
            shareBuilderProgressBarMessage: "Por favor, aguarde&hellip;",
            shareBuilderTitleMessage: "Sucesso! Item guardado",
            shareBuilderTextMessage: "Pode começar a recolher informações através da partilha",
            shareModalFormText: "Ligação para o Formulário",
            shareBuilderSuccess: "O seu GeoForm foi atualizado e publicado!",
            geoformTitleText: "Geo Form",
            layerTabText: "Esta é a camada a partir da qual o  GeoForm será construído. A camada tem de conter um serviço de elementos com edição ativada e com permissões de partilha apropriadas ao seu público.",
            detailsTabText: "Utilize as caixas de Detalhes de Formulário abaixo para personalizar o Título, adicionar um logótipo personalizado e fornecer uma descrição curta para o público do seu Geoform. Na descrição, pode adicionar ligações para outros recursos, informações de contacto e até indicar ao seu público uma aplicação de cartografia web com todos os dados colecionados com o GeoForm.",
            fieldsTabText: "Aqui pode selecionar que campos estarão visíveis ao público do seu GeoForm, editar os Rótulos que serão visíveis e adicionar uma descrição curta para ajudar na introdução de dados.",
            styleTabText: "Configure o estilo do seu GeoForm utilizando os temas abaixo com base nas suas preferências.",
            publishTabText: "Se terminou de configurar o seu GeoForm, guarde a aplicação e começe a partilhar com o seu públicos. Pode sempre regressar a este builder e continuar a personalizá-lo com base no feedback.",
            smallHeader: "Utilizar Cabeçalho Pequeno",
            pushpinText: "Inserir alfinete",
            doneButtonText: "Visualizar Item da Aplicação",
            fieldTabPlaceHolderHeaderText: "Dica (opcional)",
            attachmentLabelText: "Rótulo de Anexo",
            attachmentLabelHint: "Diga aos utilizadores que tipo de ficheiros podem anexar.",
            attachmentDescription: "Descrição do Anexo",
            attachmentHint: "Se necessário, pode fornecer instruções adicionais sobre anexos aqui.",
            jumbotronDescription: "O Bootstrap Jumbotron facilita a especificação do propósito da sua aplicação. Pode ser desativado a qualquer momento.",
            shareGeoformText: "Partilhar Geoform",
            shareDescription: "O painel de partilha torna mais fácil ao seu público a partilha do GeoForm com outros colaboradores após terem efetuado uma submissão - isto pode ser desativado a qualquer momento.",
            defaultMapExtent: "Extensão por Defeito do Mapa",
            defaultMapExtentDescription: "O mapa regressará à extensão padrão no seu mapa web após a submissão - isto pode ser desativado a qualquer momento.",
            pushpinOptionsDescription: "Escolha uma de várias cores para o alfinete do mapa, este deve ser diferente da simbologia do mapa para ajudar o utilizador a efetuar a sua submissão no mapa.",
            selectLocationText: "Selecionar Localização Por",
            myLocationText: "Meu Local",
            searchText: "Pesquisar",
            coordinatesText: "Coordenadas de Latitude e Longitude",
            usng: "Coordenadas USNG",
            mgrs: "Coordenadas MGRS",
            utm: "Coordenadas UTM",
            selectLocationSDescription: "Permitir aos utilizadores selecionar uma localização utilizando estes métodos."
        }
    })
);