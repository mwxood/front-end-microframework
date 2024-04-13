const slider = () => {
    const slider = document.querySelector('#top-slider');
    const sliderPagination = document.querySelectorAll('.pagination .pagination-btn');
    try {
        let splide = new Splide(slider, {
            type         : 'fade',
            perPage      : 1,
            autoplay     : true,
            interval     : 15000,
            resetProgress: false,
            navigation: true,
            lazy: true,
            classes: {
                pagination: 'pagination',
                page      : 'splide__pagination__page pagination-btn', // each button
            },

        });

        splide.on('pagination:updated', function(data) {
            let pathern = /\d+/g;
            data.items.map((item, i) => {
                let numbers = item.button.ariaLabel.match(pathern).join('');
                item.button.textContent = (numbers < 9 ? 0 + numbers : numbers);
            });
        }).mount();
    } catch(e) {}
}; 


export default slider;
