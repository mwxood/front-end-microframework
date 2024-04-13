const gallery = () => {
    const allImages = document.querySelectorAll('.gallery-img');
    const modal = document.createElement('div');
    const modalImg = document.createElement('img');
    const closeBtn = document.createElement('span');
    const arrows = document.createElement('div');
    arrows.classList.add('gallery-arrow-holder');
    const leftArrow = document.createElement('i');
    const rightArrow = document.createElement('i');
    leftArrow.classList.add('icon-keyboard_arrow_left');
    rightArrow.classList.add('icon-keyboard_arrow_right');
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    closeBtn.classList.add('close-gallery', 'icon-clear');
    modal.classList.add('modalGallery');
    modal.prepend(closeBtn);
    modal.append(modalImg);
    arrows.append(leftArrow);
    arrows.prepend(rightArrow);
    modal.append(arrows);
    let slideIndex = 0;

    const addModal = (src) => {
        document.body.append(modal);
        modalImg.setAttribute('src', src);
        document.body.append(overlay);
        document.body.classList.add('modal-active');
    };

    const closeGallery = () => {
        modal.remove();
        overlay.remove();
        document.body.classList.remove('modal-active');
    };

    const galleryEvent = () => {
        allImages.forEach((image, index) => {
            image.addEventListener('click', function(e) {
                e.preventDefault();
                addModal(image.getAttribute('href'));

            });
        });

        if(!closeBtn && !overlay) {
            return;
        }

        function removeLetters(element) {
            return +element.replace(/\D/g, '');
        }

        closeBtn.addEventListener('click', closeGallery);
        overlay.addEventListener('click', closeGallery);
    };



    galleryEvent();
    if(!leftArrow || !rightArrow) {
        return;
    }

    const gallerySlider = () => {
        leftArrow.addEventListener('click', () => {
            if(slideIndex === 0) {
                slideIndex = allImages.length;
            } else {
                slideIndex --;
            }

            if(typeof allImages[slideIndex] === 'undefined') {
                addModal(allImages[allImages.length -1].getAttribute('href'));

            } else {
                addModal(allImages[slideIndex].getAttribute('href'));
            }
        });

        rightArrow.addEventListener('click', () => {
            if(slideIndex === allImages.length) {
                slideIndex = 0;
            } else {
                slideIndex ++;
            }
            if(typeof allImages[slideIndex] === 'undefined') {
                addModal(allImages[1].getAttribute('href'));
            } else {
                addModal(allImages[slideIndex].getAttribute('href'));
            }

        });
    };


    gallerySlider();
};

export default gallery;