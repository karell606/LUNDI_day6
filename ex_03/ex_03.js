function addCarToAgent(agent,brand,model, color, power) {
	if (typeof agent !== 'object' || brand !== 'string' || typeof model !== 'string' || typeof color !== 'string' || typeof power !== "string" ) {
	 return null;
  console.warn("Error: One or more keys are missing or incorrectly typed.")
 }	
  
	agent.car = {
       	brand: brand,
        model: model,
        color: color,
        power: power
   };

    return agent;
}

let agent = { 
    Firstname: "James",
    lastname: "Bond"
};

agent = addCarToAgent(agent,'Aston Martin','DB5','Grey','285bhp');

if (agent) {
	shareThatBeauty(agent);
}
