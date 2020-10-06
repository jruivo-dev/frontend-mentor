let shareBtn = document.querySelector(".share-btn");
let popup = document.querySelector(".popup");

let isPopupOpen = false;

shareBtn.addEventListener("click", (e) => {
  console.log(e.target);
  console.log(e.currentTarget);

  if (
    (e.target.parentElement === shareBtn && e.target !== popup) ||
    e.target === e.currentTarget
  ) {
    if (isPopupOpen) {
      popup.classList.add("hide");
      shareBtn.classList.remove("active");
    } else {
      popup.classList.remove("hide");
      shareBtn.classList.add("active");
    }
    isPopupOpen = !isPopupOpen;
  }
});
