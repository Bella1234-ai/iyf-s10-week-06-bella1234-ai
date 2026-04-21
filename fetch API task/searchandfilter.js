let allUsers = [];

async function init() {
    allUsers = await fetchUsers();
    displayUsers(allUsers);
    
    // Set up search
    const searchInput = document.getElementById("search");
    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase();
        const filtered = allUsers.filter(user => 
            user.name.toLowerCase().includes(query) ||
            user.email.toLowerCase().includes(query)
        );
        displayUsers(filtered);
    });
}
