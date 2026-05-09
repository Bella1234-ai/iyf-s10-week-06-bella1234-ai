// Old-style callbacks
function fetchData(callback) {
    setTimeout(() => {
        const data = { name: "John", age: 30 };
        callback(data);
    }, 1000);
}

fetchData(function(data) {
    console.log("Data received:", data);
});

// Build: Create a function that simulates loading user data
function loadUser(userId, callback) {
    // Simulate 1.5 second database lookup
    // Call callback with user object
}

// Use the function to load a user and log their name
// Bonus: Add error handling to the callback (e.g., if userId is not found)
// This pattern can lead to "callback hell" when you have multiple nested callbacks, making the code hard to read and maintain. In modern JavaScript, we often use Promises or async/await to handle asynchronous operations more cleanly.
// Would you like to try implementing the loadUser function together, or should we move on to Promises and async/await next?
// Would you like to try implementing the loadUser function together, or should we move on to Promises and async/await next?
