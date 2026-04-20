function getUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId > 0) {
                resolve({ id: userId, name: "John" });
            } else {
                reject("Invalid user ID");
            }
        }, 1000);
    });
}

//  1. Refactored Functions
function getUserPosts(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId > 0) {
                resolve([
                    { id: 1, title: "Post 1" },
                    { id: 2, title: "Post 2" }
                ]);
            }
            else {
                reject("Invalid user ID for posts");
            }
        }, 1000);
    });
}
// 2. Using Promises chaining to handle dependent asynchronous tasks
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
            
// 3. The "Final Boss": Async/
Await
async function displayUserData(userId) {
    try {
        const user = await getUserData(userId);
        console.log("User:", user);
        const posts = await getUserPosts(user.id);
        console.log("Posts:", posts);
        const comments = await getPostComments(posts[0].id);
        console.log("Comments:", comments);
    } catch (error) {
        console.error("Error:", error);
    } 
}

displayUserData(1);  