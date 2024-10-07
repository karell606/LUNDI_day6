class Car {
    constructor(color, brand, model) {
        this.color = color;
        this.brand = brand;
        this.model = model;
    }
}

class Agent {
    constructor(name, code, age, car) {
        this.name = name;
        this.code = code;
        this.age = age;
        this.car = car;
    }

    isMatching(key, value) {
        return this.car[key] === value;
    }
}

function searchCars(agents, key, value) {
    return agents
        .filter(agent => agent.isMatching(key, value))
        .map(agent => agent.car);
}


const car1 = new Car('grey', 'Aston Martin', 'DB5');
const car2 = new Car('black', 'batmobile', '111');


const agent1 = new Agent('James Bond', '007', 57, car1);
const agent2 = new Agent('batman', 'IMF', 40, car2);


const agents = [agent1, agent2];

const matchingCars = searchCars(agents, 'brand', 'Aston Martin');
console.log(matchingCars);
