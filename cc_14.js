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

//Task 4 Implementing Ticket Resolution with Event Bubbling

//Adds an event listener to the resolve button
resolveButton.addEventListener("click", function(event) {
    //Prevents bubbling
    event.stopPropagation(); 
    //When resolved button is clicked it will remove the ticket
    ticketContainer.removeChild(ticketCard); 
});

//Task 5: Inline editing of Support Tickets

//Creates function to enable edits
function enableEditing(ticket, nameHeading, issueParagraph, priorityLabel, editButton) {
    
    //Prepopulates the input fields for name, issue and priority label 
    const nameInput = document.createElement("input");
    nameInput.type = "text"; 
    nameInput.value = nameHeading.textContent;  

    const issueInput = document.createElement("input");
    issueInput.type = "text"; 
    issueInput.value = issueParagraph.textContent; 

    const priorityInput = document.createElement("input");
    priorityInput.type = "text"; 
    priorityInput.value = priorityLabel.textContent; 

    //Adds a save button for any new edits  
    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.addEventListener("click", () => {
        //Updates input to new values 
        nameHeading.textContent = nameInput.value;
        issueParagraph.textContent = issueInput.value;
        priorityLabel.textContent = priorityInput.value;

        //Restore original elements after save button is clicked 
        ticket.replaceChild(nameHeading, nameInput);
        ticket.replaceChild(issueParagraph, issueInput);
        ticket.replaceChild(priorityLabel, priorityInput);
        ticket.replaceChild(editButton, saveButton);
    });

    //Any static text is replaced with the inputs 
    ticket.replaceChild(nameInput, nameHeading);
    ticket.replaceChild(issueInput, issueParagraph);
    ticket.replaceChild( priorityInput, priorityLabel);
    ticket.replaceChild(saveButton, editButton);
}

//End of attempt at Coding Challenge #14
