// Run multiple promises in parallel
const promise1 = getUserData(1);
const promise2 = getUserData(2);
const promise3 = getUserData(3);

Promise.all([promise1, promise2, promise3])
    .then(results => {
        console.log("All users:", results);
        // results is an array [user1, user2, user3]
    })
    .catch(error => {
        // If ANY promise fails, this runs
        console.error("One failed:", error);
    });

// Explanation:
//Promise.all is all about efficiency and doing things in parallel. When you have multiple independent asynchronous tasks (like fetching data for multiple users), you can start them all at once. Promise.all takes an array of promises and returns a new promise that resolves when all of the input promises have resolved, or rejects if any one of them rejects.
//When building web layouts and applications, you often need to fetch several independent pieces of data to render a page. Waiting for one to finish before starting the next wastes time. Promise.all solves this by letting you kick them all off at the same time.
// Parallel Execution: getUserData(1), getUserData(2), and getUserData(3) are all called immediately, one after the other. They don't wait for each other to finish before starting.

    // The Waiting Game: Promise.all() takes an array of these promises and bundles them into one giant "super promise." This new promise will only resolve when every single promise in the array has successfully resolved.

    // Ordered Results: Once all three are done, the .then() block runs. The results variable is an array containing the data returned by each promise. Crucially, the order of the results matches the order of the promises in the array [promise1, promise2, promise3], regardless of which one actually finished downloading first.

    // Fail-Fast Behavior: The .catch() block is strict. If even one of those three promises fails (e.g., user 2 doesn't exist), the entire Promise.all immediately rejects. It will jump straight to the .catch() block with that single error, entirely ignoring the successful results of the others.

// Because Promise.all has that strict "fail-fast" rule where one error ruins the whole batch, would you like to see how to use Promise.allSettled() to get the data from the successful promises even if one of them fails?
