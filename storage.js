/* ===========================
   CHAVES DO LOCAL STORAGE
=========================== */

const STORAGE = {

    FAVORITES: "wenclair_favorites",

    STATUS: "wenclair_status",

    RATINGS: "wenclair_ratings"

};

/* ===========================
   FUNÇÕES GENÉRICAS
=========================== */

function getStorage(key) {

    const data = localStorage.getItem(key);

    return data ? JSON.parse(data) : {};

}

function saveStorage(key, value) {

    localStorage.setItem(

        key,

        JSON.stringify(value)

    );

}

/* ===========================
   FAVORITOS
=========================== */

function getFavorites() {

    return getStorage(STORAGE.FAVORITES);

}

function isFavorite(id) {

    return !!getFavorites()[id];

}

function toggleFavorite(id) {

    const favorites = getFavorites();

    if (favorites[id]) {

        delete favorites[id];

    } else {

        favorites[id] = true;

    }

    saveStorage(STORAGE.FAVORITES, favorites);

}

/* ===========================
   STATUS DE LEITURA
=========================== */

function getStatuses() {

    return getStorage(STORAGE.STATUS);

}

function getReadingStatus(id) {

    return getStatuses()[id] || "";

}

function setReadingStatus(id, status) {

    const statuses = getStatuses();

    statuses[id] = status;

    saveStorage(STORAGE.STATUS, statuses);

}

/* ===========================
   AVALIAÇÕES
=========================== */

function getRatings() {

    return getStorage(STORAGE.RATINGS);

}

function getRating(id) {

    return getRatings()[id] || 0;

}

function setRating(id, value) {

    const ratings = getRatings();

    ratings[id] = value;

    saveStorage(STORAGE.RATINGS, ratings);

}

/* ===========================
   CONTADORES
=========================== */

function favoriteCount() {

    return Object.keys(getFavorites()).length;

}

function readingCount(status) {

    const values = Object.values(getStatuses());

    return values.filter(s => s === status).length;

}

/* ===========================
   ESTATÍSTICAS
=========================== */

function updateStatistics() {

    const totalAus = document.getElementById("totalAus");

    const totalAuthors = document.getElementById("totalAuthors");

    const favoriteCounter = document.getElementById("favoriteCount");

    const readingCounter = document.getElementById("readingCount");

    if (totalAus)
        if (!totalAus.textContent || totalAus.textContent === "0") totalAus.textContent = aus.length;

    if (totalAuthors) {

        const authors = new Set(aus.flatMap(getAuAuthors).map(author => author.display));

        totalAuthors.textContent = authors.size;

    }

    if (favoriteCounter)
        favoriteCounter.textContent = favoriteCount();

    if (readingCounter)
        readingCounter.textContent = readingCount("lendo");

}

/* ===========================
   RESET (ÚTIL NO DESENVOLVIMENTO)
=========================== */

function clearArchiveData() {

    localStorage.removeItem(STORAGE.FAVORITES);

    localStorage.removeItem(STORAGE.STATUS);

    localStorage.removeItem(STORAGE.RATINGS);

}