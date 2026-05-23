// 1. Find the button in our HTML using its ID
const themeButton = document.getElementById('theme-toggle');

// 2. Listen for the user to click the button
themeButton.addEventListener('click', function() {
    
    // 3. Toggle the "dark-theme" class on the <body> tag
    // .toggle() automatically adds the class if it's missing, or removes it if it's there!
    document.body.classList.toggle('dark-theme');
    
    // 4. Update the button text dynamically so it makes sense
    if (document.body.classList.contains('dark-theme')) {
        themeButton.textContent = "☀️ Light Mode";
    } else {
        themeButton.textContent = "🌙 Dark Mode";
    }
});