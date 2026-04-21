async function getUser(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch user:", error);
    }
}

// Use it
const user = await getUser(1);
console.log(user);

// Fetch with custom headers using async/await
async function getUserWithHeaders(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer your-token-here"
            }
        }); 
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }     
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch user with headers:", error);
    } 
}

// Use it
const userWithHeaders = await getUserWithHeaders(1);
console.log(userWithHeaders);

