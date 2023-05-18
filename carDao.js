// Definición del DAO de la Agencia de Carros
class CarDAO {
  constructor() {
    // Simulación de una lista de carros en la base de datos
  this.carros = [
    { id: 1, marca: "Toyota", modelo: "Corolla", año: 2022, img1: ,img2: ,img3: ,img4: ,img5: },
    { id: 2, marca: "Honda", modelo: "Civic", año: 2021, img1: ,img2: ,img3: ,img4: ,img5:  },
    { id: 3, marca: "Ford", modelo: "Mustang", año: 2023, img1: ,img2: ,img3: ,img4: ,img5:  },
    { id: 4, marca: "Chevrolet", modelo: "Cruze", año: 2022, img1: ,img2: ,img3: ,img4: ,img5:  },
    { id: 5, marca: "Volkswagen", modelo: "Golf", año: 2021, img1: ,img2: ,img3: ,img4: ,img5:  },
    { id: 6, marca: "BMW", modelo: "Series 3", año: 2023, img1: ,img2: ,img3: ,img4: ,img5:  },
    { id: 7, marca: "Mercedes-Benz", modelo: "C-Class", año: 2022, img1: ,img2: ,img3: ,img4: ,img5:  },
    { id: 8, marca: "Audi", modelo: "A4", año: 2021, img1: ,img2: ,img3: ,img4: ,img5:  },
    { id: 9, marca: "Lexus", modelo: "RX", año: 2023, img1: ,img2: ,img3: ,img4: ,img5:  },
    { id: 10, marca: "Mazda", modelo: "CX-5", año: 2022, img1: ,img2: ,img3: ,img4: ,img5:  },
    { id: 11, marca: "Subaru", modelo: "Impreza", año: 2021, img1: ,img2: ,img3: ,img4: ,img5:  },
    { id: 12, marca: "Hyundai", modelo: "Tucson", año: 2023, img1: ,img2: ,img3: ,img4: ,img5:  },
    { id: 13, marca: "Kia", modelo: "Sportage", año: 2022, img1: ,img2: ,img3: ,img4: ,img5:  },
    { id: 14, marca: "Nissan", modelo: "Sentra", año: 2021, img1: ,img2: ,img3: ,img4: ,img5:  },
    { id: 15, marca: "Volvo", modelo: "XC60", año: 2023, img1: ,img2: ,img3: ,img4: ,img5:  },
    { id: 16, marca: "Tesla", modelo: "Model 3", año: 2022, img1: ,img2: ,img3: ,img4: ,img5:  },
    { id: 17, marca: "Land Rover", modelo: "Range Rover Evoque", año: 2021, img1: ,img2: ,img3: ,img4: ,img5:  },
    { id: 18, marca: "Jeep", modelo: "Wrangler", año: 2023, img1: ,img2: ,img3: ,img4: ,img5:  },
    { id: 19, marca: "Porsche", modelo: "911", año: 2022, img1: ,img2: ,img3: ,img4: ,img5:  },
    { id: 20, marca: "Ferrari", modelo: "488 GTB", año: 2021, img1: ,img2: ,img3: ,img4: ,img5:  },
    { id: 21, marca: "Maserati", modelo: "Ghibli", año: 2023, img1: ,img2: ,img3: ,img4: ,img5:  },
    { id: 22, marca: "Lamborghini", modelo: "Huracán", año: 2022, img1: ,img2: ,img3: ,img4: ,img5:  },
    { id: 23, marca: "Bugatti", modelo: "Chiron", año: 2021, img1: ,img2: ,img3: ,img4: ,img5:  },
    { id: 24, marca: "McLaren", modelo: "720S", año: 2023, img1: ,img2: ,img3: ,img4: ,img5:  },
    { id: 25, marca: "Aston Martin", modelo: "DB11", año: 2022, img1: ,img2: ,img3: ,img4: ,img5:  },
    { id: 26, marca: "Rolls-Royce", modelo: "Phantom", año: 2021, img1: ,img2: ,img3: ,img4: ,img5:  },
    { id: 27, marca: "Bentley", modelo: "Continental GT", año: 2023, img1: ,img2: ,img3: ,img4: ,img5:  },
    { id: 28, marca: "Jaguar", modelo: "F-Type", año: 2022, img1: ,img2: ,img3: ,img4: ,img5:  },
    { id: 29, marca: "Lotus", modelo: "Evora", año: 2021, img1: ,img2: ,img3: ,img4: ,img5:  },
    { id: 30, marca: "Alfa Romeo", modelo: "Giulia", año: 2023, img1: ,img2: ,img3: ,img4: ,img5:  }
  ];

  }

  // Función para obtener todos los carros
  obtenerCarros() {
    return this.carros;
  }

  // Función para obtener un carro por su ID
  obtenerCarroPorId(id) {
    return this.carros.find(carro => carro.id === id);
  }
  
  obtenerCarroPorNombre(modelo,año){
    return this.carros.find(carro => carro.modelo === modelo && carro.año === año);
  }

  // Función para agregar un nuevo carro
  agregarCarro(carro) {
    this.carros.push(carro);
  }
}
