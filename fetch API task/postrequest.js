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

// This function demonstrates how to send data to a server using the POST method with fetch. You can adapt this pattern to create new tasks in your To-Do List app, sending the task details to your backend server for storage.
// The Asynchronous Evolution Recap

// The exercises you've completed establish a robust foundation for modern web development:
// 1. Managing Task Order

    // Sequential Chaining: Using .then() blocks ensures that tasks requiring specific data (like a userId) wait for the previous step to complete.

    // Parallel Efficiency: Promise.all allows multiple independent tasks to run simultaneously, significantly reducing total wait time compared to sequential execution.

    // Competitive Execution: Promise.race is used when only the first settling promise matters, such as implementation of network timeouts.

// 2. Streamlined Syntax

    // Async/Await: This syntax makes asynchronous code read like standard synchronous logic, improving maintainability over deeply nested chains.

    // Resilient Error Handling: Implementing try/catch blocks provides a centralized way to handle failures without crashing the application.