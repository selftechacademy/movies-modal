"use strict";

const showModalBtn = document.querySelectorAll(".show-modal");
const modalList = document.querySelectorAll(".modal");
const overlay = document.querySelector(".overlay");
const closeModal = document.querySelector(".close-modal");

//add event listener to buttons
const showModalHandler = (index) => {
  modalList[index].classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModalHandler = (index) => {
  modalList[index].classList.add("hidden");
  overlay.classList.add("hidden");
};

showModalBtn.forEach((el, index) => {
  el.addEventListener("click", () => showModalHandler(index));
});

modalList.forEach((el, index) => {
  el.addEventListener("click", (e) => {
    closeModalHandler(index);
  });
});

document.querySelector("body").addEventListener("keydown", (event) => {
  console.log("keyboard clicked", event);
  if (event.key === "Escape") {
    modalList.forEach((el, index) => {
      el.addEventListener("click", closeModalHandler(index));
    });
  }
});

//Three Steps to push code
//1 step:=>  git add .
//Optional: git status => checks the files that are added
//2nd step: => git commit -m "I will put notes here"
//3rd step: => git push
//
//git pull => gets the all the code in the github.
