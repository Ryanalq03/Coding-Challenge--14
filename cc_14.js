//Coding Challenge #14

//Task 2 Adding Support Tickets Dynamically

//Function to make support ticket
function addSupportTicket(name, issue, priority) {

    const ticketContainer = document.getElementById("ticketContainer");
    // creates the div for ticket and adding attributes class and id
    const ticketCard = document.createElement('div');
    ticketCard.setAttribute('class', 'support-ticket'); 
    ticketCard.setAttribute('id', 'ticketCard');

//Adds heading for customer name
const customerName = document.createElement('h3');
customerName.textContent = `Customer: ${name}`;

//Adds a description of the issue
const issueDescription = document.createElement('p');
issueDescription.textContent = `Issue: ${issue}`;

//Creates priority level label
const priorityLevel = document.createElement('label');
priorityLevel.textContent = `Priority: ${priority}`;
priorityLevel.classList.add('prioritylevel');

//Adds a resolve button
const resolveButton = document.createElement('button');
    resolveButton.textContent = 'Resolve';
    resolveButton.setAttribute('class', 'resolve-button');
}

