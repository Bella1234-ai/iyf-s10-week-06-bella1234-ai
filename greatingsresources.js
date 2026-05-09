async function createPost(title, body, userId) {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title,
            body,
            userId
        })
    });
    
    if (!response.ok) {
        throw new Error("Failed to create post");
    }
    
    return response.json();
}

// Use it
const newPost = await createPost(
    "My First Post",
    "This is the content of my post.",
    1
);
console.log("Created:", newPost);

// This function demonstrates how to send data to a server using fetch with the POST method. You can adapt this pattern to create new tasks in your To-Do List app, sending the task details to your backend server for storage.
// In your To-Do List app, you might have a form where users can enter a new task. When they submit the form, you can call a function like createPost (perhaps renamed to createTask) to send that data to your server.
// Example usage in a form submission handler
document.getElementById("task-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const title = document.getElementById("task-title").value;
    const description = document.getElementById("task-desc").value;
    try {
        const newTask = await createPost(title, description, 1);
        console.log("Task created:", newTask);
        // Optionally, update the UI to show the new task
    } catch (error) {
        console.error("Error creating task:", error);
        // Optionally, show an error message to the user
    }      
});

// This example shows how to handle form submission, prevent the default behavior, and use the createPost function to send the new task data to the server. You can also add error handling to inform the user if something goes wrong.
// The Path to Mastery: Core Concepts Covered

// 1. Sending Data with Fetch
// You've learned how to use fetch not just for getting data, but also for sending data to a server using the POST method. This is essential for creating new tasks in your To-Do List app.

// 2. Async/Await for Cleaner Code
// By using async/await, your code is more readable and easier to understand compared to chaining .then() calls. This makes it easier to maintain and debug.        
// 3. Error Handling
// You've seen how to check the response status and throw errors when something goes wrong. This allows you to handle errors gracefully in your app, providing a better user experience.    
// 4. Real-World Application
// The example of creating a new post can be directly applied to your To-Do List app for creating new tasks. This shows how the concepts you've learned can be used in practical scenarios.
// Would you like to see how to update or delete tasks using fetch as well?
