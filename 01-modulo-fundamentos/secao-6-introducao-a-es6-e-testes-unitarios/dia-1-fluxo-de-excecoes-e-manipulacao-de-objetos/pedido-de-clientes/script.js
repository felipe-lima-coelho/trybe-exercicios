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
  // Complete a função orderModifier() para que seu retorno seja similar a 'Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.';
    // Modifique o nome da pessoa compradora para Luiz Silva;
    // Modifique o valor total da compra para R$ 50,00.
  // Adicione abaixo as informações necessárias.

  const newValues = {
    name: 'Luiz Silva',
    payment: {
      total: 50,
    },
  };

  const newOrder = Object.assign({}, order, newValues);
  const entriesOrder = Object.entries(newOrder);
  const clientName = entriesOrder[0][1];
  const namePizza1 = Object.keys(entriesOrder[3][1].pizza)[0];
  const namePizza2 = Object.keys(entriesOrder[3][1].pizza)[1];
  const nameRefri = Object.entries(entriesOrder[3][1])[1][1].coke.type;
  const valuePrice = entriesOrder[entriesOrder.length - 1][1].total;

  return `Olá ${clientName}, o total do seu pedido de ${namePizza1}, ${namePizza2} e ${nameRefri} é R$ ${valuePrice},00.`;
  
};

orderModifier(order);