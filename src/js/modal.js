const refs = {
  openModalBtn: document.querySelector("[data-open-modal]"),
  closeModalBtn: document.querySelector("[data-close-modal]"),
  backdrop: document.querySelector("[data-backdrop]"),
};

// refs.openModalBtn.forEach((item) => {
//   item.addEventListener("click", toggleModal);
// });

refs.openModalBtn.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);

function toggleModal() {
  document.body.classList.toggle("modal-open");
  refs.backdrop.classList.toggle("is-hidden");
}