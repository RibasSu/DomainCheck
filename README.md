# DomainCheck - Documentação do Código

## Introdução
Este código em JavaScript utiliza as bibliotecas `dns` e `node-whois` para verificar a disponibilidade de domínios. Ele gera todas as combinações de dois caracteres a partir de um conjunto predefinido, concatena com um TLD (Top-Level Domain) específico, e verifica se cada domínio está disponível.

# Documentação de Instalação

Este guia fornece instruções sobre como instalar e configurar as dependências necessárias para executar o código de verificação de disponibilidade de domínios em JavaScript.

## Pré-requisitos

Antes de iniciar a instalação, verifique se o seu ambiente atende aos seguintes pré-requisitos:

1. **Node.js e npm:**
   - Certifique-se de ter o Node.js e o npm (Node Package Manager) instalados em seu sistema.
   - Faça o download e a instalação a partir do [site oficial do Node.js](https://nodejs.org/).

## Instalação de Dependências

O código depende de duas bibliotecas: `dns` e `node-whois`. Execute os seguintes passos para instalar essas dependências:

1. Abra o terminal ou prompt de comando.

2. Navegue até o diretório onde o código está localizado usando o comando `cd`:
   ```bash
   cd caminho/do/seu/codigo
   ```

3. Execute o seguinte comando para instalar as dependências:
   ```bash
   npm install dns node-whois
   ```

## Executando o Código

Após a instalação das dependências, você pode executar o código para verificar a disponibilidade de domínios. Siga estes passos:

1. No terminal, navegue até o diretório onde o código está localizado.

2. Execute o seguinte comando para iniciar a verificação de disponibilidade de domínios:
   ```bash
   node nome_do_arquivo.js
   ```
   Substitua `nome_do_arquivo.js` pelo nome do arquivo que contém o código.

3. Aguarde até que o processo seja concluído. Os resultados serão salvos em um arquivo JSON chamado `available_domains.tld.json` no mesmo diretório.

Certifique-se de que o ambiente de execução tenha acesso à internet para realizar as consultas DNS e whois.

## Variáveis

### 1. caracteres
- **Descrição:** Array contendo os caracteres permitidos para gerar combinações.
- **Exemplo:** `['a', 'b', ..., '9']`

### 2. dominio
- **Descrição:** TLD (Top-Level Domain) a ser concatenado com as combinações geradas.
- **Exemplo:** `'.tld'`

### 3. numCharacters
- **Descrição:** Número de caracteres para gerar as combinações.
- **Exemplo:** `2`

## Funções

### 1. typeError(text)
- **Descrição:** Exibe um texto em vermelho no console indicando um erro.
- **Parâmetros:**
  - `text`: Texto a ser exibido.
- **Exemplo:** `typeError('Erro ao consultar o whois.')`

### 2. typeAlert(text)
- **Descrição:** Exibe um texto em amarelo no console como alerta.
- **Parâmetros:**
  - `text`: Texto a ser exibido.
- **Exemplo:** `typeAlert('Verificando domínio...')`

### 3. typeSuccess(text)
- **Descrição:** Exibe um texto em verde no console indicando sucesso.
- **Parâmetros:**
  - `text`: Texto a ser exibido.
- **Exemplo:** `typeSuccess('Domínio disponível.')`

### 4. generateCombinations(numCharacters)
- **Descrição:** Gera todas as combinações de caracteres especificadas.
- **Parâmetros:**
  - `numCharacters`: Número de caracteres para gerar as combinações.
- **Retorno:** Array contendo todas as combinações geradas.
- **Exemplo:** `generateCombinations(2)`

### 5. checkDomainAvailability(domain)
- **Descrição:** Verifica a disponibilidade de um domínio.
- **Parâmetros:**
  - `domain`: Domínio a ser verificado.
- **Retorno:** Promessa que resolve com um objeto contendo o domínio e sua disponibilidade.
- **Exemplo:** `checkDomainAvailability('example.tld')`

## Fluxo Principal

1. Gera todas as combinações de dois caracteres.
2. Para cada combinação, cria um domínio concatenando com o TLD.
3. Verifica a disponibilidade do domínio usando resolução DNS e consulta whois.
4. Registra os resultados (disponíveis) em um arquivo JSON.

## Uso

O código pode ser executado diretamente, e os domínios disponíveis serão salvos em um arquivo JSON chamado `available_domains.tld.json`. Certifique-se de ter as bibliotecas `dns` e `node-whois` instaladas no ambiente de execução.

## Considerações Finais

Agora você concluiu a instalação e execução do código de verificação de disponibilidade de domínios. Caso encontre algum problema durante o processo de instalação, verifique se todos os pré-requisitos foram atendidos e se as dependências foram instaladas corretamente.
