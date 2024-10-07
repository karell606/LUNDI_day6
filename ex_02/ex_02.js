function addCar(agentString, car) {
    let agent = JSON.parse(agentString);
      agent.car = car;
    
  return agent;
}

let agentString = '{"name": "James Bond", "age": 57}';
let car = "Ferrari";
let updatedAgent = addCar(agentString, car);

console.log(updatedAgent);
