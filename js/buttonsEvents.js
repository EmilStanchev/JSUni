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

function showModal(url, date, camera) {
  modal.style.display = "flex";
  modalImg.src = url;
  modalDate.textContent = `Date: ${date}`;
  modalCamera.textContent = `Camera: ${camera}`;
}

closeModalBtn.addEventListener("click", function () {
  modal.style.display = "none";
});
