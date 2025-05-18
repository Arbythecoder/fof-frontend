document.addEventListener('DOMContentLoaded', function() {
    // Favorite recipe cards
    const recipeCards = document.querySelectorAll('.recipe-card');
    const favoritesGrid = document.querySelector('.favorites-grid');
    
    // Filter buttons functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            // Filter recipe cards
            recipeCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
            
            // Show empty state if no cards are visible
            const visibleCards = document.querySelectorAll('.recipe-card[style="display: block;"]');
            const emptyState = document.querySelector('.empty-state');
            
            if (visibleCards.length === 0 && filterValue !== 'all') {
                emptyState.style.display = 'flex';
            } else {
                emptyState.style.display = 'none';
            }
        });
    });
    
    // Sort functionality
    const sortSelect = document.getElementById('sort');
    sortSelect.addEventListener('change', function() {
        const sortValue = this.value;
        const cardsArray = Array.from(recipeCards);
        
        cardsArray.sort((a, b) => {
            if (sortValue === 'recent') {
                return new Date(b.getAttribute('data-date-added')) - new Date(a.getAttribute('data-date-added'));
            } else if (sortValue === 'oldest') {
                return new Date(a.getAttribute('data-date-added')) - new Date(b.getAttribute('data-date-added'));
            } else if (sortValue === 'name') {
                return a.querySelector('h3').textContent.localeCompare(b.querySelector('h3').textContent);
            } else if (sortValue === 'rating') {
                return parseFloat(b.getAttribute('data-rating')) - parseFloat(a.getAttribute('data-rating'));
            } else if (sortValue === 'prep-time') {
                // Assuming prep time is in minutes in a data attribute
                return parseInt(a.getAttribute('data-prep-time')) - parseInt(b.getAttribute('data-prep-time'));
            }
            return 0;
        });
        
        // Re-append sorted cards
        cardsArray.forEach(card => {
            favoritesGrid.appendChild(card);
        });
    });
    
    // Remove from favorites functionality
    const removeButtons = document.querySelectorAll('.remove-btn');
    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.recipe-card');
            card.style.display = 'none';
            
            // In a real app, you would also make an API call to remove from favorites
            
            // Show empty state if no cards left
            const visibleCards = document.querySelectorAll('.recipe-card[style="display: block;"], .recipe-card:not([style])');
            const emptyState = document.querySelector('.empty-state');
            
            if (visibleCards.length === 0) {
                emptyState.style.display = 'flex';
            }
        });
    });
    
    // Toggle favorite button
    const favoriteButtons = document.querySelectorAll('.favorite-btn');
    favoriteButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('active');
            
            // In a real app, you would make an API call to update favorites
        });
    });
    
    // Search functionality
    const searchInput = document.querySelector('.search-bar input');
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        
        recipeCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const desc = card.querySelector('.recipe-desc').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || desc.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});