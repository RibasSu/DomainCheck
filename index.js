const dns = require('dns');
const whois = require('node-whois');
const fs = require('fs');
const path = require('path');

// --------------------------------- Variáveis ---------------------------------

// Defina os caracteres permitidos e o TLD
const caracteres = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const dominio = '.tld';
const numCharacters = 2

// --------------------------------- Variáveis ---------------------------------

// --------------------------------- Cor Texto ---------------------------------

function typeError(text) {
  process.stdout.write(`\x1b[31m${text}\x1b[0m\n`);
}

function typeAlert(text) {
  process.stdout.write(`\x1b[33m${text}\x1b[0m\n`);
}

function typeSuccess(text) {
  process.stdout.write(`\x1b[32m${text}\x1b[0m\n`);
}

// --------------------------------- Cor Texto ---------------------------------

// Função para gerar todas as combinações de dois caracteres
function generateCombinations(numCharacters) {
  const combinations = [];
  const numCaracteres = Math.min(numCharacters, caracteres.length); // Garante que não ultrapasse o tamanho do array caracteres

  // Função recursiva para gerar combinações de n caracteres
  function generateRecursively(currentCombination, remainingCharacters) {
    if (remainingCharacters === 0) {
      combinations.push(currentCombination);
      return;
    }

    for (let i = 0; i < caracteres.length; i++) {
      generateRecursively(currentCombination + caracteres[i], remainingCharacters - 1);
    }
  }

  generateRecursively('', numCaracteres);
  return combinations;
}

// Gere todas as combinações
const allCombinations = generateCombinations(numCharacters);

// Função para verificar a disponibilidade de domínio
function checkDomainAvailability(domain) {
    return new Promise(async (resolve) => {
      typeAlert(`Verificando ${domain}...`);
      dns.resolveNs(domain, async (err, addresses) => {
        if (err || addresses.length === 0) {
          whois.lookup(domain, (whoisErr, data) => {
            if (whoisErr) {
              console.error(typeError(`Erro ao consultar o whois para o domínio ${domain}: ${whoisErr.message}`));
              resolve({ domain, available: false });
            } else {
              if (data.includes('No match for domain')) {
                // O domínio não foi encontrado no whois, ou seja, está disponível.
                typeSuccess(`Domínio ${domain} está disponível. (free)`)
                resolve({ domain, available: true });
              } else {
                // O domínio foi encontrado no whois, ou seja, não está disponível.
                typeError(`Domínio ${domain} não está disponível. (whois)`);
                resolve({ domain, available: false });
              }
            }
          });
        } else {
          // Registros NS encontrados, o domínio não está disponível.
          typeError(`Domínio ${domain} não está disponível. (ns)`);
          resolve({ domain, available: false });
        }
      });
    });
  }  

// Verifique a disponibilidade de todos os domínios e salve os resultados
(async () => {
  const availableDomains = [];

  for (const combination of allCombinations) {
    const domain = combination + dominio;
    const result = await checkDomainAvailability(domain);
    if (result.available) {
      availableDomains.push(result.domain);
    }
  }

  // Salve os resultados em um arquivo JSON
  fs.writeFileSync(path.join(__dirname, `available_domains${dominio}.json`), JSON.stringify(availableDomains, null, 2));

  typeSuccess(`Domínios disponíveis salvos em available_domains${dominio}.json`);
})();
