const navigation = () => {
    let isMobile = false;

    const hasSubNav = () => {
        const navigationList = document.querySelectorAll('.top-nav li');

        navigationList.forEach(item => {
            if(item.children[1]) {
                item.classList.add('sub-nav');
            }
        });
    }

    const mobileNavigation = () => {
        const navTrigger = document.querySelector('.mobile-btn-trigger');

        navTrigger.addEventListener('click', () => {
           document.body.classList.toggle('nav-active');
        });
    }

    const isActiveMobile = () => {
        if(window.innerWidth <= 1024) {
            isMobile = true;
        } else {
            isMobile = false;
        }
    }

    const resize = () => {
        let resizeTimer;
        window.addEventListener('resize', () =>{
            clearTimeout(resizeTimer);

            resizeTimer = setTimeout(function() {
                isActiveMobile();
             }, 250);
        });
    }

    const mobileNav = () => {
        const navigation = document.querySelectorAll('.top-nav li');

        navigation.forEach(item => {
            let list = document.createElement('li');
            let backButton = `<li class="back-btn"><i class=""></i></li>`;
           item.addEventListener('click', function() {
               if(item.children[1]) {
                   item.classList.toggle('active-sub-nav');

               }

           });
        });
    }

    mobileNav();
    resize();
    mobileNavigation();
    hasSubNav();
}

export default navigation;