const modal = $("modal");
const modalBox = modal.querySelector(".modal-box");
const previousAuButton = $("prevAu"), nextAuButton = $("nextAu");
let openAu = null, modalAus = [], openAuIndex = -1, swipeStart = null;

function openModal(au, visibleAus){
    modalAus = visibleAus.length ? visibleAus : [au];
    openAuIndex = modalAus.findIndex(item => item.id === au.id);
    if (openAuIndex < 0) {
        modalAus = [au];
        openAuIndex = 0;
    }
    showAu(au);
}

function showAu(au){
    openAu = au;
    $("modalTitle").textContent = au.title;
    const handle = au.url ? au.url.split("/")[3] : au.author.name;
    const a = $("modalAuthor"); a.textContent = au.author.display; a.href = "https://x.com/" + handle;
    $("mShip").textContent = au.fandom;
    $("mStatus").textContent = au.status;
    $("mSize").textContent = au.size || "Não informado";
    $("modalDescription").textContent = au.description || (au.tweet ? "Sinopse no post original, logo abaixo." : "Sinopse ainda não cadastrada.");
    $("modalTweet").innerHTML = au.tweet ? `<blockquote class="twitter-tweet" data-theme="dark"><a href="https://twitter.com/i/status/${au.tweet}"></a></blockquote>` : "";
    $("modalLink").style.display = au.url ? "" : "none";
    if (au.url) $("modalLink").href = au.url;
    updateModalNavigation();
    refreshModal();
    modal.classList.add("active");
    if (window.twttr && twttr.widgets) twttr.widgets.load($("modalTweet"));
}

function updateModalNavigation(){
    const hasMultipleAus = modalAus.length > 1;
    previousAuButton.hidden = !hasMultipleAus;
    nextAuButton.hidden = !hasMultipleAus;
    previousAuButton.disabled = openAuIndex <= 0;
    nextAuButton.disabled = openAuIndex >= modalAus.length - 1;
}

function navigateModal(direction){
    const nextIndex = openAuIndex + direction;
    if (nextIndex < 0 || nextIndex >= modalAus.length) return;
    openAuIndex = nextIndex;
    showAu(modalAus[openAuIndex]);
}

function refreshModal(){
    const id = openAu.id, cur = getReadingStatus(id) || "naolido", rate = getRating(id);
    document.querySelectorAll("#readingButtons .status-btn").forEach(b => b.classList.toggle("active", b.dataset.status === cur));
    document.querySelectorAll("#rating span").forEach(s => s.classList.toggle("active", Number(s.dataset.rate) <= rate));
    $("modalFav").textContent = isFavorite(id) ? "♥ Favorita" : "♡ Favoritar";
    $("modalFav").classList.toggle("active", isFavorite(id));
}

function closeModal(){ modal.classList.remove("active"); filterAus(); }

previousAuButton.addEventListener("click", () => navigateModal(-1));
nextAuButton.addEventListener("click", () => navigateModal(1));
modalBox.addEventListener("touchstart", e => {
    if (e.touches.length !== 1 || e.target.closest("button,a,input,select,textarea,[contenteditable=true]")) {
        swipeStart = null;
        return;
    }
    swipeStart = { x: e.touches[0].clientX, y: e.touches[0].clientY };
}, { passive: true });
modalBox.addEventListener("touchend", e => {
    if (!swipeStart) return;
    const deltaX = e.changedTouches[0].clientX - swipeStart.x;
    const deltaY = e.changedTouches[0].clientY - swipeStart.y;
    swipeStart = null;
    if (Math.abs(deltaX) < 60 || Math.abs(deltaX) < Math.abs(deltaY) * 1.25) return;
    navigateModal(deltaX < 0 ? 1 : -1);
}, { passive: true });

document.querySelectorAll("#readingButtons .status-btn").forEach(b => b.addEventListener("click", () => {
    setReadingStatus(openAu.id, b.dataset.status); refreshModal(); updateStatistics();
}));
document.querySelectorAll("#rating span").forEach(s => s.addEventListener("click", () => {
    const v = Number(s.dataset.rate);
    setRating(openAu.id, getRating(openAu.id) === v ? 0 : v); refreshModal();
}));
$("modalFav").addEventListener("click", () => { toggleFavorite(openAu.id); refreshModal(); updateStatistics(); });
$("closeModal").addEventListener("click", closeModal);
modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeModal();
    if (!modal.classList.contains("active") || e.target.closest("input,textarea,select,[contenteditable=true]")) return;
    if (e.key === "ArrowLeft") navigateModal(-1);
    if (e.key === "ArrowRight") navigateModal(1);
});
$("menuBtn").addEventListener("click", () => $("sidebar").classList.toggle("open"));

filterAus();
updateStatistics();
