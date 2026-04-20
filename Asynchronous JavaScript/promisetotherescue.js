// Creating a Promise
const myPromise = new Promise((resolve, reject) => {
    const success = true;
    
    setTimeout(() => {
        if (success) {
            resolve("It worked!");
        } else {
            reject("Something went wrong");
        }
    }, 1000);
});

// Using a Promise
myPromise
    .then(result => {
        console.log("Success:", result);
    })
    .catch(error => {
        console.log("Error:", error);
    });

// Think of a Promise in JavaScript exactly like placing an order at a busy restaurant. You pay and receive a receipt with an order number. You don't have your food yet, but you have a promise that you will get it eventually. The order is currently Pending. Eventually, the kitchen will either call your number with your food (Resolved/Fulfilled), or they will call your number to tell you they ran out of ingredients (Rejected).
// Explanation:
// 1. We create a new Promise by calling the Promise constructor and passing it a function (the executor) that takes two parameters: resolve and reject. These are functions that we will call to indicate whether the asynchronous operation succeeded or failed.
// 2. Inside the executor function, we simulate an asynchronous operation using setTimeout. After 1 second, we check if the operation was successful (in this case, we just use a boolean variable).
// 3. If the operation was successful, we call resolve with a success message. If it failed, we call reject with an error message.
// 4. We then use the .then() method to specify what should happen when the Promise is resolved (success) and the .catch() method to specify what should happen if the Promise is rejected (error).
// This pattern allows us to handle asynchronous operations in a more readable and maintainable way compared to traditional callbacks, especially when dealing with multiple asynchronous tasks that depend on each other. Would you like to see how we can refactor the callback hell example using Promises next?
