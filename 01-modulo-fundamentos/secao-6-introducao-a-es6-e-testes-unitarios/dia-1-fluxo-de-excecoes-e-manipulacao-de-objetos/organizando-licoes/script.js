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

// Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const addEntriesObj = (obj, key, value) => {
  obj[key] = value;
};

addEntriesObj(lesson2, 'turno', 'noite');

console.log(lesson2);

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const viewKeysObj = (obj) => {
  return Object.keys(obj);
};

console.log(viewKeysObj(lesson1));

// Crie uma função para mostrar o tamanho de um objeto.

const lengthObj = (obj) => {
  return viewKeysObj(obj).length;
};

console.log(lengthObj(lesson2));

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const viewValuesObj = (obj) => {
  return Object.values(obj);
};

console.log(viewValuesObj(lesson2));

// Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:

// console.log(allLessons);
/*
{
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};
*/

const allLessons = {};
allLessons.lesson1 = Object.assign({}, lesson1);
allLessons.lesson2 = Object.assign({}, lesson2);
allLessons.lesson3 = Object.assign({}, lesson3);

console.log(allLessons);

// Usando o objeto criado no tópico anterior, crie uma função que retorne o número total de estudantes em todas as aulas.

const totalStudents = (obj) => {
  let sum = 0;

  viewValuesObj(obj).forEach((element) => {
    sum += element.numeroEstudantes;
  });

  return sum;
};

console.log(totalStudents(allLessons));

// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
  // console.log(getValueByNumber(lesson1, 0));
  // Output: 'Matemática'

const getValueByNumber = (obj, position) => {
  return Object.values(obj)[position]
};

console.log(getValueByNumber(lesson1, 0));

// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles o objeto, o nome da chave e o valor da chave. Exemplo:
  // console.log(verifyPair(lesson3, 'turno', 'noite'));
  // Output: true,
  // console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
  // Output: false

const verifyPair = (obj, key, value) => {
  const keysObj = Object.keys(obj);

  if (keysObj.includes(key)) {
    if (obj[key] === value) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));

// Utilizando o objeto (allLesson), crie uma função para contar quantos estudantes assistiram às aulas de Matemática;

const numStudentsMatery = (obj, matery) => {
  const arrayValues = Object.values(obj);
  let sum = 0;

  arrayValues.forEach((element) => {
    if (element.materia === matery) {
      sum += element.numeroEstudantes;
    }
  });

  return sum
};

console.log(numStudentsMatery(allLessons, 'Matemática'));

// Utilizando o objeto (allLesson), crie uma função que deva retornar um objeto que represente o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes.
  // console.log(createReport(allLessons, 'Maria Clara'));
  // {
  //   professor: 'Maria Clara',
  //   aulas: [ 'Matemática', 'Matemática' ],
  //   estudantes: 30
  // }

const createReport = (obj, nameTeacher) => {
  const arrayValues = Object.values(obj);
  const teacher = nameTeacher;
  const objResult = {
    professor: '',
    aulas: [],
    estudantes: 0
  };

  arrayValues.forEach((element) => {
    if (element.professor === teacher) {
      objResult.professor = teacher;
      objResult.aulas.push(element.materia);
      objResult.estudantes += element.numeroEstudantes;
    }
  });

  return objResult;
};

console.log(createReport(allLessons, 'Maria Clara'));
