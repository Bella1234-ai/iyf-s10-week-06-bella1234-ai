// Synchronous - blocks until complete
console.log("1 - Start");
console.log("2 - Middle");
console.log("3 - End");
// Output: 1, 2, 3 (in order)

// Asynchronous - doesn't block
console.log("1 - Start");

setTimeout(() => {
    console.log("2 - This is delayed");
}, 2000);

console.log("3 - End");
// Output: 1, 3, then 2 (after 2 seconds)

// 1. Synchronous Execution (Blocking)

//In the first half of the exercise, JavaScript executes the code top-to-bottom, line-by-line.

   // It logs "1 - Start".

   // It logs "2 - Middle".

   // It logs "3 - End".

// Because this is synchronous, each line must finish executing completely before the engine moves on to the next one. If line 2 was a complex mathematical calculation that took 5 seconds to run, line 3 would be "blocked" and forced to wait.

// 2. Asynchronous Execution (Non-Blocking)

// In the second half, things change because of the setTimeout function. JavaScript still reads top-to-bottom, but it delegates the timer so it doesn't get stuck waiting.

    // It logs "1 - Start".

    // It encounters setTimeout. It essentially tells the browser, "Set a timer for 2000 milliseconds (2 seconds), and when it's done, run this inner function."

    // Crucially, JavaScript does not wait for those 2 seconds. It immediately moves on to the very next line of code.

    // It logs "3 - End".

    // Finally, two seconds later, the timer finishes, and the delayed function runs, logging "2 - This is delayed".

// This asynchronous (non-blocking) behavior is incredibly important in web development. It's the reason a user can still scroll a webpage or click buttons while a large dataset is being fetched from a server in the background without the entire browser freezing up.

// Would you like to try writing a quick piece of code together in the terminal to test out how asynchronous functions behave in practice?