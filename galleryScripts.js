const gallery = document.getElementById("gallery");
const filters = document.getElementById("filters");
const filterList = document.getElementById("filter-list");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeModalBtn = document.querySelector(".close");
const showLessBtn = document.getElementById("showLess");
const showMoreBtn = document.getElementById("showMore");

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
}

function displayImages(images) {
  gallery.innerHTML = "";
  images.forEach((image, index) => {
    if (index < maxImagesToShow) {
      const imgItem = document.createElement("div");
      imgItem.classList.add("img-item");
      imgItem.innerHTML = `<img src="${image.url}" alt="${image.category}">`;
      imgItem.querySelector("img").addEventListener("click", function () {
        showModal(image.url);
      });
      gallery.appendChild(imgItem);
    }
  });

  if (images.length > maxImagesToShow) {
    showMoreBtn.style.display = "block";
    showLessBtn.style.display = "none";
  } else {
    showMoreBtn.style.display = "none";
    showLessBtn.style.display = "none";
  }
}

function displayAllImages(images) {
  gallery.innerHTML = "";
  images.forEach((image) => {
    const imgItem = document.createElement("div");
    imgItem.classList.add("img-item");
    imgItem.innerHTML = `<img src="${image.url}" alt="${image.category}">`;
    imgItem.querySelector("img").addEventListener("click", function () {
      showModal(image.url);
    });
    gallery.appendChild(imgItem);
  });

  showMoreBtn.style.display = "none";
  showLessBtn.style.display = "block";
}

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

function filterImages(category) {
  const filteredImages =
    category === "all"
      ? images
      : images.filter((image) => image.category === category);
  displayImages(filteredImages);
}

function showModal(url) {
  modal.style.display = "flex";
  modalImg.src = url;
}

closeModalBtn.addEventListener("click", function () {
  modal.style.display = "none";
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

displayImages(images);
