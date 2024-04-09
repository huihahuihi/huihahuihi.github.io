document.addEventListener('DOMContentLoaded', (event) => {
    const toggle = document.getElementById('dark-mode-toggle');
    const lightModeIcon = document.getElementById('light-mode-icon');
    const darkModeIcon = document.getElementById('dark-mode-icon');
    const postsLink = document.getElementById('postsLink'); // The posts navigation link
    const allPostsButton = document.getElementById('allPostsButton'); // The All Posts button
    const mainContent = document.querySelector('main'); // The main content area of your page

    // Function to switch the icons for dark mode
    function updateIcon() {
        if (document.body.classList.contains('dark-mode')) {
            lightModeIcon.style.display = 'block';
            darkModeIcon.style.display = 'none';
        } else {
            lightModeIcon.style.display = 'none';
            darkModeIcon.style.display = 'block';
        }
    }

    // Function to dynamically load the recent posts content
    function loadPosts() {
        // Logic to fetch and display recent posts
        // This could be a fetch request or another form of AJAX call
        // Example:
        // fetch('recent-posts.html')
        //     .then(response => response.text())
        //     .then(html => {
        //         mainContent.innerHTML = html;
        //     })
        //     .catch(error => console.error('Error loading recent posts:', error));
    }

    // Function to dynamically load all posts content
    function loadAllPosts() {
        // Logic to fetch and display all posts
        // This could be a fetch request or another form of AJAX call
        // Example:
        // fetch('all-posts.html')
        //     .then(response => response.text())
        //     .then(html => {
        //         mainContent.innerHTML = html;
        //     })
        //     .catch(error => console.error('Error loading all posts:', error));
    }

    // Event listener for the dark mode toggle
    toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        updateIcon(); // Update the icon after toggling dark mode
    });

    // Event listener for the posts navigation link
    postsLink.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent the default link behavior
        loadPosts(); // Call the function to load recent posts
    });

    // Event listener for the All Posts button
    allPostsButton.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent the default button behavior
        loadAllPosts(); // Call the function to load all posts
    });

    updateIcon(); // Update the icon on initial load based on the mode
});
