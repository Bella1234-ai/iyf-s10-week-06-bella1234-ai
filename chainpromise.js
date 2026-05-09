// After refactoring to Promises:
getUserData(1)
    .then(user => {
        console.log("User:", user);
        return getUserPosts(user.id);
    })
    .then(posts => {
        console.log("Posts:", posts);
        return getPostComments(posts[0].id);
    })
    .then(comments => {
        console.log("Comments:", comments);
    })
    .catch(error => {
        console.error("Error:", error);
    });

// Explanation:

// 1. The Initial Call: getUserData(1) initiates an asynchronous task. It immediately returns a Promise that represents the eventual completion of fetching that user's data.
// 2. The First .then(): Once the user data is successfully retrieved (the promise resolves), this block executes. Crucially, it returns getUserPosts(user.id). Because this returns a new Promise, it passes control to the next .then() only after the posts are fetched.
// 3. The Second .then(): This block waits for the getUserPosts promise to resolve. Once it does, it receives the posts array. It logs the posts and then returns another new Promise: getPostComments(posts[0].id), which fetches comments for the very first post in that array.
// 4. The Third .then(): This waits for the comments to load and finally logs them to the console. Because it doesn't return anything, the chain effectively ends here.
// 5. The .catch() Block: This acts as a centralized error handler. If any of the promises in the chain fail (e.g., the network goes down, or an API returns an error), execution immediately skips all remaining .then() blocks and jumps straight to this .catch() block to log the error.
// This pattern allows us to handle asynchronous operations in a more readable and maintainable way compared to traditional callbacks, especially when dealing with multiple asynchronous tasks that depend on each other. Would you like to see how we can refactor the callback hell example using Promises next?