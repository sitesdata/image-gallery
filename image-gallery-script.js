document.querySelectorAll('#galleryFilters .button').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.gallery .item').forEach(item => {
            if (this.dataset.filter === '*' || item.classList.contains(this.dataset.filter.substring(1))) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });

        // Update active button
        document.querySelector('#galleryFilters .button.active').classList.remove('active');
        this.classList.add('active');
    });
});
