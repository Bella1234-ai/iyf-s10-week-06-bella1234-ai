// Promise chain version:
function getDataWithPromises() {
    return getUserData(1)
        .then(user => getUserPosts(user.id))
        .then(posts => getPostComments(posts[0].id))
        .then(comments => comments);
}

// Async/await version (much cleaner!):
async function getDataWithAsync() {
    const user = await getUserData(1);
    const posts = await getUserPosts(user.id);
    const comments = await getPostComments(posts[0].id);
    return comments;
}

// Using:
getDataWithAsync().then(comments => console.log(comments));

// Or inside another async function:
async function main() {
    const comments = await getDataWithAsync();
    console.log(comments);
}

async function getDataSafely() {
  try {
    const user = await getUserData(1);
    // If getUserData fails, it skips the rest and jumps to the catch block
    return user;
  } catch (error) {
    console.error("Something went wrong:", error);
  }
}

// Here is why this pattern is so powerful:

    // The async Keyword: Placing async before a function declaration does two things. First, it allows you to use the await keyword inside that function. Second, it guarantees that the function will always return a Promise. (Notice how getDataWithAsync returns comments, but when you call it later, you still have to use .then() or await to get those comments out of the returned Promise).

    // The await Keyword: This is where the magic happens. When JavaScript hits an await, it essentially hits a pause button on that specific function. It waits right there until the Promise (like getUserData(1)) resolves. Once it resolves, it unpacks the value and assigns it to the user variable, then moves to the next line.

    // Top-to-Bottom Readability: By removing the .then() callbacks, you avoid the indentation drift of callback functions. If you are loading tasks from a database or updating filter statuses for a web-based To-Do List application, this syntax allows you to read your data-fetching logic cleanly from top to bottom, making it much easier to debug.

    