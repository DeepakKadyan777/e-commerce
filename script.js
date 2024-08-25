var loader = document.getElementById("preloader");

window.addEventListener("load", function() {
    setTimeout(function() {
        loader.style.display = "none";
    }, 1000); // 2000 milliseconds = 2 seconds
});
document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.getElementById('dropdown');
    const options = document.getElementById('options');
    const selectedOption = document.querySelector('.selected-option');
    const optionElements = document.querySelectorAll('.option');
    
    // Initial setup: ensure options are hidden
    options.style.display = 'none';

    // Toggle dropdown visibility when clicking on the dropdown
    dropdown.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent click event from propagating to document
        const isCurrentlyVisible = options.style.display === 'block';
        options.style.display = isCurrentlyVisible ? 'none' : 'block';
    });

    // Handle option selection
    optionElements.forEach(option => {
        option.addEventListener('click', () => {
            selectedOption.textContent = option.textContent;
            options.style.display = 'none'; // Close the dropdown after selection
        });
    });

    // Hide options when clicking outside of the dropdown
    document.addEventListener('click', (event) => {
        if (!dropdown.contains(event.target)) {
            options.style.display = 'none';
        }
    });
});
