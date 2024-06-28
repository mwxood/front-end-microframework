import '../sass/styles.scss';

(function(){
    const year = document.getElementById('year');
    year.innerHTML = new Date().getFullYear();
})();
