function displayAgentInfo(agent) {
    const p = document.createElement("p");
    p.textContent = "My name is bond, James bond! I'm the agent 007 and I'm 57 years old.";
    document.body.appendChild(p);
}
const agent = {
    age: 57,
    code: "007",
    firstName: "James",
    lastName: "Bond"
};

displayAgentInfo(agent);
