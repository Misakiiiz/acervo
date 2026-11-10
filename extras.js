/* AU do dia, Me surpreenda e tags nos detalhes (só na página inicial) */
const visibleAus = () => [...document.querySelectorAll("#cards .card")].map(c => aus.find(a => a.id === Number(c.dataset.id))).filter(Boolean);

/* ---------- AU do dia: muda todo dia, sem repetir até passar por todo o acervo ---------- */
function auOfTheDay(){
    const n = aus.length, gcd = (a, b) => b ? gcd(b, a % b) : a;
    let step = 37;
    while (gcd(step, n) !== 1) step++;
    const day = Math.floor((Date.now() - new Date().getTimezoneOffset() * 60000) / 864e5);
    return aus[(day * step) % n];
}
const AOD_KEY = "jv_aod_hidden";
const EYE_OPEN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/><circle cx="12" cy="12" r="3"/></svg>';
const EYE_CLOSED = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.9 17.9A10.9 10.9 0 0 1 12 19C5 19 1 12 1 12a18.6 18.6 0 0 1 5.1-5.9M9.9 5.1A10.9 10.9 0 0 1 12 5c7 0 11 7 11 7a18.5 18.5 0 0 1-2.2 3.2M1 1l22 22"/></svg>';
function aodHidden(){ try { return localStorage.getItem(AOD_KEY) === "1"; } catch (e) { return false; } }
function setAodHidden(v){ try { localStorage.setItem(AOD_KEY, v ? "1" : "0"); } catch (e) {} renderAod(); }
function renderAod(){
    const au = auOfTheDay(), box = $("aod");
    box.classList.toggle("collapsed", aodHidden());
    if (aodHidden()) {
        box.innerHTML = `<span class="aod-label">${t("aod.label")}</span><button class="eye" type="button" title="${t("aod.show")}" aria-label="${t("aod.show")}">${EYE_CLOSED}</button>`;
        box.querySelector(".eye").onclick = () => setAodHidden(false);
        return;
    }
    const synopsis = au.description ? translateSynopsis(au) : "";
    box.innerHTML = `<button class="eye" type="button" title="${t("aod.hide")}" aria-label="${t("aod.hide")}">${EYE_OPEN}</button>
    <div class="aod-copy">
        <span class="aod-label">${t("aod.label")}</span>
        <h2>${esc(translateTitle(au))}</h2>
        <p class="aod-meta">${getAuAuthors(au).map(a => esc(a.display)).join(" · ")} · <span class="ship">${esc(au.fandom)}</span></p>
        ${synopsis ? `<p class="aod-syn">${esc(synopsis)}</p>` : ""}
    </div><button class="btn aod-open" type="button">${t("aod.open")}</button>`;
    box.querySelector(".eye").onclick = () => setAodHidden(true);
    box.querySelector(".aod-open").onclick = () => openModal(au, [au]);
}
const baseFilter = filterAus;
filterAus = function(){ baseFilter(); renderAod(); };
renderAod();

/* ---------- Me surpreenda ---------- */
let drawn = null;
function drawAu(){
    const mode = document.querySelector("input[name=smode]:checked").value;
    const pool = mode === "filtered" ? visibleAus() : aus;
    const out = $("surpriseResult");
    if (!pool.length) { out.innerHTML = `<p class="empty">${t("surprise.none")}</p>`; drawn = null; return; }
    drawn = pool[Math.floor(Math.random() * pool.length)];
    out.innerHTML = `<div class="s-card"><span class="ship">${esc(drawn.fandom)}</span><h3>${esc(translateTitle(drawn))}</h3>
        <p class="author">${getAuAuthors(drawn).map(a => esc(a.display)).join(" · ")}</p>
        <div class="meta"><span class="chip ${statusClass(drawn.status)}">${esc(translateStatus(drawn.status))}</span>${drawn.size ? `<span class="chip">${esc(translateSize(drawn.size))}</span>` : ""}</div>
        <button class="btn" id="surpriseOpen" type="button">${t("surprise.details")}</button></div>`;
    $("surpriseOpen").onclick = () => { $("surprise").classList.remove("active"); openModal(drawn, [drawn]); };
    $("surpriseDraw").textContent = t("surprise.again");
}
$("surpriseBtn").onclick = () => { $("surpriseResult").innerHTML = ""; $("surpriseDraw").textContent = t("surprise.draw"); $("surprise").classList.add("active"); };
$("surpriseDraw").onclick = drawAu;
$("closeSurprise").onclick = () => $("surprise").classList.remove("active");
$("surprise").addEventListener("click", e => { if (e.target === $("surprise")) $("surprise").classList.remove("active"); });

/* ---------- Tags pessoais nos detalhes ---------- */
function renderModalTags(){
    if (!openAu) return;
    const mine = getAuTags(openAu.id);
    $("modalTags").innerHTML = TAG_KEYS.map(k => `<button type="button" class="status-btn${mine.includes(k) ? " active" : ""}" data-tag="${k}">${t("tag." + k)}</button>`).join("");
}
$("modalTags").addEventListener("click", e => {
    const b = e.target.closest("[data-tag]");
    if (b) { toggleAuTag(openAu.id, b.dataset.tag); renderModalTags(); }
});
const baseShowAu = showAu;
showAu = function(au){ baseShowAu(au); renderModalTags(); };
