// Tochange the year in the footer

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
console.log(currentYear);

//Making mobile nav work

const navBtnEL = document.querySelector(".menu-btn");
const headerEl = document.querySelector(".main-header");

navBtnEL.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open-state");
});

// function checkFlexGap() {
//   var flex = document.createElement("div");
//   flex.style.display = "flex";
//   flex.style.flexDirection = "column";
//   flex.style.rowGap = "1px";

//   flex.appendChild(document.createElement("div"));
//   flex.appendChild(document.createElement("div"));

//   document.body.appendChild(flex);
//   var isSupported = flex.scrollHeight === 1;
//   flex.parentNode.removeChild(flex);
//   console.log(isSupported);

//   if (!isSupported) document.body.classList.add("no-flexbox-gap");
// }
// checkFlexGap();
