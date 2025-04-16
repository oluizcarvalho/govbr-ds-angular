# GovBR Design System - Componentes Angular

[![versão npm](https://img.shields.io/npm/v/govbr-ds-angular.svg)](https://www.npmjs.com/package/govbr-ds-angular)
[![Licença](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

Implementação em Angular do [Design System do Governo Brasileiro (GovBR DS)](https://www.gov.br/ds/). Esta biblioteca fornece componentes, diretivas e pipes Angular que implementam o Design System GovBR, facilitando a criação de aplicações que seguem as diretrizes de identidade visual do governo brasileiro.

## Índice

- [Instalação](#instalação)
- [Uso](#uso)
- [Componentes Disponíveis](#componentes-disponíveis)
- [Documentação](#documentação)
- [Desenvolvimento](#desenvolvimento)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Instalação

### 1. Instale o pacote

```bash
npm install govbr-ds-angular @govbr-ds/core
```

### 2. Importe os estilos

Adicione os estilos do Design System GovBR e ícones do FontAwesome ao seu projeto importando-os no seu arquivo `angular.json`:

```json
   "styles": [
      "@govbr-ds/core/dist/core.min.css",
      "@fortawesome/fontawesome-free/css/all.min.css"
   ],
```

## Uso

Após instalar e importar o módulo, você pode usar os componentes em seus templates:

```html
<!-- Exemplo de uso do componente botão -->
<br-button variant="primary">Click me</br-button>

<!-- Exemplo de uso do componente input -->
<br-input label="Name" placeholder="Enter your name"></br-input>
```

## Componentes Disponíveis

Esta biblioteca fornece os seguintes componentes:

- **Alert**: Exibe mensagens de alerta com diferentes estados
- **Breadcrumb**: Auxílio de navegação mostrando a localização do usuário na aplicação
- **Checkbox**: Componente de input checkbox
- **Collapse**: Painéis de conteúdo recolhíveis
- **Cookie Bar**: Barra de notificação de consentimento de cookies
- **Date Time Picker**: Componente de seleção de data e hora
- **Dialog Confirm**: Componente de diálogo de confirmação
- **Input**: Componente de entrada de texto
- **Item Info**: Componente de exibição de informações
- **Loading**: Componente indicador de carregamento
- **Magic Button**: Componente de botão aprimorado
- **Menu**: Componente de menu de navegação
- **Multi Select**: Componente de dropdown de seleção múltipla
- **Paginator**: Componente de paginação
- **Radio**: Componente de botão de rádio
- **Select**: Componente de seleção dropdown
- **Switch**: Componente de interruptor
- **Tabs**: Componente de interface com abas
- **Textarea**: Componente de entrada de texto multi-linha

### Diretivas

- **Button**: Diretiva para estilização de botões
- **Feedback**: Diretiva para feedback de formulários

### Pipes

- **GetIconByState**: Obtém o ícone apropriado com base no estado
- **HasError**: Verifica erros de formulário

## Documentação

Para documentação detalhada sobre cada componente, consulte:

- [Documentação do Design System GovBR](https://www.gov.br/ds/)
- [Exemplos de Componentes](https://www.gov.br/ds/components)

## Desenvolvimento

### Configuração

1. Clone o repositório:

   ```bash
   git clone https://github.com/your-org/govbr-ds-angular.git
   cd govbr-ds-angular
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

### Servidor de desenvolvimento

Execute `ng serve` para um servidor de desenvolvimento. Navegue até `http://localhost:4200/`. A aplicação será recarregada automaticamente se você alterar qualquer um dos arquivos de origem.

### Compilando a biblioteca

Execute `ng build govbr-ds-angular` para compilar a biblioteca. Os artefatos de compilação serão armazenados no diretório `dist/`.

### Executando testes

Execute `ng test` para executar os testes unitários via [Jest](https://jestjs.io/).

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para enviar um Pull Request.

1. Faça um fork do repositório
2. Crie sua branch de recurso (`git checkout -b feature/recurso-incrivel`)
3. Faça commit de suas alterações (`git commit -m 'Adiciona algum recurso incrível'`)
4. Faça push para a branch (`git push origin feature/recurso-incrivel`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para detalhes.

---

Desenvolvido com ❤️ para os serviços públicos digitais brasileiros.
