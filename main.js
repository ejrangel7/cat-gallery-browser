const RANDOM_CATS_URL = "https://api.thecatapi.com/v1/images/search?limit=2";

const spanError = document.querySelector("#span-error");
const btnRandomKitten = document.querySelector("#btn-random-kitten");
const btnUploadKitten = document.querySelector("#btn-upload-kitten");
const contentRandomKitten = document.querySelector("#content-random-kitten");
const contentFavoriteKitten = document.querySelector("#content-favorites-kitten");

function showError(message = "Unable to load cats. Please try again.") {
  if (spanError) spanError.textContent = message;
}

function clearError() {
  if (spanError) spanError.textContent = "";
}

function renderCats(cats) {
  if (!contentRandomKitten) return;

  contentRandomKitten.innerHTML = "";

  const images = cats.map((cat) => {
    const image = document.createElement("img");
    image.className = "img-kitten random-kitten";
    image.alt = "Random cat";
    image.loading = "lazy";
    image.src = cat.url;
    return image;
  });

  contentRandomKitten.append(...images);
}

async function loadRandomKittens() {
  clearError();

  try {
    const response = await fetch(RANDOM_CATS_URL);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const cats = await response.json();
    renderCats(cats);
  } catch (error) {
    console.error(error);
    showError();
  }
}

function enableReadOnlyMode() {
  const uploadContainer = btnUploadKitten?.closest("form");
  const favoritesSection = contentFavoriteKitten?.closest("section");

  if (uploadContainer) uploadContainer.hidden = true;
  else if (btnUploadKitten) btnUploadKitten.hidden = true;

  if (favoritesSection) favoritesSection.hidden = true;
  else if (contentFavoriteKitten) contentFavoriteKitten.hidden = true;
}

document.addEventListener("DOMContentLoaded", () => {
  enableReadOnlyMode();
  loadRandomKittens();
});

btnRandomKitten?.addEventListener("click", loadRandomKittens);
