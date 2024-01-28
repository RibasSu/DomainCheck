# DomainCheck - Documentação do Código

## Introdução
Este código em JavaScript utiliza as bibliotecas `dns` e `node-whois` para verificar a disponibilidade de domínios. Ele gera todas as combinações de dois caracteres a partir de um conjunto predefinido, concatena com um TLD (Top-Level Domain) específico, e verifica se cada domínio está disponível.

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
