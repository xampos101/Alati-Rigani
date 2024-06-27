document.getElementById('greek-flag').addEventListener('click', function() {
    document.getElementById('menu-title').innerText = 'Μενού';
    document.getElementById('menu-subtitle').innerText = 'Αλάτι & Ρίγανη';
    document.getElementById('salads-title').innerText = 'Σαλάτες';
    document.getElementById('appetizers-title').innerText = 'Ορεκτικά';
    document.getElementById('main-dishes-title').innerText = 'Κυρίως Πιάτα';
    // Change other menu items to Greek
});

document.getElementById('english-flag').addEventListener('click', function() {
    document.getElementById('menu-title').innerText = 'Menu';
    document.getElementById('menu-subtitle').innerText = 'Salt & Oregano';
    document.getElementById('salads-title').innerText = 'Salads';
    document.getElementById('appetizers-title').innerText = 'Appetizers';
    document.getElementById('main-dishes-title').innerText = 'Main Dishes';
    // Change other menu items to English
});
