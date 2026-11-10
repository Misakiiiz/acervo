const $ = id => document.getElementById(id);
const searchInput = $("search"), fandomFilter = $("fandom"), authorFilter = $("authorFilter"),
      pubStatus = $("pubStatus"), sizeFilter = $("sizeFilter");
let currentView = "";

function fillSelect(select, values){
    [...new Set(values)].filter(Boolean).sort((a,b)=>a.localeCompare(b,"pt",{sensitivity:"base"}))
        .forEach(v => select.add(new Option(v, v)));
}
fillSelect(fandomFilter, aus.map(a => a.fandom));
fillSelect(authorFilter, aus.flatMap(getAuAuthors).map(author => author.display));
fillSelect($("tropeFilter"), aus.flatMap(au => au.tags || []).filter(tag => !["Long", "Short", "One-shot", "Indefinido"].includes(tag)));
if ($("tropeFilter").options.length <= 1) document.querySelector("[data-trope-filter]").hidden = true;

function filterAus(){
    const text = searchInput.value.trim().toLowerCase();
    const result = aus.filter(au => {
        const authors = getAuAuthors(au);
        if (text && !(au.title + " " + translateTitle(au) + " " + authors.map(author => author.display).join(" ") + " " + (au.description || "")).toLowerCase().includes(text)) return false;
        if (fandomFilter.value && au.fandom !== fandomFilter.value) return false;
        if (authorFilter.value && !authors.some(author => author.display === authorFilter.value)) return false;
        if (pubStatus.value && au.status !== pubStatus.value) return false;
        if (sizeFilter.value && au.size !== sizeFilter.value) return false;
        if ($("tropeFilter").value && !(au.tags || []).includes($("tropeFilter").value)) return false;
        if (currentView === "favorites") return isFavorite(au.id);
        if (currentView === "naolido") return (getReadingStatus(au.id) || "naolido") === "naolido";
        if (currentView) return getReadingStatus(au.id) === currentView;
        return true;
    });
    renderCards(result);
}

[searchInput].forEach(el => el.addEventListener("input", filterAus));
[fandomFilter, authorFilter, pubStatus, sizeFilter, $("tropeFilter")].forEach(el => el.addEventListener("change", filterAus));

document.querySelectorAll(".nav button").forEach(btn => btn.addEventListener("click", () => {
    currentView = btn.dataset.view;
    document.querySelectorAll(".nav button").forEach(b => b.classList.toggle("active", b === btn));
    toggleSidebar(false);
    filterAus();
}));

$("clearFilters").addEventListener("click", () => {
    searchInput.value = "";
    [fandomFilter, authorFilter, pubStatus, sizeFilter, $("tropeFilter")].forEach(s => s.value = "");
    filterAus();
});
