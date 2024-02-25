// Sample data for guitar inventory
const guitarInventory = [
    { id: 1, serialNumber: '12345', price: 1500, builder: 'Gibson', 
    model: 'Les Paul', type: 'Electric', backwood: 'Mahogany', topwood: 'Maple' }, 
    { id: 2, serialNumber: '13345', price: 1400, builder: 'Dibson', 
    model: 'Jes Paul', type: 'Electric', backwood: 'Mahogany', topwood: 'Maple' }
    // Add more sample data as needed
  ];
  
  function showAddForm() {
    const addForm = `
      <label for="guitarName">Guitar Name:</label>
      <input type="text" id="guitarName" required>
  
      <label for="guitarType">Guitar Type:</label>
      <input type="text" id="guitarType" required>
  
      <label for="quantity">Quantity:</label>
      <input type="number" id="quantity" required>
  
      <button onclick="addGuitar()">Add to Inventory</button>
    `;
  
    document.getElementById('content').innerHTML = addForm;
  }
  
  function addGuitar() {
    // Get values from form fields
    const guitarName = document.getElementById('guitarName').value;
    const guitarType = document.getElementById('guitarType').value;
    const quantity = document.getElementById('quantity').value;

    // Check if any of the fields is empty
    if (!guitarName || !guitarType || !quantity) {
        alert("Please enter a value for all fields.");
        return;
    }

    // Create an object with the data
    const newGuitar = { name: guitarName, type: guitarType, quantity: quantity };

    // Send data to the backend API
    fetch('http://localhost:8081/inventory/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newGuitar),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Handle success: display a pop-up message
        alert("The guitar was added to the system.");
    })
    .catch(error => {
        // Handle errors: display a pop-up message
        alert("Something went wrong. Please try again or contact the customer support team.");
        console.error('Error:', error);
    });
}
  
  function showAddPage() {
    const addPageContent = `
      <div style="display: flex;">
        <div style="width: 50%; padding-right: 20px;">
          <label for="serialNumber">Serial Number:</label>
          <input type="text" id="serialNumber" required>
  
          <label for="price">Price:</label>
          <input type="number" id="price" required>
  
          <label for="builder">Builder:</label>
          <input type="text" id="builder" required>
  
          <label for="model">Model:</label>
          <input type="text" id="model" required>
  
          <label for="type">Type:</label>
          <input type="text" id="type" required>
  
          <label for="backwood">Backwood:</label>
          <input type="text" id="backwood" required>
  
          <label for="topwood">Topwood:</label>
          <input type="text" id="topwood" required>
        </div>
  
        <div style="width: 50%;">
          <!-- Empty space for future content in the second column -->
        </div>
      </div>
  
      <button onclick="searchGuitars()">Search</button>
    `;
  
    document.getElementById('content').innerHTML = addPageContent;
  }
  
  function searchGuitars() {
    // Retrieve user inputs for search
    const serialNumber = document.getElementById('serialNumber').value;
    const price = document.getElementById('price').value;
    const builder = document.getElementById('builder').value;
    const model = document.getElementById('model').value;
    const type = document.getElementById('type').value;
    const backwood = document.getElementById('backwood').value;
    const topwood = document.getElementById('topwood').value;
  
    // For now, we'll just log the search criteria to the console
    console.log("Search Criteria:", { serialNumber, price, builder, model, type, backwood, topwood });
  }