function updateLicensePlates(agent, plates) {
    agent.car = { licensePlates: plates }; 
    return agent; 
}
 
function showLicensePlates(agent) {
    const ul = document.createElement('ul');
 
    agent.car.licensePlates.forEach(plate => {
        const li = document.createElement('li'); 
        li.textContent = plate; 
        ul.appendChild(li);  
    });
 
    document.body.appendChild(ul);
    //Ajoute l’élément <ul> au corps du document HTML, affichant ainsi la liste des plaques d’immatriculation sur la page.//
}
 
let bond = {}; //Crée un objet vide nommé bond//
let plates = ['LU 6789', '4711-EA-62', 'BMT 216A']; 
bond = updateLicensePlates(bond, plates); 
//Appelle la fonction updateLicensePlates avec l’objet bond et le tableau plates, et met à jour bond avec les nouvelles informations.//
showLicensePlates(bond);
