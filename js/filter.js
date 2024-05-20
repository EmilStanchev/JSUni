const filters = document.getElementById("filters");
const filterList = document.getElementById("filter-list");
const searchButton = document.getElementById("search-button");

function filterImagesByDate(images, selectedDate) {
  return images?.filter((image) => image.date === selectedDate);
}

function filterImages(category) {
  const filteredImages =
    category === "all"
      ? images
      : images.filter((image) => image.category === category);
  displayAllImages(filteredImages);
}
searchButton.addEventListener("click", () => {
  const selectedDate = document.getElementById("dateFilter").value;

  const filteredImagesByDate = filterImagesByDate(images, selectedDate);
  displayAllImages(filteredImagesByDate);
});

filters.addEventListener("click", (event) => {
  if (event.target.classList.contains("filter-btn")) {
    filterList.style.display =
      filterList.style.display === "flex" ? "none" : "flex";
  }
});

filterList.addEventListener("click", (event) => {
  if (event.target.tagName === "LI" || event.target.tagName === "I") {
    const category =
      event.target.getAttribute("data-filter") ||
      event.target.parentElement.getAttribute("data-filter");
    filterList.style.display = "none";
    filterImages(category);
  }
});
