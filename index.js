var Chance = require("chance");

// Instantiate Chance so it can be used
var chance = new Chance();

/*
        Comando pra instalar a lib
      npm install chance

*/

//------------------lib que importei para gerar valores aeatorios----------------------------------

const geraRespostas_gabarito = () => {
  const array = [];
  let alternativa = 0;
  let contador = 0;
  let tamanho = 0;

  //^^^^^^^^^^^^ trecho acima feito as pressas

  while (tamanho < 45) {
    alternativa = chance.natural({ min: 1, max: 5 });

    for (let index = 0; index < array.length; index++) {
      if (array[index] == alternativa) contador++;
    }

    //nn permite ter mais de 9 respostas
    if (contador > 8) {
      contador = 0;
    }
    //se tiver menos de 9 ele permite add
    else {
      array.push(alternativa);

      contador = 0;
      ++tamanho;
    }
  }

  return array;
};

function geraNotasAleatorias() {
  let array = [];
  for (let index = 0; index < 45; index++) {
    array.push(chance.natural({ min: 1, max: 5 }));
  }
  return array;
}

const comparaGabaritos = (a, b) => {
  let y = 0;
  for (let index = 0; index < a.length; index++) {
    if (a[index] == b[index]) y++;
  }
  return y;
};

//----------------------------------------------------
const toPercent = function(b) {
  return ((b / 100000) * 100).toFixed(0);
};
let gabaritoOficial = 0;
let meuGabaritoUsandoMedia = 0;
let meuGabaritoAleatorio = 0;

let numeroDeGabariosMedia = 0,
  numeroGabaritosAleatorios = 0;

for (let index = 0; index < 100000; index++) {
  gabaritoOficial = geraRespostas_gabarito();
  meuGabaritoUsandoMedia = geraRespostas_gabarito();
  meuGabaritoAleatorio = geraNotasAleatorias();
  if (
    comparaGabaritos(gabaritoOficial, meuGabaritoUsandoMedia) >
    comparaGabaritos(gabaritoOficial, meuGabaritoAleatorio)
  ) {
    numeroDeGabariosMedia++;
  } else numeroGabaritosAleatorios++;
  gabaritoOficial = [];
  meuGabaritoUsandoMedia = [];
  arry3 = [];
}

console.log(
  "Com media eu acertei:",
  toPercent(numeroDeGabariosMedia) + "%",
  "\nSem media:",
  toPercent(numeroGabaritosAleatorios) + "%"
);
