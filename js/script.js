const dropdowns = [...document.querySelectorAll(".dropdown")];
const list = document.querySelector(".states ul");
const states = [
  "Estimated Transit Time",
  "Location History",
  "Shipment Informations",
  "Photos",
  "Planning",
];
console.log(states);

dropdowns.map((dropdown) =>
  dropdown.addEventListener("click", () => {
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
  pagination: {
    el: ".pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<li class="' +
        className +
        '"><span>' +
        states[index] +
        "</span></li>"
      );
    },
  },
});
