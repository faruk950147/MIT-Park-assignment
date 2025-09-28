// Mobile menu toggle
    const toggleBtn = document.querySelector('.toggle_btn');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeBtn = document.querySelector('.mobiles_content .close_btn');

    toggleBtn.addEventListener('click', () => {
      mobileMenu.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
    });