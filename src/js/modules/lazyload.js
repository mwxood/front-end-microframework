const lazyLoad = () => {
    const allImages = document.querySelectorAll('img');

    allImages.forEach(image => {
        image.classList.add('lozad');
    });

    const observer = lozad();
    observer.observe();
};

export default lazyLoad;