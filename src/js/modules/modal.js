const modal = () => {
  const modalBtn = document.querySelectorAll('.modal-trigger');
  const modal = document.querySelector(".modal");
  const closeModalBtn = document.querySelector(".modal .close");
  const overlay = document.createElement("div");
  const modalBody = document.querySelector(".modal-body");
  overlay.classList.add("overlay");

  const closeModal = () => {
    modal.classList.remove("open-modal");
    document.body.classList.remove("modal-active");
    overlay.remove();
  };

  const openModal = () => {
    modal.classList.add("open-modal");
    document.body.classList.add("modal-active");
    document.body.append(overlay);
  };

  try {
    console.log(modalBtn)
    modalBtn.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(item);
        openModal();
          // if(item.getAttribute.href())
      });
    });
    overlay.addEventListener("click", closeModal);
      closeModalBtn.addEventListener("click", () => {
        closeModal();
      });
  } catch(e) {}

};

export default modal;
