// Function to handle form submission
function handleDonate() {
    const itemName = document.querySelector('input[placeholder="Item Name"]').value;
    const quantity = document.querySelector('input[placeholder="Qty"]').value;
    const contact = document.querySelector('.contact-info input').value;
    const address = document.querySelector('.address-info input').value;

    // Create a donation object
    const donation = {
        itemName: itemName,
        quantity: quantity,
        contact: contact,
        address: address
    };

    // Get existing history or initialize an empty array
    const existingHistory = JSON.parse(localStorage.getItem('donationHistory')) || [];
    existingHistory.push(donation); // Add the new donation to the history

    // Save the updated history back to local storage
    localStorage.setItem('donationHistory', JSON.stringify(existingHistory));

    // Optionally, you can redirect to the history page after submission
    window.location.href = 'history.html';
}

// Attach the handleDonate function to the Donate button in donate_food.html
document.querySelector('.donate-btn').addEventListener('click', handleDonate);
