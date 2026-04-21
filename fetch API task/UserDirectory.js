const app = document.getElementById('app');
const loader = document.getElementById('loading');
const errorDiv = document.getElementById('error');
const container = document.getElementById('users-container');

async function initUserDirectory() {
  try {
    // 1. Show loading, hide previous errors
    loader.classList.remove('hidden');
    errorDiv.classList.add('hidden');

    // 2. Fetch data in parallel for speed
    // Fetching two different sets of data that don't depend on each other
    const [usersResponse, postsResponse] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/users'),
      fetch('https://jsonplaceholder.typicode.com/posts')
    ]);

    if (!usersResponse.ok || !postsResponse.ok) throw new Error("Failed to load data");

    const users = await usersResponse.json();
    
    // 3. Render to the UI
    renderUsers(users);

  } catch (err) {
    // 4. Handle errors gracefully
    errorDiv.textContent = `Error: ${err.message}`;
    errorDiv.classList.remove('hidden');
  } finally {
    // 5. Always hide the loader
    loader.classList.add('hidden');
  }
}

function renderUsers(users) {
  container.innerHTML = users.map(user => `
    <div class="user-card">
      <h3>${user.name}</h3>
      <p>${user.email}</p>
    </div>
  `).join('');
}

initUserDirectory();

// The try/catch/finally pattern: This ensures your loader disappears whether the data loads successfully or fails.

// Parallelism: By using Promise.all, your app won't feel "laggy" while waiting for multiple network requests.

 //Conditional Rendering: Using classList to toggle your loading and error states keeps the UI clean.