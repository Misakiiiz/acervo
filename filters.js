const $ = id => document.getElementById(id);
const searchInput = $("search"), fandomFilter = $("fandom"), authorFilter = $("authorFilter"),
      pubStatus = $("pubStatus"), sizeFilter = $("sizeFilter"), sortOrder = $("sortOrder");
let currentView = "";

function fillSelect(select, values){
    [...new Set(values)].filter(Boolean).sort((a,b)=>a.localeCompare(b,"pt",{sensitivity:"base"}))
        .forEach(v => select.append(new Option(v, v)));
}
fillSelect(fandomFilter, aus.map(a => a.fandom));
fillSelect($("authorOptions"), aus.flatMap(getAuAuthors).map(author => author.display));
fillSelect($("tropeFilter"), aus.flatMap(au => au.tags || []).filter(tag => !["Long", "Short", "One-shot", "Indefinido"].includes(tag)));
if ($("tropeFilter").options.length <= 1) document.querySelector("[data-trope-filter]").hidden = true;

function compareText(a, b){
    return a.localeCompare(b, "pt", { sensitivity: "base", numeric: true });
}

function getCompletionOrder(au){
    if (au.status === "Concluída") return 0;
    if (au.status === "Em andamento") return 1;
    return 2;
}

function sortAus(list){
    if (!sortOrder.value) return list;
    return list.sort((a, b) => {
        if (sortOrder.value === "completion") {
            return getCompletionOrder(a) - getCompletionOrder(b)
                || compareText(translateTitle(a), translateTitle(b));
        }
        if (sortOrder.value === "author") {
            const authorA = getAuAuthors(a).map(author => author.display).join(" · ");
            const authorB = getAuAuthors(b).map(author => author.display).join(" · ");
            return compareText(authorA, authorB) || compareText(translateTitle(a), translateTitle(b));
        }
        return compareText(translateTitle(a), translateTitle(b));
    });
}

function filterAus(){
    const text = searchInput.value.trim().toLowerCase();
    const authorText = authorFilter.value.trim().toLocaleLowerCase();
    const result = aus.filter(au => {
        const authors = getAuAuthors(au);
        if (text && !(au.title + " " + translateTitle(au) + " " + authors.map(author => author.display).join(" ") + " " + (au.description || "")).toLowerCase().includes(text)) return false;
        if (fandomFilter.value && au.fandom !== fandomFilter.value) return false;
        if (authorText && !authors.some(author => author.display.toLocaleLowerCase().includes(authorText))) return false;
        if (pubStatus.value && au.status !== pubStatus.value) return false;
        if (sizeFilter.value && au.size !== sizeFilter.value) return false;
        if ($("tropeFilter").value && !(au.tags || []).includes($("tropeFilter").value)) return false;
        if (currentView === "favorites") return isFavorite(au.id);
        if (currentView === "naolido") return (getReadingStatus(au.id) || "naolido") === "naolido";
        if (currentView) return getReadingStatus(au.id) === currentView;
        return true;
    });
    renderCards(sortAus(result));
}

[searchInput, authorFilter].forEach(el => el.addEventListener("input", filterAus));
[fandomFilter, pubStatus, sizeFilter, $("tropeFilter"), sortOrder].forEach(el => el.addEventListener("change", filterAus));

document.querySelectorAll(".nav button").forEach(btn => btn.addEventListener("click", () => {
    currentView = btn.dataset.view;
    document.querySelectorAll(".nav button").forEach(b => b.classList.toggle("active", b === btn));
    toggleSidebar(false);
    filterAus();
}));

$("clearFilters").addEventListener("click", () => {
    searchInput.value = "";
    authorFilter.value = "";
    [fandomFilter, pubStatus, sizeFilter, $("tropeFilter")].forEach(s => s.value = "");
    filterAus();
});
