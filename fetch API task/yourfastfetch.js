// Basic fetch
fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => {
        console.log("Response object:", response);
        console.log("Status:", response.status);
        console.log("OK:", response.ok);
        return response.json();  // Parse JSON
    })
    .then(data => {
        console.log("User data:", data);
    })
    .catch(error => {
        console.error("Fetch error:", error);
    });

// Fetch with custom headers
fetch("https://jsonplaceholder.typicode.com/users/1", {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer your-token-here"
    }
})
    .then(response => response.json())  
    .then(data => {
        console.log("User data with headers:", data);
    })
    .catch(error => {
        console.error("Fetch error with headers:", error);
    }); 
// How this helps your To-Do App

// Since you are building a web-based To-Do List, you can eventually use these exact patterns to:

    // Fetch a list of tasks from a server when the page loads.

    // Chain a request to "Update Task" only after the "Authentication" check is successful.

    // Catch errors to show the user a message like "Could not save task, please check your internet connection."

// Would you like to try converting that "First Fetch" code into the cleaner async/await syntax we looked at earlier?