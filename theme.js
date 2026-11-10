/* Temas, temporadas e rodapé (carregado em todas as páginas, no <head>) */
// SÓ A DESENVOLVEDORA ALTERA: "" (desligado) | "natal" | "halloween" | "pascoa" | "carnaval" | "anonovo" | "muertos"
const ACTIVE_SEASON = "";

const THEME_KEY = "jv_theme";
const THEMES = ["padrao", "padrao-escuro", "padrao-claro", "wenclair", "piptara", "pipvada", "sweetcc", "addams", "klara"];
const DECOR = { natal: ["❄","❅","✦"], halloween: ["🎃","🦇","🕸"], pascoa: ["🐣","🥚","🌷"], carnaval: ["🎉","🎭","✦"], anonovo: ["✦","✧","★"], muertos: ["💀","🕯","☠️"] };
const AVAILABLE_THEMES = THEMES.concat(DECOR[ACTIVE_SEASON] ? [ACTIVE_SEASON] : []);
function currentTheme(){ let s = ""; try { s = localStorage.getItem(THEME_KEY); } catch (e) {} return AVAILABLE_THEMES.includes(s) ? s : (DECOR[ACTIVE_SEASON] ? ACTIVE_SEASON : "padrao"); }
document.documentElement.dataset.theme = currentTheme();
if (ACTIVE_SEASON) document.documentElement.dataset.season = ACTIVE_SEASON;

const CORNER_SEASONS = ["anonovo", "muertos"];

function buildDecor(){
    const symbols = DECOR[ACTIVE_SEASON];
    if (!symbols) return;
    const box = document.createElement("div");
    box.className = "season-decor";
    box.setAttribute("aria-hidden", "true");
    const pick = () => symbols[Math.floor(Math.random() * symbols.length)];
    if (CORNER_SEASONS.includes(ACTIVE_SEASON)) {
        ["tl", "tr", "bl", "br"].forEach(corner => {
            for (let i = 0; i < 5; i++) {
                const s = document.createElement("span");
                s.className = "corner " + corner;
                s.textContent = pick();
                s.style.setProperty("--x", (Math.random() * 90) + "px");
                s.style.setProperty("--y", (Math.random() * 90) + "px");
                s.style.fontSize = (12 + Math.random() * 14) + "px";
                s.style.animationDelay = (Math.random() * 2.5) + "s";
                s.style.animationDuration = (1.4 + Math.random() * 1.6) + "s";
                box.appendChild(s);
            }
        });
    } else {
        for (let i = 0; i < 16; i++) {
            const s = document.createElement("span");
            s.className = "fall";
            s.textContent = pick();
            s.style.left = (Math.random() * 100) + "%";
            s.style.fontSize = (12 + Math.random() * 14) + "px";
            s.style.animationDuration = (9 + Math.random() * 9) + "s";
            s.style.animationDelay = (-Math.random() * 12) + "s";
            box.appendChild(s);
        }
    }
    document.body.appendChild(box);
}

function buildFooter(){
    const footer = document.createElement("footer");
    footer.className = "site-footer";
    footer.innerHTML = `<span>© ${new Date().getFullYear()} JemmaVerso Archive · <span data-i18n="footer.made">feito com ♡ por Raven</span></span>
        <nav><a href="index.html" data-i18n="common.home">Início</a><a href="stats.html" data-i18n="archive.stats">📊 Estatísticas</a><a href="sobre.html" data-i18n="archive.about">✦ Sobre o acervo</a><a href="fanfics.html" data-i18n="archive.fanfics">✦ Acervo de fanfics</a></nav>`;
    (document.querySelector("main.content") || document.body).appendChild(footer);
}

document.addEventListener("DOMContentLoaded", () => {
    buildDecor();
    buildFooter();
    const select = document.getElementById("themeSelector");
    if (select) {
        if (DECOR[ACTIVE_SEASON]) {
            const option = document.createElement("option");
            option.value = ACTIVE_SEASON;
            option.dataset.i18n = `theme.season.${ACTIVE_SEASON}`;
            select.appendChild(option);
        }
        select.value = currentTheme();
        select.addEventListener("change", () => {
            try { localStorage.setItem(THEME_KEY, select.value); } catch (e) {}
            document.documentElement.dataset.theme = select.value;
        });
    }
    if (typeof applyTranslations === "function") applyTranslations();
});
