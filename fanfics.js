const fanficRecommendations = document.getElementById("fanficRecommendations");
const fanficDialog = document.getElementById("fanficDialog");
const fanficCarousel = document.querySelector(".fanfic-carousel");
const fanficCarouselPrevious = document.querySelector(".fanfic-carousel-previous");
const fanficCarouselNext = document.querySelector(".fanfic-carousel-next");
const fanficReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const fanficMobileCarousel = window.matchMedia("(max-width: 600px)");

const fanficCards = recommendedFanfics.map((story, index) => `
    <article class="fanfic-card">
        <button class="fanfic-card-details" type="button" data-fanfic-index="${index}" aria-haspopup="dialog">
            <img class="fanfic-card-cover" src="${story.cover}" alt="Capa de ${story.title}" loading="lazy">
            <span class="fanfic-card-copy">
                <span class="fanfic-card-title" role="heading" aria-level="3">${story.title}</span>
                <span class="fanfic-card-synopsis">${story.description}</span>
            </span>
        </button>
        <a class="author fanfic-author" href="https://x.com/${encodeURIComponent(story.author.slice(1))}" target="_blank" rel="noopener noreferrer">${story.author}</a>
    </article>
`);

const fanficSlides = [];
for (let index = 0; index < fanficCards.length; index += 2) {
    fanficSlides.push(`<div class="fanfic-slide">${fanficCards.slice(index, index + 2).join("")}</div>`);
}
fanficRecommendations.innerHTML = fanficSlides.join("");

let currentFanficSlide = 0;
let fanficCarouselTimer;
const fanficSlideElements = [...fanficRecommendations.children];

function showFanficSlide(index) {
    currentFanficSlide = (index + fanficSlideElements.length) % fanficSlideElements.length;
    if (!fanficMobileCarousel.matches) return;

    fanficRecommendations.style.transform = `translateX(-${currentFanficSlide * 100}%)`;
    fanficSlideElements.forEach((slide, slideIndex) => {
        slide.setAttribute("aria-hidden", String(slideIndex !== currentFanficSlide));
        slide.inert = slideIndex !== currentFanficSlide;
    });
}

function stopFanficAutoplay() {
    window.clearInterval(fanficCarouselTimer);
}

function startFanficAutoplay() {
    stopFanficAutoplay();
    if (fanficMobileCarousel.matches && fanficSlideElements.length > 1 && !fanficReducedMotion.matches && !document.hidden && !fanficDialog.open) {
        fanficCarouselTimer = window.setInterval(() => {
            showFanficSlide(currentFanficSlide + 1);
        }, 5000);
    }
}

function updateFanficCarouselMode() {
    stopFanficAutoplay();
    const isMobileCarousel = fanficMobileCarousel.matches;
    fanficCarouselPrevious.hidden = !isMobileCarousel || fanficSlideElements.length < 2;
    fanficCarouselNext.hidden = !isMobileCarousel || fanficSlideElements.length < 2;

    if (isMobileCarousel) {
        showFanficSlide(currentFanficSlide);
        startFanficAutoplay();
    } else {
        fanficRecommendations.style.transform = "";
        fanficSlideElements.forEach(slide => {
            slide.setAttribute("aria-hidden", "false");
            slide.inert = false;
        });
    }
}

if (fanficSlideElements.length > 1) {
    fanficCarouselPrevious.addEventListener("click", () => {
        showFanficSlide(currentFanficSlide - 1);
        startFanficAutoplay();
    });
    fanficCarouselNext.addEventListener("click", () => {
        showFanficSlide(currentFanficSlide + 1);
        startFanficAutoplay();
    });
    fanficCarousel.addEventListener("mouseenter", stopFanficAutoplay);
    fanficCarousel.addEventListener("mouseleave", startFanficAutoplay);
    fanficCarousel.addEventListener("focusin", stopFanficAutoplay);
    fanficCarousel.addEventListener("focusout", event => {
        if (!fanficCarousel.contains(event.relatedTarget)) startFanficAutoplay();
    });
}
fanficMobileCarousel.addEventListener("change", updateFanficCarouselMode);
document.addEventListener("visibilitychange", startFanficAutoplay);
fanficReducedMotion.addEventListener("change", startFanficAutoplay);
updateFanficCarouselMode();

fanficRecommendations.addEventListener("click", event => {
    const button = event.target.closest("[data-fanfic-index]");
    if (!button) return;

    const story = recommendedFanfics[Number(button.dataset.fanficIndex)];
    if (!story) return;

    document.getElementById("fanficDialogCover").src = story.cover;
    document.getElementById("fanficDialogCover").alt = `Capa de ${story.title}`;
    document.getElementById("fanficDialogAuthor").textContent = story.author;
    document.getElementById("fanficDialogAuthor").href = `https://x.com/${encodeURIComponent(story.author.slice(1))}`;
    document.getElementById("fanficDialogTitle").textContent = story.title;
    document.getElementById("fanficDialogDescription").textContent = story.description;
    document.getElementById("fanficDialogLink").href = story.url;
    fanficDialog.showModal();
});

document.getElementById("closeFanficDialog").addEventListener("click", () => fanficDialog.close());
fanficDialog.addEventListener("click", event => {
    if (event.target === fanficDialog) fanficDialog.close();
});
document.addEventListener("keydown", event => {
    if (event.key === "Escape" && fanficDialog.open) fanficDialog.close();
});
