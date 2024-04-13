import '../sass/styles.scss';
import navigation from './modules/navigation';
import customInputNumber from './modules/customInputNumber';
import cart from './modules/cart';
import slider from './modules/slider';
import modal from './modules/modal';
import lazyLoad from './modules/lazyload';
import gallery from './modules/gallery';
import tabs from './modules/tabs';

document.addEventListener('DOMContentLoaded', function () {
    customInputNumber();
    navigation();
    cart();
    slider();
    modal();
    lazyLoad();
    gallery();

    tabs({
        tabNav: '.tabs-nav a',
        tabContent: '.tab-content'
    });
});





