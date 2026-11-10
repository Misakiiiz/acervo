/* Textos novos (PT/EN), novos status e tags pessoais. Carregar depois de i18n.js e storage.js */
(function(){
    const pt = {
        "status.hiatus":"Em hiato","status.dropped":"Abandonada","archive.stats":"✦ Estatísticas","footer.made":"feito por Raven",
        "theme.label":"Tema","theme.name.default":"Padrão","theme.name.dark":"Padrão escuro","theme.name.light":"Padrão claro",
        "theme.season.natal":"Temporada: Natal","theme.season.halloween":"Temporada: Halloween","theme.season.pascoa":"Temporada: Páscoa","theme.season.carnaval":"Temporada: Carnaval","theme.season.anonovo":"Temporada: Ano Novo","theme.season.muertos":"Temporada: Dia dos Mortos",
        "filter.tag":"Minha tag","tag.reler":"Reler","tag.madrugada":"Ler de madrugada","tag.comfort":"Conforto","tag.chorar":"Para chorar","tags.title":"Minhas tags",
        "surprise.btn":"Me surpreenda","surprise.title":"Me surpreenda","surprise.random":"Aleatória (qualquer AU do acervo)","surprise.filtered":"Usar os filtros que estão ativos","surprise.draw":"Sortear","surprise.again":"Sortear outra","surprise.details":"Ver detalhes","surprise.none":"Nenhuma AU disponível com esses filtros.",
        "aod.label":"✦ AU do dia","aod.open":"Ver detalhes","aod.hide":"Esconder AU do dia","aod.show":"Mostrar AU do dia",
        "stats.title":"Minhas estatísticas","stats.total":"AUs no acervo","stats.avg":"Nota média","stats.authors":"Autores","stats.progress":"Progresso de leitura","stats.byShip":"Por ship","stats.byStatus":"Andamento das AUs","stats.bySize":"Por tamanho","stats.topAuthors":"Autores com mais AUs","stats.ratings":"Minhas notas","stats.tags":"Minhas tags","stats.topRated":"Mais bem avaliadas","stats.favs":"Favoritas","stats.none":"Nada por aqui ainda.","stats.readOf":"lidas","stats.read":"Lidas"
    };
    const en = {
        "status.hiatus":"On hiatus","status.dropped":"Abandoned","archive.stats":"✦ Statistics","footer.made":"made by Raven",
        "theme.label":"Theme","theme.name.default":"Default","theme.name.dark":"Dark default","theme.name.light":"Light default",
        "theme.season.natal":"Season: Christmas","theme.season.halloween":"Season: Halloween","theme.season.pascoa":"Season: Easter","theme.season.carnaval":"Season: Carnival","theme.season.anonovo":"Season: New Year","theme.season.muertos":"Season: Day of the Dead",
        "filter.tag":"My tag","tag.reler":"Reread","tag.madrugada":"Late-night read","tag.comfort":"Comfort","tag.chorar":"Tearjerker","tags.title":"My tags",
        "surprise.btn":"Surprise me","surprise.title":"Surprise me","surprise.random":"Random (any AU in the archive)","surprise.filtered":"Use my active filters","surprise.draw":"Draw","surprise.again":"Draw another","surprise.details":"View details","surprise.none":"No AU available with these filters.",
        "aod.label":"✦ AU of the day","aod.open":"View details","aod.hide":"Hide AU of the day","aod.show":"Show AU of the day",
        "stats.title":"My statistics","stats.total":"AUs in the archive","stats.avg":"Average rating","stats.authors":"Authors","stats.progress":"Reading progress","stats.byShip":"By ship","stats.byStatus":"AU progress","stats.bySize":"By length","stats.topAuthors":"Authors with most AUs","stats.ratings":"My ratings","stats.tags":"My tags","stats.topRated":"Top rated","stats.favs":"Favorites","stats.none":"Nothing here yet.","stats.readOf":"read","stats.read":"Read"
    };
    Object.assign(TRANSLATIONS.pt, pt);
    Object.assign(TRANSLATIONS.en, en);

    const baseStatus = translateStatus;
    translateStatus = function(status){
        const key = { "Em hiato": "status.hiatus", "Abandonada": "status.dropped" }[status];
        return key ? t(key) : baseStatus(status);
    };
    applyTranslations();
})();

const TAG_KEYS = ["reler", "madrugada", "comfort", "chorar"];
const TAGS_STORAGE = "wenclair_tags";
function getAuTags(id){ return getStorage(TAGS_STORAGE)[id] || []; }
function toggleAuTag(id, tag){
    const all = getStorage(TAGS_STORAGE), list = new Set(all[id] || []);
    list.has(tag) ? list.delete(tag) : list.add(tag);
    all[id] = [...list];
    if (!all[id].length) delete all[id];
    saveStorage(TAGS_STORAGE, all);
}
