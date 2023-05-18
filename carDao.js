// Definición del DAO de la Agencia de Carros
class CarDAO {
  constructor() {
    // Simulación de una lista de carros en la base de datos
  this.carros = [
    { id: 1, marca: "Toyota", modelo: "Corolla", year: 2022, tipo: "Sedán", img1: "", img2: "", img3: "", img4: "", img5: "" },
    { id: 2, marca: "Honda", modelo: "Civic", year: 2021, tipo: "Sedán", img1: "", img2: "", img3: "", img4: "", img5: "" },
    { id: 3, marca: "Ford", modelo: "Mustang", year: 2023, tipo: "Coupé", img1: "", img2: "", img3: "", img4: "", img5: "" },
    { id: 4, marca: "Chevrolet", modelo: "Cruze", year: 2022, tipo: "Sedán", img1: "", img2: "", img3: "", img4: "", img5: "" },
    { id: 5, marca: "Volkswagen", modelo: "Golf", year: 2021, tipo: "Sedán", img1: "", img2: "", img3: "", img4: "", img5: "" },
    { id: 6, marca: "BMW", modelo: "Series 3", year: 2023, tipo: "Sedán", img1: "", img2: "", img3: "", img4: "", img5: "" },
    { id: 7, marca: "Mercedes-Benz", modelo: "C-Class", year: 2022, tipo: "Sedán", img1: "", img2: "", img3: "", img4: "", img5: "" },
    { id: 8, marca: "Audi", modelo: "A4", year: 2021, tipo: "Sedán", img1: "", img2: "", img3: "", img4: "", img5: "" },
    { id: 9, marca: "Lexus", modelo: "RX", year: 2023, tipo: "SUV", img1: "", img2: "", img3: "", img4: "", img5: "" },
    { id: 10, marca: "Mazda", modelo: "CX-5", year: 2022, tipo: "SUV", img1: "", img2: "", img3: "", img4: "", img5: "" },
    { id: 11, marca: "Subaru", modelo: "Impreza", year: 2021, tipo: "Sedán", img1: "", img2: "", img3: "", img4: "", img5: "" },
    { id: 12, marca: "Hyundai", modelo: "Tucson", year: 2023, tipo: "SUV", img1: "", img2: "", img3: "", img4: "", img5: "" },
    { id: 13, marca: "Kia", modelo: "Sportage", year: 2022, tipo: "SUV", img1: "", img2: "", img3: "", img4: "", img5: "" },
    { id: 14, marca: "Nissan", modelo: "Sentra", year: 2021, tipo: "Sedán", img1: "", img2: "", img3: "", img4: "", img5: "" },
    { id: 15, marca: "Volvo", modelo: "XC60", year: 2023, tipo: "SUV", img1: "", img2: "", img3: "", img4: "", img5: "" },
    { id: 16, marca: "Tesla", modelo: "Model 3", year: 2022, tipo: "Sedán", img1: "", img2: "", img3: "", img4: "", img5: "" },
    { id: 17, marca: "Land Rover", modelo: "Range Rover Evoque", year: 2021, tipo: "SUV", img1: "", img2: "", img3: "", img4: "", img5: "" },
    { id: 18, marca: "Jeep", modelo: "Wrangler", year: 2023, tipo: "SUV", img1: "", img2: "", img3: "", img4: "", img5: "" },
    { id: 19, marca: "Porsche", modelo: "911", year: 2022, tipo: "Coupé", img1: "", img2: "", img3: "", img4: "", img5: "" },
    { id: 20, marca: "Ferrari", modelo: "488 GTB", year: 2021, tipo: "Coupé", img1: "", img2: "", img3: "", img4: "", img5: "" },
    { id: 21, marca: "Maserati", modelo: "Ghibli", year: 2023, tipo: "Sedán", img1: "", img2: "", img3: "", img4: "", img5: "" },
    { id: 22, marca: "Lamborghini", modelo: "Huracán", year: 2022, tipo: "Coupé", img1: "", img2: "", img3: "", img4: "", img5: "" },
    { id: 23, marca: "Bugatti", modelo: "Chiron", year: 2021, tipo: "Coupé", img1: "", img2: "", img3: "", img4: "", img5: "" },
    { id: 24, marca: "McLaren", modelo: "720S", year: 2023, tipo: "Coupé", img1: "", img2: "", img3: "", img4: "", img5: "" },
    { id: 25, marca: "Aston Martin", modelo: "DB11", year: 2022, tipo: "Coupé", img1: "", img2: "", img3: "", img4: "", img5: "" },
    { id: 26, marca: "Rolls-Royce", modelo: "Phantom", year: 2021, tipo: "Sedán", img1: "", img2: "", img3: "", img4: "", img5: "" },
    { id: 27, marca: "Bentley", modelo: "Continental GT", year: 2023, tipo: "Coupé", img1: "", img2: "", img3: "", img4: "", img5: "" },
    { id: 28, marca: "Jaguar", modelo: "F-Type", year: 2022, tipo: "Coupé", img1: "", img2: "", img3: "", img4: "", img5: "" },
    { id: 29, marca: "Lotus", modelo: "Evora", year: 2021, tipo: "Coupé", img1: "", img2: "", img3: "", img4: "", img5: "" },
    { id: 30, marca: "Alfa Romeo", modelo: "Giulia", year: 2023, tipo: "Sedán", img1: "", img2: "", img3: "", img4: "", img5: "" }
];

  }

  // Función para obtener todos los carros
  obtenerCarros() {
    return this.carros;
  }
  
  obtenerTamano(){
    const numElements = Object.keys(carros).length;
    return numElements;
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
