const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Complete a função customerInfo() para que seu retorno seja similar a 'Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701'.
  // Adicione abaixo as informações necessárias.

  const entriesOrder = Object.values(order);
  const deliveryName = entriesOrder[3].delivery.deliveryPerson;
  const clientName = entriesOrder[0];
  const clientPhone = entriesOrder[1];
  const address = `R. ${entriesOrder[2].street}, Nº: ${entriesOrder[2].number}, AP: ${entriesOrder[2].apartment}`;

  return `Olá ${deliveryName}, entrega para: ${clientName}, Telefone: ${clientPhone}, ${address}.`;
};

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.

};

orderModifier(order);