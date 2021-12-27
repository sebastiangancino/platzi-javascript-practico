// funciones helper

function esPar(numerito) {
    return (numerito%2 ==0);
}

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }


  // Calculadora de mediana
  function medianaSalarios(lista) {
    const mitad= parseInt(lista.length /2);

    if (esPar(lista.length)) {
        const personitaMitad1 = lista[mitad-1];
        const personitaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;
    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;

    }
}
  // calculando la mediana general
const salarioEc = ecuador.map (
    function (personita) {
        return personita.salary;
    }
);

const salariosEcSorted = salarioEc.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;

    }
);




    const medianaGeneralEc = medianaSalarios(salariosEcSorted);

    // median del top 10

    const spliceStart = (salariosEcSorted.length * 90)/100 ;
    const spliceCount = salariosEcSorted.length - spliceStart;

    const salariosEcTop10 = salariosEcSorted.splice(
        spliceStart,
         spliceCount
         );


         const medianaTop10Ec = medianaSalarios(salariosEcTop10);

    console.log (
        medianaGeneralEc,
        medianaTop10Ec

 );


