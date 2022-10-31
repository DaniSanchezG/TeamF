let button1 = document.querySelector("#botonPruebaScrollLeft");
let button2 = document.querySelector("#botonPruebaScrollRight");
let galery = document.querySelector(".container-gallery");
let galeryMovement = 0;

button2.addEventListener("click", () => {
  if (galeryMovement < 7020) {
    galery.scrollTo({
      left: (galeryMovement += 540),
      behavior: "smooth",
    });
  }
});

button1.addEventListener("click", () => {
  if (galeryMovement > 0) {
    galery.scrollTo({
      left: (galeryMovement -= 540),
      behavior: "smooth",
    });
  }
});
