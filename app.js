const modal = $("modal");
let openAu = null;

function openModal(au){
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
    refreshModal();
    modal.classList.add("active");
    if (window.twttr && twttr.widgets) twttr.widgets.load($("modalTweet"));
}

function refreshModal(){
    const id = openAu.id, cur = getReadingStatus(id) || "naolido", rate = getRating(id);
    document.querySelectorAll("#readingButtons .status-btn").forEach(b => b.classList.toggle("active", b.dataset.status === cur));
    document.querySelectorAll("#rating span").forEach(s => s.classList.toggle("active", Number(s.dataset.rate) <= rate));
    $("modalFav").textContent = isFavorite(id) ? "♥ Favorita" : "♡ Favoritar";
    $("modalFav").classList.toggle("active", isFavorite(id));
}

function closeModal(){ modal.classList.remove("active"); filterAus(); }

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
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });
$("menuBtn").addEventListener("click", () => $("sidebar").classList.toggle("open"));

filterAus();
updateStatistics();
