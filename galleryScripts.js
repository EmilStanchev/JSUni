const gallery = document.getElementById("gallery");
const filters = document.getElementById("filters");
const filterList = document.getElementById("filter-list");

const images = [
  {
    url: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1715817600&semt=ais_user",
    category: "nature",
  },
  {
    url: "https://c1.wallpaperflare.com/preview/351/83/679/sparrow-animal-portrait-bird-close.jpg",
    category: "birds",
  },
  {
    url: "https://www.shutterstock.com/image-photo/beauty-north-america-alaska-picturesque-600nw-374734084.jpg",
    category: "nature",
  },
  {
    url: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1715817600&semt=ais_user",
    category: "nature",
  },
  {
    url: "https://c1.wallpaperflare.com/preview/351/83/679/sparrow-animal-portrait-bird-close.jpg",
    category: "birds",
  },
  {
    url: "https://www.shutterstock.com/image-photo/beauty-north-america-alaska-picturesque-600nw-374734084.jpg",
    category: "nature",
  },
  {
    url: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1715817600&semt=ais_user",
    category: "nature",
  },
  {
    url: "https://c1.wallpaperflare.com/preview/351/83/679/sparrow-animal-portrait-bird-close.jpg",
    category: "birds",
  },
  {
    url: "https://www.shutterstock.com/image-photo/beauty-north-america-alaska-picturesque-600nw-374734084.jpg",
    category: "nature",
  },
  {
    url: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1715817600&semt=ais_user",
    category: "nature",
  },
  {
    url: "https://c1.wallpaperflare.com/preview/351/83/679/sparrow-animal-portrait-bird-close.jpg",
    category: "birds",
  },
  {
    url: "https://www.shutterstock.com/image-photo/beauty-north-america-alaska-picturesque-600nw-374734084.jpg",
    category: "nature",
  },
  {
    url: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1715817600&semt=ais_user",
    category: "nature",
  },
  {
    url: "https://c1.wallpaperflare.com/preview/351/83/679/sparrow-animal-portrait-bird-close.jpg",
    category: "birds",
  },
  {
    url: "https://www.shutterstock.com/image-photo/beauty-north-america-alaska-picturesque-600nw-374734084.jpg",
    category: "nature",
  },
  {
    url: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1715817600&semt=ais_user",
    category: "nature",
  },
  {
    url: "https://c1.wallpaperflare.com/preview/351/83/679/sparrow-animal-portrait-bird-close.jpg",
    category: "birds",
  },
  {
    url: "https://www.shutterstock.com/image-photo/beauty-north-america-alaska-picturesque-600nw-374734084.jpg",
    category: "nature",
  },
];
const maxImagesToShow = 6;

function displayImages(images) {
  gallery.innerHTML = "";
  images.forEach((image, index) => {
    if (index < maxImagesToShow) {
      const imgItem = document.createElement("div");
      imgItem.classList.add("img-item");
      imgItem.innerHTML = `<img src="${image.url}" alt="${image.category}">`;
      gallery.appendChild(imgItem);
    }
  });

  if (images.length > maxImagesToShow) {
    const showMoreBtn = document.createElement("button");
    showMoreBtn.textContent = "Show More";
    showMoreBtn.classList.add("show-more-btn");
    showMoreBtn.addEventListener("click", function () {
      displayAllImages(images);
      showMoreBtn.style.display = "none";
    });
    gallery.appendChild(showMoreBtn);
  }
}

function displayAllImages(images) {
  gallery.innerHTML = "";
  images.forEach((image) => {
    const imgItem = document.createElement("div");
    imgItem.classList.add("img-item");
    imgItem.innerHTML = `<img src="${image.url}" alt="${image.category}">`;
    gallery.appendChild(imgItem);
  });

  const showLessBtn = document.createElement("button");
  showLessBtn.textContent = "Show Less";
  showLessBtn.classList.add("show-less-btn");
  const showMoreBtn = document.getElementsByClassName("show-more-btn");
  showLessBtn.addEventListener("click", function () {
    displayImages(images.slice(0, maxImagesToShow));
    showMoreBtn.style.display = "block";
    showLessBtn.style.display = "none";
  });
  gallery.appendChild(showLessBtn);
}

function filterImages(category) {
  const filteredImages =
    category === "all"
      ? images
      : images.filter((image) => image.category === category);
  displayImages(filteredImages);
}

filters.addEventListener("click", function (event) {
  if (event.target.classList.contains("filter-btn")) {
    filterList.style.display =
      filterList.style.display === "flex" ? "none" : "flex";
  }
});

filterList.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    const category = event.target.getAttribute("data-filter");
    filterList.style.display = "none";
    filterImages(category);
  }
});

displayImages(images);
