// This is BAD - "Callback Hell" or "Pyramid of Doom"
function getUserData(userId, callback) {
    setTimeout(() => {
        callback({ id: userId, name: "John" });
    }, 1000);
}

function getUserPosts(userId, callback) {
    setTimeout(() => {
        callback([
            { id: 1, title: "Post 1" },
            { id: 2, title: "Post 2" }
        ]);
    }, 1000);
}

function getPostComments(postId, callback) {
    setTimeout(() => {
        callback([
            { id: 1, text: "Great post!" },
            { id: 2, text: "Thanks for sharing" }
        ]);
    }, 1000);
}

// The nightmare:
getUserData(1, function(user) {
    console.log("User:", user);
    getUserPosts(user.id, function(posts) {
        console.log("Posts:", posts);
        getPostComments(posts[0].id, function(comments) {
            console.log("Comments:", comments);
            // Imagine 3 more levels deep...
        });
    });
});

// The Problem: Dependent Asynchronous Tasks

//In real-world web development, you frequently have to wait for one piece of data before you can fetch the next. In the image you shared, there is a clear chain of dependency:

    // 1.You need the user object to get the user.id.

    // 2. You need the user.id to fetch their posts.

    // 3. You need a post.id (like posts[0].id) to fetch the comments for that specific post.

// Because these tasks take time (simulated here by setTimeout), you can't just write them sequentially on consecutive lines. You must tell JavaScript, "Go fetch the user, and when you are done, run this callback function."

// This creates a situation where each asynchronous call is nested inside the callback of the previous one, leading to deeply nested code that is hard to read and maintain. This is often referred to as "callback hell" or the "pyramid of doom" because of the way the code visually indents further and further to the right with each level of nesting.

// In modern JavaScript, we have better ways to handle this kind of asynchronous flow, such as Promises and async/await, which can help flatten the structure and make it more readable. Would you like to see how we can refactor this code using Promises or async/await?
