const cardsContainer = document.getElementById("cards");
const READ_LABEL = { naolido: "Não lida", lendo: "Lendo", pausada: "Pausada", lido: "Concluída" };

function esc(s){ return String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c])); }

function statusClass(s){ return s === "Concluída" ? "done" : s === "Em andamento" ? "going" : "unk"; }

function renderCards(list){
    cardsContainer.innerHTML = list.map(au => {
        const read = getReadingStatus(au.id);
        return `<article class="card" data-id="${au.id}">
            <div class="card-top">
                <span class="ship">${esc(au.fandom)}</span>
                <span class="heart">${isFavorite(au.id) ? "♥" : ""}</span>
            </div>
            <h3>${esc(au.title)}</h3>
            <p class="author">${esc(au.author.display)}</p>
            <div class="meta">
                <span class="chip ${statusClass(au.status)}">${esc(au.status)}</span>
                ${au.size ? `<span class="chip">${esc(au.size)}</span>` : ""}
                ${read && READ_LABEL[read] ? `<span class="chip read">${READ_LABEL[read]}</span>` : ""}
            </div>
        </article>`;
    }).join("");

    document.getElementById("totalAus").textContent = list.length;
    document.getElementById("empty").hidden = list.length > 0;
}

cardsContainer.addEventListener("click", e => {
    const card = e.target.closest(".card");
    if (card) openModal(aus.find(a => a.id === Number(card.dataset.id)));
});
