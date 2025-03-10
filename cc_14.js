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

//Task 3 Converting NodeLists to Arrays for Bulk Updates

//Adds function that will highlight high priority tickets
function highlightHighPriority() {
    const highPriorityTickets = document.querySelectorAll("VeryHigh"); 
    // Convert NodeList to an array
    const ticketsArray = Array.from(highPriorityTickets); 

    ticketsArray.forEach(ticket => {
        //Changes the colors of the border and background
        ticket.parentElement.style.border = "2px red"; 
        ticket.parentElement.style.backgroundColor = "Grey"; 
    });
}

//When a ticket is added the function will be called back
document.getElementById("addTicketButton").addEventListener("click", highlightHighPriority);


