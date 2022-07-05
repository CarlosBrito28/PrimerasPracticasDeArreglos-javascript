//Crear funcion sumNumber que retorne el un arreglo donde a cada valor le sume 2 utiliza sintaxis ec6

const sumNumber = (startArray, sumNumber) => {
    return startArray.map((addition) => addition + sumNumber) ;

};


console.log(sumNumber([2, 4, 5, 6, 7], 2));


// filtrar Arreglo donde muestre por consola los numeros  mayores o iguales a 5
const filterNumbers = (filterArray, filterNumber) =>{ 
  return filterArray.filter((search) => search >= filterNumber );

} 

console.log( filterNumbers([2, 4, 5, 6, 7], 5));

//Funcion que reciba un arreglo de objetos y sume todas los valores 
// de la propiedad sueldo de cada objeto

const empleados = [
  { name: 'jose perez', direccion: 'calle peres', sueldo: 30},
  { name: 'Antonio Brady', direccion: 'calle State', sueldo: 60},
  { name: 'Carlos Brito', direccion: 'calle Jardin', sueldo: 90}
];



const personSalary =(salarySerch) =>{
return salarySerch.reduce((accumulator, {sueldo}) => {
   const retornar = accumulator + sueldo;
   console.log(retornar);
   return retornar;
  },0);
};
console.log(personSalary(empleados));


//Funcion que reciba un arreglo de objetos y busque el primer valor que tenga 60  
// de la propiedad sueldo de cada objeto

const  perforSearch = (array, valueSearch) => {
  return array.find(({sueldo}) => sueldo  === valueSearch);
};
console.log(perforSearch([{sueldo:30}, {sueldo:60}, {sueldo:90}], 60));

//Crear arreglo de objeto declarado  y funcion restNumber que retorne el un objeto donde a cada valor le reste 2 utiliza sintaxis ec6

const restNumber = [
   { number: 10 },
   { number: 20 },
   { number: 30 },
   { number: 40 },
   { number: 50 },
   { number: 60 }
];


const decrementNumber = (restNum) => {
 //return restNum.map((rest) => rest.decrement -2);
  return restNum.map(({ number }) => number -2);
};
console.log(decrementNumber(restNumber));





// arreglo de objetos sin declararlo enviado directamente que reste 2 numeros  con sinmtaxis  ec6

//  const decrementNumber = (restNum) => {
//      return restNum.map((rest) => rest.number -2);

//  };
//  console.log(decrementNumber([{number:10},{number:13},{number:15},{number:18}]));



const numbers = [
  { number: 28 },
  { number: 23 },
  { number: 12 },
  { number: 9 },
  { number: 80 },
  { number: -11 },
  { number: 14 },
  { number: -1 },
  { number: -15 }
]

const convertPowNumbers = (arrayNumbers, numberToFilter) => {

return arrayNumbers.filter(({number}) => number >= numberToFilter)
  .map(({number}) => number * number);
 

};
console.log(convertPowNumbers(numbers,12));

