const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

showMoreBtn.addEventListener("click", () => {
  displayAllImages(images);
  showMoreBtn.style.display === "block" ? "none" : "block";
  showMoreBtn.style.display === "none" ? "block" : "none";
});

showLessBtn.addEventListener("click", function () {
  displayImages(images.slice(0, maxImagesToShow));
  showMoreBtn.style.display = "block";
  showLessBtn.style.display = "none";
});

function showModal(url, date, camera, index) {
  modal.style.display = "flex";
  modalImg.src = url;
  modalIndex.textContent = index;
  modalDate.textContent = `Date: ${date}`;
  modalCamera.textContent = `Camera: ${camera}`;
}

closeModalBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

function updateModal(image) {
  modalIndex.textContent = image?.index;
  modalImg.src = image.url;
  modalDate.textContent = `Date: ${image.date}`;
  modalCamera.textContent = `Camera: ${image.camera}`;
}
rightArrow.addEventListener("click", () => {
  let currentIndex = Number(modalIndex.textContent);
  console.log(currentIndex + 1);

  updateModal(images[currentIndex + 1]);
});

leftArrow.addEventListener("click", () => {
  let currentIndex = modalIndex.textContent;
  updateModal(images[currentIndex - 1]);
});
