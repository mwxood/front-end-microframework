const tabs = ({tabNav, tabContent}) => {
    const tabsNav = document.querySelectorAll(tabNav);
    const tabsContent = document.querySelectorAll(tabContent);
    
    const openTabs = (i) => {
        tabsNav[i].classList.add('active');
        tabsContent[i].classList.add('active-tab');
    };


    const hideTabs = () => {
        tabsContent.forEach(item => {
            item.classList.remove('active-tab');
        });

        tabsNav.forEach(item => {
            item.classList.remove('active');
        });
    };
    
    try {
        tabsNav.forEach((item, i) => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                hideTabs();

                openTabs(i);
            });
        });
    } catch (e) {}
};

export default tabs;