// First to complete wins
const fast = new Promise(resolve => setTimeout(() => resolve("Fast!"), 100));
const slow = new Promise(resolve => setTimeout(() => resolve("Slow!"), 500));

Promise.race([fast, slow])
    .then(result => {
        console.log("Winner:", result);  // "Fast!"
    });

// Explanation:
// The logic for Exercise 3 introduces a competitive way to handle asynchronous tasks. Unlike Promise.all, which waits for everyone to finish, Promise.race is only interested in the speed demon of the group. When you call

// How Promise.race Works

    // The Sprint: You pass an array of promises to Promise.race. As soon as one promise in the array settles (either resolves or rejects), the resulting promise settles with that same outcome.

    // The Losers: The other promises continue to run in the background until they finish, but their results are ignored by the race.

    // Common Use Case: A very practical use for this in web development is creating a timeout for network requests. You "race" your data fetch against a promise that rejects after 5 seconds; if the data takes too long, the timeout wins and you can show an error to the user.
  
    // In this example, we have two promises: one that resolves after 100 milliseconds ("Fast!") and another that resolves after 500 milliseconds ("Slow!"). When we call
async function displayUsers() {
  try {
    // 1. Fetch data for 3 users simultaneously
    const userPromises = [
      fetch('https://jsonplaceholder.typicode.com/users/1').then(res => res.json()),
      fetch('https://jsonplaceholder.typicode.com/users/2').then(res => res.json()),
      fetch('https://jsonplaceholder.typicode.com/users/3').then(res => res.json())
    ];

    const users = await Promise.all(userPromises);

    // 2. Display them all at once
    console.log("Rendering all users to the UI...");
    users.forEach(user => {
      console.log(`User: ${user.name} | Email: ${user.email}`);
      // Here you would typically append this to your HTML DOM
    });

  } catch (error) {
    console.error("Failed to load users:", error);
  }
}

displayUsers();