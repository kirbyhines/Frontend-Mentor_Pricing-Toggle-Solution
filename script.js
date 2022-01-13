const btn = document.getElementById("toggle");
let basicPrice = document.querySelector(".basic-price");
let professionalPrice = document.querySelector(".professional-price");
let masterPrice = document.querySelector(".master-price");

btn.addEventListener("click", function () {
  if (basicPrice.innerHTML === "$199.99") {
    basicPrice.innerHTML = "$19.99";
  } else {
    basicPrice.innerHTML = "$199.99";
  }
  if (professionalPrice.innerHTML === "$249.99") {
    professionalPrice.innerHTML = "$24.99";
  } else {
    professionalPrice.innerHTML = "$249.99";
  }
  if (masterPrice.innerHTML === "$399.99") {
    masterPrice.innerHTML = "$39.99";
  } else {
    masterPrice.innerHTML = "$399.99";
  }
});
