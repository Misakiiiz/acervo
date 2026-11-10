const fanficRecommendations = document.getElementById("fanficRecommendations");
const fanficDialog = document.getElementById("fanficDialog");

fanficRecommendations.innerHTML = recommendedFanfics.map((story, index) => `
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
`).join("");

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
