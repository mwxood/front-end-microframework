const cart = () => {
    const vaucherCheckbox = document.querySelector('.voucher-check');
    const inputVaucher = document.querySelector('.voucher-input');
    const basketBtn = document.querySelector('.basket-btn');
    const cartHolder = document.querySelector('.cart-holder');


    try {
        vaucherCheckbox.addEventListener('change', (e) => {
            if(e.target.checked) {
                inputVaucher.classList.add('show-voucher');
            } else {
                inputVaucher.classList.remove('show-voucher');
            }
        });

        basketBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.target.classList.toggle('active-btn');
            cartHolder.classList.toggle('active-cart');
        });
    } catch(e) {}
};

export default cart;