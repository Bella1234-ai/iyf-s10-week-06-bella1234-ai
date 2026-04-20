async function fetchUserData(userId) {
    try {
        const user = await getUserData(userId);
        const posts = await getUserPosts(user.id);
        return { user, posts };
    } catch (error) {
        console.error("Failed to fetch:", error);
        throw error;  // Re-throw if needed
    }
}

// Explanation:
// 1. The async Keyword: By declaring fetchUserData as an async function, we can use the await keyword inside it. This means that fetchUserData will always return a Promise, and we can handle its result with .then() or await when we call it.
// 2. The await Keyword: When we call await getUserData(userId), JavaScript will pause the execution of fetchUserData until that Promise resolves. If it resolves successfully, the resolved value (the user data) is assigned to the user variable. If it rejects, the error is caught by the catch block.
// 3. Error Handling: The try/catch block allows us to handle any errors that occur during the asynchronous operations. If either getUserData or getUserPosts fails, the error will be caught and logged, preventing unhandled promise rejections and allowing for graceful error handling in the UI or further up the call stack.
// 4. Returning Data: If both asynchronous calls succeed, we return an object containing both the user and their posts. This return value will be wrapped in a Promise due to the async function, so when you call fetchUserData, you can use .then() to access the user and posts or await it in another async function.

// How Try/Catch Secures Your Code

// When you chain .then() blocks, you usually rely on a single .catch() at the end to catch any errors that happen anywhere in the chain. try...catch brings that same safety net into the synchronous-looking async/await world.

// Here is a breakdown of the mechanics:

    // The try Block (The Happy Path): JavaScript attempts to execute the code inside this block line by line. It will pause at await getUserData(userId). If that succeeds, it moves to await getUserPosts(user.id). If both succeed, it safely returns the combined object.

    // The catch Block (The Safety Net): If any await statement inside the try block fails (for instance, if the network drops or the database rejects the query), JavaScript immediately aborts the rest of the try block. Execution jumps straight into the catch block, passing the error details into the error variable.

    // The throw error; Statement (Passing the Buck): This is a critical detail. By logging the error with console.error(), you record it for debugging. However, if you don't throw error;, the fetchUserData function will actually "swallow" the error and return a resolved promise (likely yielding undefined). Re-throwing the error ensures that wherever you called fetchUserData() also knows an error occurred.

// Practical Application

// This pattern is highly effective when building features where dependent data must load together. For example, if you are building an interface that requires loading a user's profile and their customized task filtering categories simultaneously, wrapping those awaits in a try/catch ensures that if the server fails to load the filters, your application doesn't crash entirely. Instead, you can catch the error, log it, and gracefully display a fallback UI or an error message to the user.