const gallery = document.getElementById("gallery");
const filters = document.getElementById("filters");
const filterList = document.getElementById("filter-list");

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalDate = document.getElementById("modal-date");
const modalCamera = document.getElementById("modal-camera");

const closeModalBtn = document.querySelector(".close");
const showLessBtn = document.getElementById("showLess");
const showMoreBtn = document.getElementById("showMore");

const images = [
  {
    url: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1715817600&semt=ais_user",
    category: "nature",
    date: "2023-05-01",
    camera: "Canon EOS 5D Mark IV",
  },
  {
    url: "https://c1.wallpaperflare.com/preview/351/83/679/sparrow-animal-portrait-bird-close.jpg",
    category: "birds",
    date: "2023-04-15",
    camera: "Nikon D850",
  },
  {
    url: "https://www.shutterstock.com/image-photo/beauty-north-america-alaska-picturesque-600nw-374734084.jpg",
    category: "nature",
    date: "2023-03-20",
    camera: "Sony Alpha a7R IV",
  },
  {
    url: "https://images.pexels.com/photos/163848/road-mountains-sunset-path-163848.jpeg?cs=srgb&dl=pexels-pixabay-163848.jpg&fm=jpg",
    category: "road",
    date: "2023-02-10",
    camera: "Fujifilm X-T4",
  },
  {
    url: "https://c1.wallpaperflare.com/preview/351/83/679/sparrow-animal-portrait-bird-close.jpg",
    category: "birds",
    date: "2023-01-30",
    camera: "Nikon D850",
  },
  {
    url: "https://www.shutterstock.com/image-photo/beauty-north-america-alaska-picturesque-600nw-374734084.jpg",
    category: "nature",
    date: "2023-01-05",
    camera: "Sony Alpha a7R IV",
  },
  {
    url: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1715817600&semt=ais_user",
    category: "nature",
    date: "2022-12-25",
    camera: "Canon EOS 5D Mark IV",
  },
  {
    url: "https://c1.wallpaperflare.com/preview/351/83/679/sparrow-animal-portrait-bird-close.jpg",
    category: "birds",
    date: "2022-12-10",
    camera: "Nikon D850",
  },
  {
    url: "https://www.shutterstock.com/image-photo/beauty-north-america-alaska-picturesque-600nw-374734084.jpg",
    category: "nature",
    date: "2022-11-20",
    camera: "Sony Alpha a7R IV",
  },
  {
    url: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1715817600&semt=ais_user",
    category: "nature",
    date: "2022-10-15",
    camera: "Canon EOS 5D Mark IV",
  },
  {
    url: "https://c1.wallpaperflare.com/preview/351/83/679/sparrow-animal-portrait-bird-close.jpg",
    category: "birds",
    date: "2022-09-30",
    camera: "Nikon D850",
  },
  {
    url: "https://www.shutterstock.com/image-photo/beauty-north-america-alaska-picturesque-600nw-374734084.jpg",
    category: "nature",
    date: "2022-09-10",
    camera: "Sony Alpha a7R IV",
  },
  {
    url: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1715817600&semt=ais_user",
    category: "nature",
    date: "2022-08-25",
    camera: "Canon EOS 5D Mark IV",
  },
  {
    url: "https://c1.wallpaperflare.com/preview/351/83/679/sparrow-animal-portrait-bird-close.jpg",
    category: "birds",
    date: "2022-08-10",
    camera: "Nikon D850",
  },
  {
    url: "https://www.shutterstock.com/image-photo/beauty-north-america-alaska-picturesque-600nw-374734084.jpg",
    category: "nature",
    date: "2022-07-20",
    camera: "Sony Alpha a7R IV",
  },
  {
    url: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1715817600&semt=ais_user",
    category: "nature",
    date: "2022-06-15",
    camera: "Canon EOS 5D Mark IV",
  },
  {
    url: "https://c1.wallpaperflare.com/preview/351/83/679/sparrow-animal-portrait-bird-close.jpg",
    category: "birds",
    date: "2022-05-30",
    camera: "Nikon D850",
  },
  {
    url: "https://www.shutterstock.com/image-photo/beauty-north-america-alaska-picturesque-600nw-374734084.jpg",
    category: "nature",
    date: "2022-05-10",
    camera: "Sony Alpha a7R IV",
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
        showModal(image.url, image?.date, image?.camera);
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
      showModal(image?.url, image?.date, image?.camera);
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

function showModal(url, date, camera) {
  modal.style.display = "flex";
  modalImg.src = url;
  modalDate.textContent = `Date: ${date}`;
  modalCamera.textContent = `Camera: ${camera}`;
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
