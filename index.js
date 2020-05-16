let uczelnia = {};

function dodajStudentow(rok, grupa, ...studenci) {
  debugger;
  uczelnia[rok] = uczelnia[rok] || {};
  uczelnia[rok][grupa] = uczelnia[rok][grupa] || [];
  
  let {[rok]: wybranyRok } = uczelnia;

  wybranyRok[grupa] = [...wybranyRok[grupa], ...studenci];
}

console.log(uczelnia);
dodajStudentow('I', '2b', 'Mateusz');
console.log(uczelnia);
dodajStudentow('I', '2b', 'Dagmara', 'Marcin', 'Lukasz');
console.log(uczelnia);
dodajStudentow('II', '1b', 'Michał', 'Katarzyna', 'Antoni');
console.log(uczelnia);

/***********************************************/
// Napisać funkcję sumującą podane elementy i wypisującą wynik do konsoli
// Liczba argumentów nieznana