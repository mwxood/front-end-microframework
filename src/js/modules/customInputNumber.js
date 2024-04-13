const customInputNumber = () => {
    const customNumberInput = document.querySelectorAll('.custom-number');
    const minusBtn = document.querySelectorAll('.minus-btn');
    const plusBtn = document.querySelectorAll('.plus-btn');

    try {
        minusBtn.forEach((item, i) => {
            item.addEventListener('click', () => {
                if(customNumberInput[i].value > 1) {
                    customNumberInput[i].value--;
                }
            });
        });

        plusBtn.forEach((item, i) => {
            item.addEventListener('click', () => {
                if(customNumberInput[i].value >= 1) {
                    customNumberInput[i].value++;
                }
            });
        });
    } catch(e) {}
};

export default customInputNumber;