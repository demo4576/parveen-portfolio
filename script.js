document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const floatingMenu = document.querySelector('.floating-menu');
    
    if (menuToggle && floatingMenu) {
        const icon = menuToggle.querySelector('svg');

        menuToggle.addEventListener('click', () => {
            floatingMenu.classList.toggle('is-active');
            
            // Switch between hamburger and X icon
            if (floatingMenu.classList.contains('is-active')) {
                icon.innerHTML = '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>';
            } else {
                icon.innerHTML = '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>';
            }
        });
    }
});