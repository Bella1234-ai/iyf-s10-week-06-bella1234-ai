console.log("A");

setTimeout(() => console.log("B"), 0);

console.log("C");

setTimeout(() => console.log("D"), 100);

console.log("E");

// What order will these print?
// Output: A, C, E, B, D

// Explanation:

// 1. "A" is logged immediately.
// 2. "C" is logged immediately.
// 3. "E" is logged immediately.
// 4. "B" is logged after the next tick of the event loop (0 ms delay).
// 5. "D" is logged after 100 ms.
// This demonstrates that even with a 0 ms delay, the setTimeout callback is still asynchronous and will execute after the current call stack is cleared.
// This is a common point of confusion for many developers new to JavaScript's asynchronous behavior.
// Would you like to try modifying the code to see how changing the delays affects the output order?
