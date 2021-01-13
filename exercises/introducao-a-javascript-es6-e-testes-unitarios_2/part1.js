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
        margherita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    // const deliveryPerson = order.order.delivery.deliveryPerson;
    const cliente = order['order']['delivery'].deliveryPerson;
    const clienteRecebe = order['name'];
    const clienteFone = order['phoneNumber'];
    const nomeRua = order['address'].street;
    const numero = order['address'].number;
    const apartamento = order['address'].apartment;
    
    console.log(`Olá ${cliente}, entrega para: ${clienteRecebe}, Telefone: ${clienteFone}, ${nomeRua}, Nº:${numero}, AP:${apartamento}`);
    
  
  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    const outroComprador = order.nme = 'Luiz Silva';
    const bebida = order['order']['drinks']['coke'].type;
    const outroTotal = order['payment'].total = '50';
    console.log(`Olá ${outroComprador}, o total do seu pedido de muzzarella, calabresa e ${bebida} é R$ ${outroTotal},00.`);
  }
  
  orderModifier(order);