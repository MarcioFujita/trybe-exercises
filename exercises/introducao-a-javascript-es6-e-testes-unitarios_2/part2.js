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

  const addManha = (obj, key, value) => {
      obj[key] = value;
  }
  addManha(lesson2, 'turno', 'manhã');
  
  const listKey = (obj) => Object.keys(obj);
  console.log(listKey(lesson2));

  const objSize = (obj) => Object.keys(obj).length;
  console.log(objSize(lesson2));
