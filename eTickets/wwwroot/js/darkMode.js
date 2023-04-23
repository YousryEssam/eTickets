$(document).ready(function () {
    // Check if the user has set the dark mode preference
    var darkMode = localStorage.getItem('darkMode');

    // If dark mode is enabled, add the dark-mode class to the body element
    if (darkMode === 'enabled') {
        $('body').addClass('dark-mode');
    }

    // Handle the click event for the dark mode button
    $('#dark-mode-btn').click(function () {
        // Toggle the dark-mode class on the body element
        $('body').toggleClass('dark-mode');

        // Update the dark mode preference in local storage
        if ($('body').hasClass('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });
});