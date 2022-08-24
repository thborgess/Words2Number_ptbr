dicionario = {

    //números cardinais
    'zero': 0,
    'um': 1,
    'hum': 1,
    'uma': 1,
    'dois': 2,
    'duas': 2,
    'tres': 3,
    'três': 3,
    'quatro': 4,
    'cinco': 5,
    'seis': 6,
    'sete': 7,
    'oito': 8,
    'nove': 9,
    'dez': 10,
    'onze': 11,
    'doze': 12,
    'treze': 13,
    'catorze': 14,
    'quatorze': 14,
    'quinze': 15,
    'dezesseis': 16,
    'dezasseis': 16,
    'dezessete': 17,
    'dezassete': 17,
    'dezoito': 18,
    'dezenove': 19,
    'dezanove': 19,
    'vinte': 20,
    'trinta': 30,
    'quarenta': 40,
    'cinquenta': 50,
    'cincuenta': 50,
    'sessenta': 60,
    'setenta': 70,
    'oitenta': 80,
    'noventa': 90,
    'cem': 100,
    'cento': 100,
    'centos': 100,
    'duzentos': 200,
    'duzentas': 200,
    'trezentos': 300,
    'trezentas': 300,
    'quatrocentos': 400,
    'quatrocentas': 400,
    'quinhentos': 500,
    'quinhentas': 500,
    'seiscentos': 600,
    'seiscentas': 600,
    'setecentos': 700,
    'setecentas': 700,
    'oitocentos': 800,
    'oitocentas': 800,
    'novecentos': 900,
    'novecentas': 900,
    'mil': 1000,
    'milhão': 1000000,
    'milhao': 1000000,
    'milhões': 1000000,
    'milhoes': 1000000,
    'bilhão': 1000000000,
    'bilhao': 1000000000,
    'bilhões': 1000000000,
    'bilhoes': 1000000000,
    'biliao': 1000000000000,
    'bilião': 1000000000000,
    'bilioes': 1000000000000,
    'biliões': 1000000000000,
    'trilhão': 1000000000000,
    'trilhao': 1000000000000,
    'trilhões': 1000000000000,
    'trilhoes': 1000000000000,
    'quatrilhão': 1000000000000000,
    'quatrilhao': 1000000000000000,
    'quatrilhões': 1000000000000000,
    'quatrilhoes': 1000000000000000,
    'quadrilhão': 1000000000000000,
    'quadrilhao': 1000000000000000,
    'quadrilhões': 1000000000000000,
    'quadrilhoes': 1000000000000000,
    'quintilhão': 1000000000000000000,
    'quintilhao': 1000000000000000000,
    'quintilhões': 1000000000000000000,
    'quintilhoes': 1000000000000000000,
    'trilião': 1000000000000000000,
    'triliao': 1000000000000000000,
    'triliões': 1000000000000000000,
    'trilioes': 1000000000000000000,
   
    //números fracionários
    'inteiro': 1,
    'inteiros': 1,
    'meio': 0.5,
    'meios': 0.5,
    'terço': 0.333,
    'terco': 0.333,
    'terços': 0.333,
    'tercos': 0.333,
    'quarto': 0.25,
    'quartos': 0.25,
    'quinto': 0.2,
    'quintos': 0.2,
    'sexto': 0.166,
    'sextos': 0.166,
    'sétimo': 0.142,
    'setimo': 0.142,
    'sétimos': 0.142,
    'setimos': 0.142,
    'oitavo': 0.125,
    'oitavos': 0.125,
    'nono': 0.111,
    'nonos': 0.111,
    'décimo': 0.1,
    'decimo': 0.1,
    'décimos': 0.1,
    'decimos': 0.1,
  
    //duzia
    'meia': 6,
    'dúzia': 12,
    'duzia': 12,
    'duzias': 12,
    'dúzias': 12,
  
  
    //milhares
    'unidade': 1,
    'unidades': 1,
    'dezena': 10,
    'dezenas': 10,
    'centena': 100,
    'centenas': 100,
    'milhar': 1000,
    'milhares': 1000,
  
    //outros casos
    'pi': 3.14,
    'pí': 3.14,
    'menos': 0,
    'negativo': 0,
    'vírgula': 0,
    'virgula': 0,
    'ponto': 0,
    'centavo': 0.01,
    'centavos': 0.01,
    'porcento': 0,
    'e': 0,
    'de': 0
  }
  
  multiplicadores = [
    'dúzia',
    'duzia',
    'dúzias',
    'duzias',
    'mil',
    'milhao',
    'milhão',
    'milhoes',
    'milhões',
    'centos',
    'bilhoes',
    'bilhões',
    'biliao',
    'bilião',
    'bilioes',
    'biliões',
    'cento',
    'trilhões',
    'trilhoes',
    'quadrilhões',
    'quadrilhoes',
    'quatrilhões',
    'quatrilhoes',
    'quintilhões',
    'quintilhoes',
    'trilião',
    'triliao',
    'triliões',
    'trilioes',  
    'pi',
    'pí',
    'décimo',
    'decimo',
    'décimos',
    'decimos',
    'unidade',
    'unidades',
    'dezena',
    'dezenas',
    'centena',
    'centenas',
    'milhar',
    'milhares',
    'inteiro',
    'inteiros',
    'meio',
    'meios',
    'terço',
    'terco',
    'terços',
    'tercos',
    'quarto',
    'quartos',
    'quinto',
    'quintos',
    'sexto',
    'sextos',
    'sétimo',
    'setimo',
    'sétimos',
    'setimos',
    'oitavo',
    'oitavos',
    'nono',
    'nonos'
  ] //array que guarda as ocorrencias que devem ser multipicadas pelo número anterior a elas
  
  function limparFrase(input) {
    input = input.toLowerCase();
    input = input.replace(/,/g, '')
    let arrayExtenso = input.split(" ");
    arrayExtenso = arrayExtenso.filter(e => e !== '');
  
    return arrayExtenso;
  }
  
  function umPorUm(input) {
    resultadoSolto = 0;
    
      for (i = input.length - 1; i >= 0; i--) {
        if (input[i] == 'negativo' || input[i] == 'negativos') {
          i--
        }
        
        prox = input[i - 1]
        numeroZeros = input.length - (i + 1)
        anterior = input[i + 1]
  
        if (i == input.length - 1 || dicionario[input[i]] > 9) {
          atual = dicionario[input[i]]
          
        } else {
          if (anterior == 'zero') {
            numeroZeros = input.length - (i + 1)
            atual = dicionario[input[i]] * Math.pow(10, numeroZeros)
          } else {
            atual = dicionario[input[i]] * Math.pow(10, numeroZeros)
            proxValue = dicionario[prox]
          }
        }
  
        resultadoSolto += atual
      }
      return resultadoSolto
    }
  
  function conversor(input) {
  
    resultado = 0; //variavel que irá guardar o resultado final
    
    ultimaFormacao = 0;
    FormacaoSolto = 0;
    divisao = 0;
    multVerif = input.some( ai => multiplicadores.includes(ai) );
    
    //loop que irá realizar as conversões do elementos da arrayExtenso para seus respectivos números e, então, irá iterá-los na váriavel resultado
    for (i = 0; i < input.length; i++) {
      if (dicionario[input[i]] == null) {
        throw "Alguma palavra que você digitou não consta no nosso sistema";
      }
  
      if (input[i] == 'menos') {
        i++ 
      }
  
      anterior = input[i - 1]
      atual = dicionario[input[i]]
      prox = input[i + 1]
      proxValue = dicionario[prox]
      prox2 = input[i + 2]
      prox2Value = dicionario[prox2]
  
      if ((input[i] == 'duzia' && anterior == 'meia') || (input[i] == 'dúzia' && anterior == 'meia')) {
        i++
      } else if (prox == 'de') {
        ultimaFormacao = ultimaFormacao * (atual * prox2Value);
        resultado += ultimaFormacao
        ultimaFormacao = 0
        i += 2;
      } else if (multiplicadores.includes(input[i]) && (ultimaFormacao != 0 && !multiplicadores.includes(input[i - 1]))) {
        ultimaFormacao = ultimaFormacao * atual
        resultado += ultimaFormacao
        ultimaFormacao = 0
      } else if (input[i] == 'negativo') {
        i++ //se o número tiver 'negativo' em alguma posição, ele pula para a próxima palavra
      } else if (prox == 'e') {
        ultimaFormacao = ultimaFormacao + (atual + prox2Value);
        i += 2;
      } else {
        ultimaFormacao += atual
      }
  
    }
  
    resultado += ultimaFormacao
  
    //ponto decimal thiago
    if (input.includes('ponto') || input.includes('virgula') || input.includes('vírgula')) {
      let indexPonto = input.indexOf('ponto')
  
      if (input.includes('virgula')) {
        indexPonto = input.indexOf('virgula')
      } else if (input.includes('vírgula')) {
        indexPonto = input.indexOf('vírgula')
      }
  
      let inteiro = input.slice(0, indexPonto)
      let fracionario = input.slice(indexPonto + 1, input.length + 1)
      let formacaoInteiro = 0
      let formacaoFrac = 0
      let ultimaFormacaoInt = 0;
      let ultimaFormacaoFrac = 0;
      let multVerifInt = inteiro.some( ai => multiplicadores.includes(ai) );
      let multVerifFrac = fracionario.some( ai => multiplicadores.includes(ai) );
  
      for (i = 0; i < inteiro.length; i++) {
        if (input[i] == 'menos') {
          i++ //se o número tiver 'menos' em alguma posição, ele pula para a próxima palavra
        }
  
        
        anteriorInteiro = input[i - 1]
        atualInteiro = dicionario[inteiro[i]]
        proxInteiro = inteiro[i + 1]
        proxValueInt = dicionario[proxInteiro]
        
  
        if (inteiro[i] == 'duzia' && anterior == 'meia' || inteiro[i] == 'dúzia' && anterior == 'meia') {
          i++
        } else if (multiplicadores.includes(inteiro[i]) && ultimaFormacaoInt != 0) {
          ultimaFormacaoInt = ultimaFormacaoInt * atualInteiro
          formacaoInteiro += ultimaFormacaoInt
          ultimaFormacaoInt = 0
  
        } else if (inteiro[i] == 'negativo') {
          i++ //se o número tiver 'negativo' em alguma posição, ele pula para a próxima palavra
        } else {
          ultimaFormacaoInt += atualInteiro
        }
      }
  
      formacaoInteiro += ultimaFormacaoInt
  
      if (!inteiro.includes('e') && !inteiro.includes('de') && !inteiro.includes('porcento') && !inteiro.includes('ponto') && !inteiro.includes('virgula') && !inteiro.includes('vírgula') && multVerifInt == false) {
      formacaoInteiro = umPorUm(inteiro)
    }
  
      for (i = 0; i < fracionario.length; i++) {
        anteriorFracionario = input[i - 1]
        atualFracionario = dicionario[fracionario[i]]
        proxFracionario = fracionario[i + 1]
        proxValueFrac = dicionario[proxFracionario]
  
        if (fracionario[i] == 'duzia' && anterior == 'meia' || fracionario[i] == 'dúzia' && anterior == 'meia') {
          i++
        } else if (multiplicadores.includes(fracionario[i]) && ultimaFormacaoFrac != 0) {
          ultimaFormacaoFrac = ultimaFormacaoFrac * atualFracionario
          formacaoFrac += ultimaFormacaoFrac
          ultimaFormacaoFrac = 0
        } else if (fracionario[i] == 'negativo') {
          i++ //se o número tiver 'negativo' em alguma posição, ele pula para a próxima palavra
        } else {
          ultimaFormacaoFrac += atualFracionario
        }
      }
  
      formacaoFrac += ultimaFormacaoFrac
  
      if (!fracionario.includes('e') && !fracionario.includes('de') && !fracionario.includes('porcento') && !fracionario.includes('ponto') && !fracionario.includes('virgula') && !fracionario.includes('vírgula') && multVerifFrac == false) {
        
      formacaoFrac = umPorUm(fracionario)
     
    }
      
      var resultadoFrac = formacaoInteiro + formacaoFrac * Math.pow(10, formacaoFrac.toString().length * -1)
  
      resultado = resultadoFrac
  
    }
  
    if (!input.includes('e') && !input.includes('de') && !input.includes('porcento') && !input.includes('ponto') && !input.includes('virgula') && !input.includes('vírgula') && multVerif == false) {
      
      resultado = umPorUm(input)
    }
      
  
    if (input.includes('menos') || input.includes('negativo')) { // se no array conter os termos 'menos' e 'negativo'
      resultado = resultado * -1
    }
  
  
    if (input.includes('porcento')) {
      resultado = resultado / 100
    }
  
    return resultado;
  }
  
  let extenso = 'um um nove dois um nove nove';
  
  function words2num(extenso) {
    let input
    let resultadoFinal
  
    if (typeof extenso == 'string') {
      input = limparFrase(extenso);
      resultadoFinal = conversor(input);
    } else {
      throw "Dado enviado não é string"
    }
  
    console.log(resultadoFinal);
    return resultadoFinal;
  }
  
  words2num(extenso);
  
  module.exports = { words2num }