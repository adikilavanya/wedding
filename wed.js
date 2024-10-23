function display(sectionId) {
    // Hide all sections
    document.getElementById('sectionhome').style.display = 'none';
    document.getElementById('sectionopen').style.display = 'none';
    document.getElementById('sectionclose').style.display = 'none'; // Hide thank you card

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}

// Ensure home section is shown by default
window.onload = function() {
    document.getElementById('sectionhome').style.display = 'block';
    document.getElementById('sectionopen').style.display = 'none';
    document.getElementById('sectionclose').style.display = 'none'; // Hide thank you card by default
};

function closeCard() {
    display('sectionclose'); // Show thank you card when close button is clicked
}
