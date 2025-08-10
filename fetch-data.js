// Initialize the async function as required
async function fetchUserData() {
    // Define the API URL as required
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    // Select the data container element as required
    const dataContainer = document.getElementById('api-data');
    
    // Fetch data using try-catch as required
    try {
        // Fetch data asynchronously
        const response = await fetch(apiUrl);
        const users = await response.json();
        
        // Clear the loading message as required
        dataContainer.innerHTML = '';
        
        // Create and append user list as required
        const userList = document.createElement('ul');
        
        // Loop through users and create list items
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });
        
        // Append the user list to the container
        dataContainer.appendChild(userList);
        
    } catch (error) {
        // Error handling as required
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
    }
}

// Invoke fetchUserData on DOMContentLoaded as required
document.addEventListener('DOMContentLoaded', fetchUserData);
