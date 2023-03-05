// // Parte I

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// Crie uma função que retorne o dano do dragão
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).

const randonNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const dragonDamage = () => randonNumber(15, dragon.strength);

// Crie uma função que retorne o dano causado pelo warrior.
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).

const warriorDamage = () => randonNumber(warrior.strength, (warrior.strength * warrior.weaponDmg));

// Crie uma função que retorne um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disso, a função deve ter uma condicional: caso o mago tenha menos de 15 de mana, o valor de dano recebe uma mensagem (Ex: “Não possui mana suficiente”), e a mana gasta é 0.

const consumeMana = () => {
  mage.mana -= 15;
};

const responseMageDamage = () => {
  if (mage.mana < 15) {
    return 'Não possui mana suficiente';
  }
  
  consumeMana();
  return randonNumber(mage.intelligence, (mage.intelligence * 2));
};

const mageMana = () => {
  if (mage.mana < 15) {
    return 0;
  }
  return 15;
};

const mageDamage = () => ({
  dano: responseMageDamage(),
  mana : mageMana(),
});

// // Parte II

const warriorXDragon = () => {
  warrior.damage = warriorDamage();
  dragon.healthPoints -= warrior.damage;
};

const mageXDragon = () => {
  mage.damage = mageDamage().dano;
  dragon.healthPoints -= mage.damage;
};

const gameActions = {
  // Crie a primeira HOF que compõe o objeto gameActions.
  // Ela será a função que simula o turno do personagem warrior. Essa HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon. Além disso, ela também deve atualizar o valor da chave damage do warrior.
  warriorAction : () => warriorXDragon(),
  // Crie a segunda HOF que compõe o objeto gameActions.
  // Ela será a função que simula o turno do personagem mage. Essa HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon. Além disso, ela também deve atualizar o valor das chaves damagee mana do mage.
  mageAction: () => mageXDragon(),
};
