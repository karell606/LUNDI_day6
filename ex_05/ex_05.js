class Car {
    constructor(color, brand, model) {
        this.color = color; 
        this.brand = brand; 
        this.model = model; 
    }
//Le constructor permet de définir et d’initialiser les propriétés de l’objet dès sa création. Par exemple, dans la classe Car, le constructeur initialise les propriétés color, brand, et model//
 
    logInfo() {
        console.log(`Car information: ${this.color}, ${this.model}, ${this.brand}`) ;//La méthode logInfo affiche les informations de la voiture dans la console.//
//`` ce sont des backsticks qui est utilisés pour entourer la chaîne de caractères. Ils permettent d’utiliser des variables à l’intérieur de la chaîne.//
    }
}
 
class Agent {
    constructor(name, code, age, car) {
        this.name = name; 
        this.code = code; 
        this.age = age; 
        this.car = car; 
    }
  
    logInfo() {
        console.log(`Agent information: ${this.name}, ${this.code}, ${this.age}`) ; //${}insere la valeur de ... (par exemple this color) dans la chaine.//
        this.car.logInfo(); 
    }
}
 
const bondCar = new Car('grey', 'DB5', 'Aston Martin');
const agent = new Agent('James Bond', '007', 57, bondCar);
 
agent.logInfo();
