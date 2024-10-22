# Projeto-Test-E2E---web-site-My-shop

## Descrição
Este projeto tem como objetivo automatizar testes end-to-end no site http://www.automationpractice.pl/index.php, utilizando a biblioteca Cypress e a arquitetura Page Object Model. Foram implementados testes para as funcionalidades de cadastro de usuário, login e gerenciamento de endereços.

## Tecnologias Utilizadas
* **Cypress:** Framework de testes end-to-end.
* **JavaScript:** Linguagem de programação.
* **Node.js:** Ambiente de execução JavaScript.
* **npm:** Gerenciador de pacotes.
* **Chance:** Biblioteca para geração de dados aleatórios.

## Instalação
1. Clone este repositório:
   ```bash
   git clone [https://github.com/Andre-Goncalves89/Projeto-Test-E2E---web-site-My-shop---http-www.automationpractice.pl-index.php-controller-contact.git](https://github.com/Andre-Goncalves89/Projeto-Test-E2E---web-site-My-shop---http-www.automationpractice.pl-index.php-controller-contact.git)
2. Instale as dependências:
  ```bash
   npm install
   ```
   ```bash
   npm install cypress --save-dev
   ```
   ```bash
   npm install chance
   ```
   
  ## Executando os Testes
1. Abra o terminal na raiz do projeto.
2. Execute os testes:
   ```bash
   npx cypress open

## Estrutura do Projeto

cypress: Contém os arquivos de configuração e testes do Cypress.

pageObjects: Contém os objetos de página que representam as diferentes páginas do site.

utils: Contém funções utilitárias, como geradores de dados aleatórios.

# Cenários de Teste
## Cadastro de Usuário

Cadastro com sucesso: Verifica se um novo usuário pode ser cadastrado com sucesso.

Cadastro com formulário em branco: Verifica se o sistema impede o cadastro sem preencher todos os campos.

Cadastro com informações inválidas: Verifica se o sistema valida informações como nome, email e senha.

## Login de Usuário

Login válido: Verifica se um usuário pode fazer login com credenciais válidas.

Login com credenciais inválidas: Verifica se o sistema impede o login com credenciais inválidas.

## Gerenciamento de Endereços

Criar novo endereço: Verifica se um novo endereço pode ser criado com sucesso.

Criar endereço com informações inválidas: Verifica se o sistema impede a criação de endereços com informações inválidas.

Excluir endereço: Verifica se um endereço existente pode ser excluído.

## Contribuições
Contribuições são bem-vindas! Abra um pull request para propor melhorias.

### Licença
Este projeto está licenciado sob a MIT License - veja o arquivo LICENSE para mais detalhes.

### Autores
André Gonçalves
