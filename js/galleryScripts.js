const gallery = document.getElementById("gallery");

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalDate = document.getElementById("modal-date");
const modalCamera = document.getElementById("modal-camera");
const modalIndex = document.getElementById("image-index");

const closeModalBtn = document.querySelector(".close");
const showLessBtn = document.getElementById("showLess");
const showMoreBtn = document.getElementById("showMore");

const maxImagesToShow = 6;

function displayImages(images) {
  gallery.innerHTML = "";
  if (images?.length === 0) {
    const infoText = document.createElement("p");
    infoText.innerHTML = "There aren`t images for that filter";
    infoText.classList.add("text-black", "w-full", "text-xl");
    gallery.appendChild(infoText);
  }
  images?.forEach((image, index) => {
    if (index < maxImagesToShow) {
      const imgItem = document.createElement("div");
      imgItem.classList.add("img-item");
      imgItem.innerHTML = `<img src="${image.url}" alt="${image.category}">`;
      imgItem.querySelector("img").addEventListener("click", function () {
        showModal(image.url, image?.date, image?.camera, image?.index);
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

  images?.forEach((image) => {
    const imgItem = document.createElement("div");
    imgItem.classList.add("img-item");
    imgItem.innerHTML = `<img src="${image.url}" alt="${image.category}">`;
    imgItem.querySelector("img").addEventListener("click", function () {
      showModal(image?.url, image?.date, image?.camera, image?.index);
    });
    gallery.appendChild(imgItem);
  });

  showMoreBtn.style.display = "none";
  showLessBtn.style.display = "block";
}

displayImages(images);
