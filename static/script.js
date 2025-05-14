// Replace this with your actual Render backend URL
const API_URL = "https://uke.onrender.com";

// Example function to fetch user/key data
async function fetchUserData() {
    try {
        const response = await fetch(`${API_URL}/api/list-users`);
        const data = await response.json();

        if (!data || data.length === 0) {
            document.getElementById("output").innerText = "No users found.";
            return;
        }

        // Display each user
        const output = document.getElementById("output");
        output.innerHTML = "<h3>Users:</h3><ul>";
        data.forEach(user => {
            output.innerHTML += `<li><strong>${user.username}</strong> | Key: ${user.key} | HWID: ${user.hwid || "N/A"} | Expiration: ${user.expiry || "N/A"}</li>`;
        });
        output.innerHTML += "</ul>";
    } catch (err) {
        console.error("Error fetching user data:", err);
        document.getElementById("output").innerText = "Failed to fetch user data.";
    }
}

// Trigger on page load
window.onload = fetchUserData;
