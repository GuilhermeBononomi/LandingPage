# Landing Page

## Descrição do Projeto

A landing page institucional ADVB é uma parceria da Associação dos Deficientes Visuais de Brusque para com a UNIFEBE que visa informar mais pessoas sobre a a instituição sem fins lucrativos.

## Índice

- [Início](#começando)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Contribuição](#contribuições)

## Começando

Para obter uma cópia local deste projeto, siga estas etapas.

### Pré-requisitos

- [Node.js](https://nodejs.org/) (recomendada versão: 22.00 ou superior)
- [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable) (instalar o `yarn` com `npm`)

### Instalação

1. Clonar esse repositório:
   ```bash
   git clone https://github.com/GuilhermeBononomi/LandingPage.git
   ```

2. Abrir a pasta do projeto no prompt:
   ```bash
   cd LandingPage
   ```

3. Instalar as dependências:
   ```bash
   yarn install
   ```

4. Rodar o programa:
   ```bash
   yarn run vite
   ```

5. Abrir o arquivo no navegador:
   - Por padrão, o arquivo deverá ser executado no `http://localhost:5173`

## Estrutura do projeto

Mapa da estrutura do projeto:

```plaintext
Landing Page/
    │
    ├──── public/               # Pasta pública (arquivos estáticos)
    │       └── favicon.png     # Ícone de favoritos
    │
    ├── src/
    │    ├── assets/
    │    │     └── imagens utilizadas no projeto
    │    │
    │    ├── components/         # Componentes do projeto
    │    │   ├── banner          # Seção Logo
    │    │   ├── descriptions    # Seção Relatos
    │    │   ├── efficiency      # Seção Eficiência
    │    │   ├── footer          # Seção Rodapé
    │    │   ├── founder         # Seção Depoimento
    │    │   ├── header          # Seção Cabeçalho
    │    │   ├── history         # Seção História
    │    │   └── newsletter      # Seção Formulário Notícias
    │    ├── index.jsx        # Componente principal do projeto
    │    └── styles.css       # Estilos aplicados a todos os componentes da página
    │
    ├── main.jsx              # Indexador do projeto
    │
    ├── .gitignore            # Arquivos ignorados no commit
    ├── package.json          # Dependências do projeto
    └── README.md             # Documentação do projeto (arquivo atual)
```

## Contribuições

Acolhemos novas contribuições para este projeto! Para contribuir, por favor siga estes passos:

1. Faça um fork do repositório.
2. Crie uma nova branch `git checkout -b nome-da-bancada`
3. Faça suas alterações e as adicione do staging area usando o comando `git add .`
4. Comite as alterações feitas `git commit -m 'Adicionar uma mensagem no commit'`
5. Faça um push para o seu repositório forkado `git push origin nome-da-feature`
6. Abra um pull request para o repositório principal .