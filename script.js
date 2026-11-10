const aus = [
    {
        title: "Viper's Love",
        author: "@wenclairfield",
        description:
            "Enid cultiva um crush impossível em uma das clientes mais assíduas da cafeteria onde trabalha. Tudo porque a misteriosa garota parece ser a imagem cuspida e escarrada de sua crush literária, Viper de la Muerte.",
        tags: [
            "Coffee Shop",
            "Slow Burn",
            "Mystery",
            "Writer AU"
        ],
        tweet: "1617210391972483072",
        link: "https://x.com/wenclairfield/status/1617210391972483072?s=20"
    },

    {
        title: "Secret Letters",
        author: "@Lollipop_Raven",
        description:
            "Wednesday é uma escritora anônima de uma das maiores sagas de livros thriller e recebe cartas de seus leitores, mas apenas uma chama sua atenção. Enquanto isso, Enid envia cartas constantemente para a autora secreta até finalmente receber uma resposta.",
        tags: [
            "Anonymous Author",
            "Letters",
            "Book AU",
            "Slow Burn"
        ],
        tweet: "2054065328431247865",
        link: "https://x.com/Lollipop_Raven/status/2054065328431247865?s=20"
    }
];

const cards = document.getElementById("cards");
const template = document.getElementById("card-template");
const search = document.getElementById("search");
const trope = document.getElementById("trope");
const totalAus = document.getElementById("totalAus");

function criarCard(au) {

    const clone = template.content.cloneNode(true);

    clone.querySelector(".author").textContent = au.author;
    clone.querySelector(".title").textContent = au.title;
    clone.querySelector(".description").textContent = au.description;
    clone.querySelector(".readButton").href = au.link;

    const tags = clone.querySelector(".tags");

    au.tags.forEach(tag => {

        const span = document.createElement("span");
        span.textContent = tag;
        tags.appendChild(span);

    });

    // Tweet incorporado
    const tweet = clone.querySelector(".tweetEmbed");

    tweet.innerHTML = `
        <blockquote class="twitter-tweet">
            <a href="https://twitter.com/i/status/${au.tweet}"></a>
        </blockquote>
    `;

    cards.appendChild(clone);

}

function renderizar() {

    cards.innerHTML = "";

    const texto = search.value.toLowerCase();
    const filtro = trope.value;

    const resultado = aus.filter(au => {

        const encontrouTitulo = au.title.toLowerCase().includes(texto);

        const encontrouDescricao = au.description.toLowerCase().includes(texto);

        const encontrouAutor = au.author.toLowerCase().includes(texto);

        const encontrouTrope =
            filtro === "" || au.tags.includes(filtro);

        return (
            (encontrouTitulo ||
                encontrouDescricao ||
                encontrouAutor)
            &&
            encontrouTrope
        );

    });

    resultado.forEach(criarCard);

    totalAus.textContent = resultado.length;

    // Recarrega os embeds do Twitter
    if (window.twttr && window.twttr.widgets) {
        window.twttr.widgets.load();
    }

}

search.addEventListener("input", renderizar);
trope.addEventListener("change", renderizar);

document.getElementById("explore").addEventListener("click", () => {

    document.querySelector(".cards").scrollIntoView({
        behavior: "smooth"
    });

});

renderizar();