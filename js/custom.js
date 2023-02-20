function toggleMenu() {
    const toggleMenu = document.querySelector('#toggleMenu'),
    navBar = document.querySelector('#navBar'),
    searchBar = document.querySelector('#searchBar');
    
    toggleMenu.classList.toggle("active");
    navBar.classList.toggle("active");
    searchBar.classList.toggle("active");
};
