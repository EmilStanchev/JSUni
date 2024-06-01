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

      const img = document.createElement("img");
      img.src = image.url;
      img.alt = image.category;
      img.addEventListener("click", function () {
        showModal(image?.url, image?.date, image?.camera, image?.index);
      });

      imgItem.appendChild(img);
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

    const img = document.createElement("img");
    img.src = image.url;
    img.alt = image.category;
    img.addEventListener("click", function () {
      showModal(image?.url, image?.date, image?.camera, image?.index);
    });

    imgItem.appendChild(img);
    gallery.appendChild(imgItem);
  });

  showMoreBtn.style.display = "none";
  showLessBtn.style.display = "block";
}

displayImages(images);

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    console.log(" i and j", i, j);
    [array[i], array[j]] = [array[j], array[i]];
  }
}
setInterval(() => {
  shuffleArray(images);
  displayImages(images);
}, 120000);
