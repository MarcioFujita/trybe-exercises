const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};
  
const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

// Exercicio 1
const addManha = (obj, key, value) => {
    obj[key] = value;
}
addManha(lesson2, 'turno', 'manhã');

// Exercicio 2
const listKey = (obj) => Object.keys(obj);
console.log(listKey(lesson2));

// Exercicio 3
const objSize = (obj) => Object.keys(obj).length;
console.log(objSize(lesson2));

// Exercicio 4
const objValue = (obj) => Object.values(obj);
console.log(objValue(lesson2));

// Exercicio 5
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);

// Exercicio 6
const totalStudents = (obj) => {
    let total = 0;
    const temp = Object.keys(obj);
    for (let index = 0; index < temp.length; index += 1) {
        total = total + obj[temp[index]].numeroEstudantes;
    }
    return total;
}
console.log(totalStudents(allLessons));
 
// Exercicio 7
const getValueByNumber = (obj,number) => Object.values(obj)[number];
console.log(getValueByNumber(lesson2, 0));

// Exercicio 8
const pairVer = (obj, key, value) => {
    const temp = Object.entries(obj);
    let isEqual = false;
    for (let index = 0; index < temp.length; index += 1) {
      if (temp[index][0] === key && temp[index][1] === value) isEqual = true;
    }
    return isEqual;
  };
  console.log(pairVer(lesson2,'professor','Carlos'));
