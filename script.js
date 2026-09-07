const gallery = document.getElementById("gallery");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");

const closeBtn = document.getElementById("closeBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const photoNumber = document.getElementById("photoNumber");

let currentPhoto = 0;

const totalPhotos = 28;


/* ==============================
   CREATE GALLERY
============================== */

for (let i = 1; i <= totalPhotos; i++) {

    const card = document.createElement("div");

    card.className = "photo-card";

    card.style.animationDelay = `${i * 0.04}s`;

    const image = document.createElement("img");

    image.src = `photo${i}.jpg`;

    image.alt = `Beautiful Memory ${i}`;

    image.loading = "lazy";


    const label = document.createElement("div");

    label.className = "photo-label";

    label.textContent =
        `MEMORY ${String(i).padStart(2, "0")}`;


    card.appendChild(image);
    card.appendChild(label);

    gallery.appendChild(card);


    card.addEventListener("click", () => {

        currentPhoto = i - 1;

        showPhoto();

    });

}


/* ==============================
   SHOW PHOTO
============================== */

function showPhoto() {

    const photo = currentPhoto + 1;

    lightboxImage.src =
        `photo${photo}.jpg`;

    photoNumber.textContent =
        `${String(photo).padStart(2, "0")} / ${totalPhotos}`;

    lightbox.classList.add("active");

    document.body.style.overflow = "hidden";
}


/* ==============================
   NEXT PHOTO
============================== */

function nextPhoto() {

    currentPhoto++;

    if (currentPhoto >= totalPhotos) {
        currentPhoto = 0;
    }

    showPhoto();
}


/* ==============================
   PREVIOUS PHOTO
============================== */

function previousPhoto() {

    currentPhoto--;

    if (currentPhoto < 0) {
        currentPhoto = totalPhotos - 1;
    }

    showPhoto();
}


/* ==============================
   CLOSE
============================== */

function closeLightbox() {

    lightbox.classList.remove("active");

    document.body.style.overflow = "";
}


nextBtn.addEventListener("click", nextPhoto);

prevBtn.addEventListener("click", previousPhoto);

closeBtn.addEventListener("click", closeLightbox);


/* ==============================
   CLICK OUTSIDE PHOTO
============================== */

lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {
        closeLightbox();
    }

});


/* ==============================
   KEYBOARD CONTROLS
============================== */

document.addEventListener("keydown", (e) => {

    if (!lightbox.classList.contains("active")) {
        return;
    }

    if (e.key === "ArrowRight") {
        nextPhoto();
    }

    if (e.key === "ArrowLeft") {
        previousPhoto();
    }

    if (e.key === "Escape") {
        closeLightbox();
    }

});


/* ==============================
   PARTICLES
============================== */

const particles = document.getElementById("particles");

for (let i = 0; i < 80; i++) {

    const particle = document.createElement("span");

    particle.className = "particle";

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.top =
        Math.random() * 100 + "%";

    particle.style.animationDelay =
        Math.random() * 4 + "s";

    particle.style.animationDuration =
        2 + Math.random() * 5 + "s";

    particles.appendChild(particle);
}
