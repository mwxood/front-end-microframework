const navigation = () => {
    const navTrigger = document.querySelector('.menu-btn');
   
    try {
        navTrigger.addEventListener('click', () => {
            document.body.classList.toggle('nav-active');
         });
    } catch(e) {}
};

export default navigation;