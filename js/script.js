const dropdowns = [...document.querySelectorAll(".dropdown")];
const list = document.querySelector(".states ul");

const states = [
  "Estimated Transit Time",
  "Location History",
  "Shipment Informations",
  "Photos",
  "Planning",
];

dropdowns.map((dropdown) =>
  dropdown.querySelector(".drop-btn").addEventListener("click", () => {
    const content = dropdown.querySelector(".content");
    const arrow = dropdown.querySelector("svg");
    content.classList.toggle("full-height");
    arrow.classList.toggle("rotate");
  })
);

// Shipment Carousel
var swiper = new Swiper(".shipmentSwiper", {
  autoHeight: true,
  allowTouchMove: true,
  spaceBetween: 50,
  pagination: {
    el: ".pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<li class="' + className + '"><span>' + states[index] + "</span></li>"
      );
    },
  },
});

// photos

const photos = [...document.querySelectorAll(".pic")];
const selects = [...document.querySelectorAll(".select")];

photos.map((photo, index) => {
  photo.addEventListener("click", () => {
    photo.querySelector(".tick svg").classList.toggle("active");
    selects[index].classList.toggle("active");
    console.log(selects[index]);
  });
});
