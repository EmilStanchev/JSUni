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
  displayImages(filteredImages);
}
searchButton.addEventListener("click", function () {
  const selectedDate = document.getElementById("dateFilter").value;

  const filteredImagesByDate = filterImagesByDate(images, selectedDate);
  console.log(filteredImagesByDate);
  displayImages(filteredImagesByDate);
});

filters.addEventListener("click", function (event) {
  if (event.target.classList.contains("filter-btn")) {
    filterList.style.display =
      filterList.style.display === "flex" ? "none" : "flex";
  }
});

filterList.addEventListener("click", function (event) {
  if (event.target.tagName === "LI" || event.target.tagName === "I") {
    const category =
      event.target.getAttribute("data-filter") ||
      event.target.parentElement.getAttribute("data-filter");
    filterList.style.display = "none";
    filterImages(category);
  }
});
