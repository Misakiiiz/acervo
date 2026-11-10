const $ = id => document.getElementById(id);
const searchInput = $("search"), fandomFilter = $("fandom"), authorFilter = $("authorFilter"),
      pubStatus = $("pubStatus"), sizeFilter = $("sizeFilter");
let currentView = "";

function fillSelect(select, values){
    [...new Set(values)].filter(Boolean).sort((a,b)=>a.localeCompare(b,"pt",{sensitivity:"base"}))
        .forEach(v => select.add(new Option(v, v)));
}
fillSelect(fandomFilter, aus.map(a => a.fandom));
fillSelect(authorFilter, aus.map(a => a.author.display));

function filterAus(){
    const text = searchInput.value.trim().toLowerCase();
    const result = aus.filter(au => {
        if (text && !(au.title + " " + au.author.display).toLowerCase().includes(text)) return false;
        if (fandomFilter.value && au.fandom !== fandomFilter.value) return false;
        if (authorFilter.value && au.author.display !== authorFilter.value) return false;
        if (pubStatus.value && au.status !== pubStatus.value) return false;
        if (sizeFilter.value && au.size !== sizeFilter.value) return false;
        if (currentView === "favorites") return isFavorite(au.id);
        if (currentView === "naolido") return (getReadingStatus(au.id) || "naolido") === "naolido";
        if (currentView) return getReadingStatus(au.id) === currentView;
        return true;
    });
    renderCards(result);
}

[searchInput].forEach(el => el.addEventListener("input", filterAus));
[fandomFilter, authorFilter, pubStatus, sizeFilter].forEach(el => el.addEventListener("change", filterAus));

document.querySelectorAll(".nav button").forEach(btn => btn.addEventListener("click", () => {
    currentView = btn.dataset.view;
    document.querySelectorAll(".nav button").forEach(b => b.classList.toggle("active", b === btn));
    $("sidebar").classList.remove("open");
    filterAus();
}));

$("clearFilters").addEventListener("click", () => {
    searchInput.value = "";
    [fandomFilter, authorFilter, pubStatus, sizeFilter].forEach(s => s.value = "");
    filterAus();
});
