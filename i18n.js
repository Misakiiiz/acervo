const LANGUAGE_KEY = "jemmaverso_language";
const TRANSLATIONS = {
    pt: {
        "page.homeTitle": "JemmaVerso Archive",
        "page.aboutTitle": "Sobre | JemmaVerso Archive",
        "page.fanficsTitle": "Acervo de fanfics | JemmaVerso Archive",
        "common.home": "Início",
        "common.backHome": "← Voltar ao acervo",
        "common.openMenu": "Abrir menu",
        "common.closeMenu": "Fechar menu",
        "language.label": "Idioma",
        "nav.all": "Todas",
        "nav.favorites": "♥ Favoritas",
        "nav.reading": "Lendo",
        "nav.paused": "Pausadas",
        "nav.completed": "Concluídas",
        "nav.unread": "Não lidas",
        "filter.ship": "Ship",
        "filter.author": "Autor",
        "filter.publication": "Andamento",
        "filter.size": "Tamanho",
        "filter.trope": "Trope",
        "filter.all": "Todos",
        "filter.clear": "Limpar filtros",
        "status.ongoing": "Em andamento",
        "status.completed": "Concluída",
        "status.unknown": "Não informado",
        "archive.authors": "autores no acervo",
        "archive.about": "✦ Sobre o acervo",
        "archive.fanfics": "✦ Acervo de fanfics",
        "archive.aus": "AUs",
        "search.placeholder": "Buscar por título ou autor...",
        "empty.results": "Nenhuma AU encontrada com esses filtros.",
        "modal.favorite": "♡ Favoritar",
        "modal.favorited": "♥ Favorita",
        "modal.synopsis": "Sinopse",
        "modal.reading": "Minha leitura",
        "modal.read": "Ler no X ↗",
        "modal.readSite": "Ler no site ↗",
        "synopsisInPost": "Sinopse no post original, logo abaixo.",
        "noSynopsis": "Sinopse ainda não cadastrada.",
        "size.long": "Long",
        "size.short": "Short",
        "size.oneshot": "One-shot",
        "size.unknown": "Não informado",
        "about.pageTitle": "⋆˖⁺‧₊☽ Sobre o JemmaVerso Archive ☾₊‧⁺˖⋆",
        "about.greeting": "Oiie! Raven aqui! Seja muito bem-vindo(a/e) ao JemmaVerso Archive! Primeiramente, gostaria de agradecer cada um dos autores que mantêm esse universo vivo e por todo carinho por suas criações.",
        "about.topics": "Nesta página",
        "about.topicConcept": "O que é JemmaVerso?",
        "about.topicProgress": "Progresso de leitura",
        "about.topicAuthors": "Autores",
        "about.topicContact": "Contato",
        "about.intro1": "O JemmaVerso é um acervo dedicado a reunir histórias de diferentes autores, universos e ships em um só lugar. A ideia é facilitar a descoberta de novas leituras e criar um cantinho onde você possa encontrar suas próximas leituras sem precisar ficar procurando por toda parte.",
        "about.intro2": "O acervo é atualizado constantemente, então volte quando quiser para conferir alguma novidade!",
        "about.conceptTitle": "✮⋆˙ O que é “JemmaVerso”?",
        "about.conceptIntro": "Se você caiu de paraquedas, não se preocupe! Aqui vai uma pequena explicação:",
        "about.conceptDescription": "JemmaVerso é um universo de histórias como fanfics e AUs que envolvem o ship de Jenna Ortega e Emma Myers.",
        "about.shipExamples": "Abaixo há alguns exemplos dos ships:",
        "about.shipWenclair": "<b>Wenclair:</b> Wednesday Addams e Enid Sinclair — obra: Wednesday (2022)",
        "about.shipSweetcc": "<b>SweetCC:</b> Cairo Sweet e CC Walker — obras: Miller's Girl e Family Switch",
        "about.shipPiptara": "<b>PipTara:</b> Pippa Fitz-Amobi e Tara Carpenter — obras: A Good Girl's Guide to Murder e Scream 5/6",
        "about.shipPipvada": "<b>PipVada:</b> Pippa Fitz-Amobi e Vada Cavell — obras: A Good Girl's Guide to Murder e The Fallout",
        "about.moreShips": "Existem muitos outros ships no acervo, então fique à vontade para explorar e descobrir novas combinações!",
        "about.respect": "<i><b>Um detalhe importante! Respeito com todos os autores e suas criações é essencial. Além disso, o respeito com as próprias atrizes é fundamental. Por favor, evite qualquer conteúdo que possa ser ofensivo ou invasivo.</b></i>",
        "about.progressTitle": "✮⋆˙ Sobre o progresso de leitura",
        "about.progressIntro": "Para facilitar sua experiência, o acervo conta com um sistema de salvamento de progresso. Assim, você pode acompanhar quais histórias já começou, onde parou e continuar sua leitura de onde deixou.",
        "about.progressImportant": "<strong>Algumas coisinhas importantes:</strong>",
        "about.progressLocal": "Seu progresso é salvo localmente no navegador que você está utilizando.",
        "about.progressDevice": "Se você limpar os dados do navegador ou acessar o acervo por outro dispositivo, suas informações não serão mantidas automaticamente.",
        "about.progressTransfer": "Para transferir seu progresso, basta exportar os dados e importá-los no outro dispositivo.",
        "about.exportTitle": "Como exportar ou importar?",
        "about.exportDescription": "Na barra lateral, você encontrará as opções <em>Exportar progresso</em> e <em>Importar progresso</em>. Ao exportar, será gerado um arquivo JSON com suas informações de leitura. Guarde esse arquivo e use a opção de importação para recuperar seu progresso em outro dispositivo.",
        "about.resetDescription": "Também existe a opção <em>Resetar progresso</em>, caso queira começar do zero. Atenção: essa ação apagará todos os seus registros de leitura salvos no navegador.",
        "about.authorsTitle": "✮⋆˙ Sou autor, posso adicionar minha história?",
        "about.authorsIntro": "Mas é claro! O JemmaVerso também é um espaço para divulgar o trabalho de outros autores e ajudar suas histórias a encontrarem novos leitores.",
        "about.authorsRequest": "Se você tem uma história que gostaria de ver por aqui, pode entrar em contato comigo! Para adicioná-la ao acervo, preciso apenas de:",
        "about.storyLink": "Link da história;",
        "about.authorName": "Nome do autor;",
        "about.shipName": "Nome do ship.",
        "about.optionalSynopsis": "Uma sinopse ou breve descrição também é muito bem-vinda, mas não é obrigatória.",
        "about.removal": "<i><b>E, caso você seja um autor que já tenha uma história no acervo e queira solicitar sua remoção, é só me chamar também!</b></i>",
        "about.contactTitle": "✮⋆˙ Contato",
        "about.contactIntro": "Encontrou algum problema? Tem alguma sugestão, dúvida ou simplesmente quer conversar sobre o acervo? Minha DM está aberta!",
        "about.contactMessage": "Seja para indicar uma história, solicitar uma alteração ou perguntar qualquer coisinha, pode falar comigo.",
        "about.contactButton": "Ir para DM de Lollipop_Raven",
        "about.thanks": "<strong>Obrigada por fazer parte desse pequeno universo de histórias!</strong>",
        "about.goodbye": "Espero que você encontre leituras que te acompanhem para sempre.",
        "about.withLove": "Com carinho,",
        "about.imageAlt": "Ilustração de Wenclair",
        "fanfics.title": "Acervo de fanfics",
        "fanfics.construction": "Em construção",
        "fanfics.description": "Estamos preparando um cantinho especial para reunir ainda mais histórias. Volte em breve! ♡"
    },
    en: {
        "page.homeTitle": "JemmaVerso Archive",
        "page.aboutTitle": "About | JemmaVerso Archive",
        "page.fanficsTitle": "Fanfiction archive | JemmaVerso Archive",
        "common.home": "Home",
        "common.backHome": "← Back to the archive",
        "common.openMenu": "Open menu",
        "common.closeMenu": "Close menu",
        "language.label": "Language",
        "nav.all": "All",
        "nav.favorites": "♥ Favorites",
        "nav.reading": "Reading",
        "nav.paused": "Paused",
        "nav.completed": "Completed",
        "nav.unread": "Unread",
        "filter.ship": "Ship",
        "filter.author": "Author",
        "filter.publication": "Publication",
        "filter.size": "Length",
        "filter.trope": "Trope",
        "filter.all": "All",
        "filter.clear": "Clear filters",
        "status.ongoing": "Ongoing",
        "status.completed": "Completed",
        "status.unknown": "Not specified",
        "archive.authors": "authors in the archive",
        "archive.about": "✦ About the archive",
        "archive.fanfics": "✦ Fanfiction archive",
        "archive.aus": "AUs",
        "search.placeholder": "Search by title or author...",
        "empty.results": "No AUs match these filters.",
        "modal.favorite": "♡ Add to favorites",
        "modal.favorited": "♥ Favorited",
        "modal.synopsis": "Synopsis",
        "modal.reading": "My reading status",
        "modal.read": "Read on X ↗",
        "modal.readSite": "Read on site ↗",
        "synopsisInPost": "The synopsis is in the original post below.",
        "noSynopsis": "No synopsis has been added yet.",
        "size.long": "Long",
        "size.short": "Short",
        "size.oneshot": "One-shot",
        "size.unknown": "Not specified",
        "about.pageTitle": "⋆˖⁺‧₊☽ About JemmaVerso Archive ☾₊‧⁺˖⋆",
        "about.greeting": "Hi! Raven here! Welcome to the JemmaVerso Archive! First, I'd like to thank every author who keeps this universe alive and for all the love you put into your creations.",
        "about.topics": "On this page",
        "about.topicConcept": "What is JemmaVerso?",
        "about.topicProgress": "Reading progress",
        "about.topicAuthors": "Authors",
        "about.topicContact": "Contact",
        "about.intro1": "JemmaVerso is an archive that brings together stories by different authors, from different universes and ships, all in one place. The idea is to make it easier to discover new reads and create a cozy corner where you can find your next favorite stories without searching everywhere.",
        "about.intro2": "The archive is updated regularly, so come back anytime to check what's new!",
        "about.conceptTitle": "✮⋆˙ What is “JemmaVerso”?",
        "about.conceptIntro": "If you stumbled upon this page, don't worry! Here's a quick explanation:",
        "about.conceptDescription": "JemmaVerso is a universe of stories, such as fanfiction and AUs, featuring the ship of Jenna Ortega and Emma Myers.",
        "about.shipExamples": "Here are a few examples of ships:",
        "about.shipWenclair": "<b>Wenclair:</b> Wednesday Addams and Enid Sinclair — from Wednesday (2022)",
        "about.shipSweetcc": "<b>SweetCC:</b> Cairo Sweet and CC Walker — from Miller's Girl and Family Switch",
        "about.shipPiptara": "<b>PipTara:</b> Pippa Fitz-Amobi and Tara Carpenter — from A Good Girl's Guide to Murder and Scream 5/6",
        "about.shipPipvada": "<b>PipVada:</b> Pippa Fitz-Amobi and Vada Cavell — from A Good Girl's Guide to Murder and The Fallout",
        "about.moreShips": "There are many more ships in the archive, so feel free to explore and discover new pairings!",
        "about.respect": "<i><b>One important note: please respect all authors and their creations. Respect for the actresses themselves is essential too. Please avoid content that could be offensive or invasive.</b></i>",
        "about.progressTitle": "✮⋆˙ About reading progress",
        "about.progressIntro": "To make things easier, the archive saves your reading progress. You can keep track of the stories you've started, where you stopped, and pick up where you left off.",
        "about.progressImportant": "<strong>A few important things:</strong>",
        "about.progressLocal": "Your progress is saved locally in the browser you're using.",
        "about.progressDevice": "If you clear your browser data or visit the archive from another device, your information won't be transferred automatically.",
        "about.progressTransfer": "To transfer your progress, export your data and import it on the other device.",
        "about.exportTitle": "How do I export or import?",
        "about.exportDescription": "In the sidebar, you'll find the <em>Export progress</em> and <em>Import progress</em> options. Exporting creates a JSON file with your reading information. Keep that file and use the import option to restore your progress on another device.",
        "about.resetDescription": "There's also a <em>Reset progress</em> option if you'd like to start over. Please note: this will erase all reading records saved in your browser.",
        "about.authorsTitle": "✮⋆˙ I'm an author. Can I add my story?",
        "about.authorsIntro": "Of course! JemmaVerso is also a place to share other authors' work and help their stories find new readers.",
        "about.authorsRequest": "If you have a story you'd like to see here, get in touch! To add it to the archive, I just need:",
        "about.storyLink": "Story link;",
        "about.authorName": "Author name;",
        "about.shipName": "Ship name.",
        "about.optionalSynopsis": "A synopsis or short description is also welcome, but not required.",
        "about.removal": "<i><b>If you're an author with a story in the archive and would like it removed, just reach out to me too!</b></i>",
        "about.contactTitle": "✮⋆˙ Contact",
        "about.contactIntro": "Found a problem? Have a suggestion or question, or just want to chat about the archive? My DMs are open!",
        "about.contactMessage": "Whether you'd like to recommend a story, request a change, or ask anything at all, feel free to message me.",
        "about.contactButton": "Message Lollipop_Raven",
        "about.thanks": "<strong>Thank you for being part of this little universe of stories!</strong>",
        "about.goodbye": "I hope you find stories that stay with you long after the last page.",
        "about.withLove": "With love,",
        "about.imageAlt": "Wenclair illustration",
        "fanfics.title": "Fanfiction archive",
        "fanfics.construction": "Under construction",
        "fanfics.description": "We're preparing a special place to gather even more stories. Come back soon! ♡"
    },
    es: {
        "page.homeTitle": "JemmaVerso Archive",
        "page.aboutTitle": "Acerca de | JemmaVerso Archive",
        "page.fanficsTitle": "Archivo de fanfics | JemmaVerso Archive",
        "common.home": "Inicio",
        "common.backHome": "← Volver al archivo",
        "common.openMenu": "Abrir menú",
        "common.closeMenu": "Cerrar menú",
        "language.label": "Idioma",
        "nav.all": "Todas",
        "nav.favorites": "♥ Favoritas",
        "nav.reading": "Leyendo",
        "nav.paused": "Pausadas",
        "nav.completed": "Terminadas",
        "nav.unread": "Sin leer",
        "filter.ship": "Ship",
        "filter.author": "Autor",
        "filter.publication": "Estado",
        "filter.size": "Extensión",
        "filter.trope": "Trope",
        "filter.all": "Todos",
        "filter.clear": "Limpiar filtros",
        "status.ongoing": "En curso",
        "status.completed": "Terminada",
        "status.unknown": "Sin información",
        "archive.authors": "autores en el archivo",
        "archive.about": "✦ Acerca del archivo",
        "archive.fanfics": "✦ Archivo de fanfics",
        "archive.aus": "AUs",
        "search.placeholder": "Buscar por título o autor...",
        "empty.results": "No se encontraron AUs con estos filtros.",
        "modal.favorite": "♡ Añadir a favoritas",
        "modal.favorited": "♥ Favorita",
        "modal.synopsis": "Sinopsis",
        "modal.reading": "Mi lectura",
        "modal.read": "Leer en X ↗",
        "modal.readSite": "Leer en el sitio ↗",
        "synopsisInPost": "La sinopsis está en la publicación original, abajo.",
        "noSynopsis": "Todavía no hay una sinopsis registrada.",
        "size.long": "Long",
        "size.short": "Short",
        "size.oneshot": "One-shot",
        "size.unknown": "Sin información",
        "about.pageTitle": "⋆˖⁺‧₊☽ Acerca de JemmaVerso Archive ☾₊‧⁺˖⋆",
        "about.greeting": "¡Hola! ¡Raven por aquí! ¡Te doy la bienvenida a JemmaVerso Archive! Primero, quiero agradecer a cada autor que mantiene vivo este universo y todo el cariño que pone en sus creaciones.",
        "about.topics": "En esta página",
        "about.topicConcept": "¿Qué es JemmaVerso?",
        "about.topicProgress": "Progreso de lectura",
        "about.topicAuthors": "Autores",
        "about.topicContact": "Contacto",
        "about.intro1": "JemmaVerso es un archivo que reúne historias de diferentes autores, universos y ships en un solo lugar. La idea es facilitar el descubrimiento de nuevas lecturas y crear un rincón donde puedas encontrar tus próximas historias favoritas sin tener que buscar por todas partes.",
        "about.intro2": "El archivo se actualiza constantemente, ¡así que vuelve cuando quieras para ver las novedades!",
        "about.conceptTitle": "✮⋆˙ ¿Qué es “JemmaVerso”?",
        "about.conceptIntro": "Si llegaste aquí por casualidad, ¡no te preocupes! Aquí tienes una breve explicación:",
        "about.conceptDescription": "JemmaVerso es un universo de historias, como fanfics y AUs, sobre el ship de Jenna Ortega y Emma Myers.",
        "about.shipExamples": "Aquí tienes algunos ejemplos de ships:",
        "about.shipWenclair": "<b>Wenclair:</b> Wednesday Addams y Enid Sinclair — de Wednesday (2022)",
        "about.shipSweetcc": "<b>SweetCC:</b> Cairo Sweet y CC Walker — de Miller's Girl y Family Switch",
        "about.shipPiptara": "<b>PipTara:</b> Pippa Fitz-Amobi y Tara Carpenter — de A Good Girl's Guide to Murder y Scream 5/6",
        "about.shipPipvada": "<b>PipVada:</b> Pippa Fitz-Amobi y Vada Cavell — de A Good Girl's Guide to Murder y The Fallout",
        "about.moreShips": "Hay muchos otros ships en el archivo, ¡así que explora y descubre nuevas parejas!",
        "about.respect": "<i><b>Un detalle importante: respeta a todos los autores y sus creaciones. También es fundamental respetar a las actrices. Por favor, evita cualquier contenido ofensivo o invasivo.</b></i>",
        "about.progressTitle": "✮⋆˙ Sobre el progreso de lectura",
        "about.progressIntro": "Para facilitar tu experiencia, el archivo guarda tu progreso de lectura. Así puedes seguir las historias que empezaste, recordar dónde las dejaste y continuar desde allí.",
        "about.progressImportant": "<strong>Algunas cosas importantes:</strong>",
        "about.progressLocal": "Tu progreso se guarda localmente en el navegador que estás usando.",
        "about.progressDevice": "Si borras los datos del navegador o accedes desde otro dispositivo, tu información no se transferirá automáticamente.",
        "about.progressTransfer": "Para transferir tu progreso, exporta los datos e impórtalos en el otro dispositivo.",
        "about.exportTitle": "¿Cómo exportar o importar?",
        "about.exportDescription": "En la barra lateral encontrarás las opciones <em>Exportar progreso</em> e <em>Importar progreso</em>. Al exportar, se crea un archivo JSON con tu información de lectura. Guárdalo y usa la opción de importación para recuperar tu progreso en otro dispositivo.",
        "about.resetDescription": "También existe la opción <em>Restablecer progreso</em> para empezar de cero. Atención: esta acción borrará todos tus registros de lectura guardados en el navegador.",
        "about.authorsTitle": "✮⋆˙ Soy autor, ¿puedo añadir mi historia?",
        "about.authorsIntro": "¡Claro que sí! JemmaVerso también es un espacio para compartir el trabajo de otros autores y ayudar a que sus historias encuentren nuevos lectores.",
        "about.authorsRequest": "Si tienes una historia que te gustaría ver aquí, ¡puedes contactarme! Para añadirla al archivo, solo necesito:",
        "about.storyLink": "Enlace de la historia;",
        "about.authorName": "Nombre del autor;",
        "about.shipName": "Nombre del ship.",
        "about.optionalSynopsis": "Una sinopsis o breve descripción también es bienvenida, pero no es obligatoria.",
        "about.removal": "<i><b>Si ya tienes una historia en el archivo y quieres solicitar que la retire, también puedes escribirme.</b></i>",
        "about.contactTitle": "✮⋆˙ Contacto",
        "about.contactIntro": "¿Encontraste un problema? ¿Tienes una sugerencia, una duda o simplemente quieres hablar sobre el archivo? ¡Mis mensajes están abiertos!",
        "about.contactMessage": "Puedes escribirme para recomendar una historia, solicitar un cambio o preguntar lo que quieras.",
        "about.contactButton": "Escribir a Lollipop_Raven",
        "about.thanks": "<strong>¡Gracias por formar parte de este pequeño universo de historias!</strong>",
        "about.goodbye": "Espero que encuentres historias que te acompañen incluso después de la última página.",
        "about.withLove": "Con cariño,",
        "about.imageAlt": "Ilustración de Wenclair",
        "fanfics.title": "Archivo de fanfics",
        "fanfics.construction": "En construcción",
        "fanfics.description": "Estamos preparando un espacio especial para reunir aún más historias. ¡Vuelve pronto! ♡"
    }
};

Object.assign(TRANSLATIONS, EXTRA_TRANSLATIONS);

function getLanguage() {
    const saved = localStorage.getItem(LANGUAGE_KEY);
    return Object.prototype.hasOwnProperty.call(TRANSLATIONS, saved) ? saved : "pt";
}

function t(key) {
    return TRANSLATIONS[getLanguage()][key] || TRANSLATIONS.pt[key] || key;
}

function translateStatus(status) {
    const keys = { "Em andamento": "status.ongoing", "Concluída": "status.completed", "Não informado": "status.unknown" };
    return keys[status] ? t(keys[status]) : status;
}

function translateSize(size) {
    const keys = { Long: "size.long", Short: "size.short", "One-shot": "size.oneshot", "Não informado": "size.unknown" };
    return keys[size] ? t(keys[size]) : size;
}

function translateReadingStatus(status) {
    const keys = { naolido: "nav.unread", lendo: "nav.reading", pausada: "nav.paused", lido: "nav.completed" };
    return keys[status] ? t(keys[status]) : status;
}

function translateTitle(au) {
    const language = getLanguage();
    if (language === "pt" || !PORTUGUESE_TITLE_IDS.has(au.id)) return au.title;
    return TITLE_TRANSLATIONS[au.id]?.[language] || TITLE_TRANSLATIONS_EXTRA[au.id]?.[language] || au.title;
}

function translateSynopsis(au) {
    const language = getLanguage();
    return language === "pt" ? au.description : SYNOPSIS_TRANSLATIONS[au.id]?.[language] || au.description;
}

function applyTranslations() {
    const language = getLanguage();
    document.documentElement.lang = language === "pt" ? "pt-BR" : language;
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const value = t(element.dataset.i18n);
        if (/<\/?[a-z][^>]*>/i.test(value)) element.innerHTML = value;
        else element.textContent = value;
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
        element.placeholder = t(element.dataset.i18nPlaceholder);
    });
    document.querySelectorAll("[data-i18n-aria-label]").forEach(element => {
        element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel));
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(element => {
        element.alt = t(element.dataset.i18nAlt);
    });
    document.querySelectorAll("#sizeFilter option").forEach(option => {
        if (option.value) option.textContent = translateSize(option.value);
    });
    document.querySelectorAll("#languageSelector").forEach(select => {
        select.value = language;
    });
    const title = document.querySelector("title[data-i18n]");
    if (title) document.title = t(title.dataset.i18n);
}

function toggleSidebar(forceOpen) {
    const sidebar = document.getElementById("sidebar");
    if (!sidebar) return;
    const open = typeof forceOpen === "boolean" ? forceOpen : !sidebar.classList.contains("open");
    sidebar.classList.toggle("open", open);
    document.body.classList.toggle("sidebar-open", open);
    document.body.classList.toggle("sidebar-closed", !open);
    document.getElementById("sidebarBackdrop").classList.toggle("visible", open && window.matchMedia("(max-width: 800px)").matches);
    const menuButton = document.getElementById("menuBtn");
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", t(open ? "common.closeMenu" : "common.openMenu"));
    sidebar.setAttribute("aria-hidden", String(!open));
    sidebar.inert = !open;
}

document.querySelectorAll("#languageSelector").forEach(select => {
    select.addEventListener("change", () => {
        localStorage.setItem(LANGUAGE_KEY, select.value);
        applyTranslations();
        if (typeof filterAus === "function") filterAus();
        if (typeof openAu !== "undefined" && openAu) showAu(openAu);
    });
});
document.addEventListener("keydown", event => {
    if (event.key === "Escape") toggleSidebar(false);
});
applyTranslations();
