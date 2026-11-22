
// Os 100 países presentes nos Relatórios de PB (4).
const countries = [
    "Alemanha",
    "Andorra",
    "Antígua e Barbuda",
    "Arábia Saudita",
    "Argentina",
    "Arménia",
    "Austrália",
    "África do Sul",
    "Bahrein",
    "Bangladesh",
    "Barbados",
    "Bélgica",
    "Bolívia",
    "Botswana",
    "Bósnia e Herzegovina",
    "Brasil",
    "Bulgária",
    "Burquina Faso",
    "Canadá",
    "Cazaquistão",
    "Chequia",
    "Chile",
    "China",
    "Colômbia",
    "Coreia do Sul",
    "Costa de Marfim",
    "Croácia",
    "Dinamarca",
    "El Salvador",
    "Equador",
    "Eritreia",
    "Escócia",
    "Eslováquia",
    "Eslovénia",
    "Espanha",
    "Estados Unidos da América",
    "Fiji",
    "França",
    "Gabão",
    "Gana",
    "Gâmbia",
    "Geórgia",
    "Grécia",
    "Guatemala",
    "Guiana",
    "Guiné",
    "Haiti",
    "Holanda",
    "Honduras",
    "Indonésia",
    "Inglaterra",
    "Irlanda",
    "Irlanda do Norte",
    "Itália",
    "Jamaica",
    "Japão",
    "Kuwait",
    "Laos",
    "Lesoto",
    "Libéria",
    "Líbia",
    "Macedónia do Norte",
    "Madagáscar",
    "Malawi",
    "Malásia",
    "Maldivas",
    "Maurícia",
    "Mauritânia",
    "México",
    "Micronésia",
    "Moldávia",
    "Mongólia",
    "Myanmar",
    "Nauru",
    "Nicarágua",
    "Níger",
    "Nova Zelândia",
    "Omã",
    "Palau",
    "Papua Nova Guiné",
    "Paraguai",
    "Polónia",
    "Portugal",
    "Qatar",
    "Quiribati",
    "República Democrática do Congo",
    "República do Congo",
    "São Marinho",
    "São Tomé e Príncipe",
    "Senegal",
    "Somália",
    "Suazilândia",
    "Suécia",
    "Tajiquistão",
    "Tonga",
    "Trindade e Tobago",
    "Turquia",
    "Uruguai",
    "Uzbequistão",
    "Vietname"
];

// Países que já têm uma página criada.
const countryPages = {
    "Palau": "palau.html",
    "Alemanha": "alemanha.html",
    "Andorra": "andorra.html",
    "Antígua e Barbuda": "antigua-e-barbuda.html",
    "Arábia Saudita": "arabia-saudita.html",
    "Argentina": "argentina.html",
    "Arménia": "armenia.html",
    "Austrália": "australia.html",
    "África do Sul": "africa-do-sul.html",
    "Bahrein": "bahrein.html",
    "Bangladesh": "bangladesh.html",
    "Barbados": "barbados.html",
    "Bélgica": "belgica.html",
    "Bolívia": "bolivia.html",
    "Botswana": "botswana.html",
    "Bósnia e Herzegovina": "bosnia-e-herzegovina.html",
    "Brasil": "brasil.html",
    "Bulgária": "bulgaria.html",
    "Burquina Faso": "burquina-faso.html",    
    "Canadá": "canada.html",
    "Cazaquistão": "cazaquistao.html",
    "Chequia": "chequia.html",
    "Chile": "chile.html",
    "China": "china.html",
    "Colômbia": "colombia.html",
    "Coreia do Sul": "coreia-do-sul.html",
    "Costa de Marfim": "costa-de-marfim.html",
    "Croácia": "croacia.html",
    "Dinamarca": "dinamarca.html",
    "El Salvador": "el-salvador.html",
    "Equador": "equador.html",
    "Eritreia": "eritreia.html",
    "Escócia": "escocia.html",
    "Eslováquia": "eslovaquia.html",
    "Eslovénia": "eslovenia.html",
    "Espanha": "espanha.html",
    "Estados Unidos da América": "estados-unidos-da-america.html",
    "Fiji": "fiji.html",
    "França": "franca.html",
    "Gabão": "gabao.html",
    "Gana": "gana.html",
    "Gâmbia": "gambia.html",
    "Geórgia": "georgia.html",
    "Grécia": "grecia.html",
    "Guatemala": "guatemala.html",
    "Guiana": "guiana.html",
    "Guiné": "guine.html",
    "Haiti": "haiti.html",
    "Holanda": "holanda.html",
    "Honduras": "honduras.html",
    "Indonésia": "indonesia.html",
    "Inglaterra": "inglaterra.html",
    "Irlanda": "irlanda.html",
    "Irlanda do Norte": "irlanda-do-norte.html",
    "Itália": "italia.html",
    "Jamaica": "jamaica.html",
    "Japão": "japao.html",
    "Kuwait": "kuwait.html",
    "Laos": "laos.html",
    "Lesoto": "lesoto.html",
    "Libéria": "liberia.html",
    "Líbia": "libia.html",
    "Macedónia do Norte": "macedonia-do-norte.html",
    "Madagáscar": "madagascar.html",
    "Malawi": "malawi.html",
    "Malásia": "malasia.html",
    "Maldivas": "maldivas.html",
    "Maurícia": "mauricia.html",
    "Mauritânia": "mauritania.html",
    "México": "mexico.html",
    "Micronésia": "micronesia.html",
    "Moldávia": "moldavia.html",
    "Mongólia": "mongolia.html",
    "Myanmar": "myanmar.html",
    "Nauru": "nauru.html",
    "Nicarágua": "nicaragua.html",
    "Níger": "niger.html",
    "Nova Zelândia": "nova-zelandia.html",
    "Omã": "oma.html",
    "Papua Nova Guiné": "papua-nova-guine.html",
    "Paraguai": "paraguai.html",
    "Polónia": "polonia.html",
    "Portugal": "portugal.html",
    "Qatar": "qatar.html",
    "Quiribati": "quiribati.html",
    "República Democrática do Congo": "republica-democratica-do-congo.html",
    "República do Congo": "republica-do-congo.html",
    "São Marinho": "sao-marinho.html",
    "São Tomé e Príncipe": "sao-tome-e-principe.html",
    "Senegal": "senegal.html",
    "Somália": "somalia.html",
    "Suazilândia": "suazilandia.html",
    "Suécia": "suecia.html",
    "Tajiquistão": "tajiquistao.html",
    "Tonga": "tonga.html",
    "Trindade e Tobago": "trindade-e-tobago.html",
    "Turquia": "turquia.html",
    "Uruguai": "uruguai.html",
    "Uzbequistão": "uzbequistao.html",
    "Vietname": "vietname.html"
};
const search = document.getElementById("search");
const results = document.getElementById("results");

// Permite pesquisar mesmo sem escrever os acentos.
function normalizeText(text) {
    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

if (search && results) {
    search.addEventListener("input", () => {
        const value = normalizeText(search.value.trim());

        results.innerHTML = "";

        if (value === "") return;

        const matches = countries.filter(country =>
            normalizeText(country).includes(value)
        );

        matches.forEach(country => {
            const result = document.createElement(
                countryPages[country] ? "a" : "div"
            );

            if (countryPages[country]) {
                result.href = countryPages[country];
                result.textContent = country + " — Perfil do país";
            } else {
                result.textContent = country + " — Perfil em construção";
            }

            result.className = "search-result";
            results.appendChild(result);
        });

        if (matches.length === 0) {
            const message = document.createElement("p");
            message.textContent = "Não foram encontrados resultados.";
            results.appendChild(message);
        }
    });
}

// ===== PÁGINAS DE NAVEGAÇÃO DA PB DATABASE =====

// Lista dos 18 Mundiais.
const worldCupList = document.getElementById("world-cup-list");

if (worldCupList) {
    for (let i = 1; i <= 18; i++) {
        const item = document.createElement("div");
        item.className = "list-item";

        const number = document.createElement("span");
        number.className = "list-number";
        number.textContent = `${i}.º`;

        const name = document.createElement("strong");
        name.textContent = `Mundial`;

        item.append(number, name);
        worldCupList.appendChild(item);
    }
}

// Lista dos torneios continentais.
const continentalList = document.getElementById("continental-list");

if (continentalList) {
    const continents = [
        "Africano",
        "Americano",
        "Asiático",
        "Europeu",
        "Oceânico"
    ];

    continents.forEach(continent => {
        const item = document.createElement("div");
        item.className = "list-item";

        const icon = document.createElement("span");
        icon.className = "list-number";
        icon.textContent = "🌍";

        const name = document.createElement("strong");
        name.textContent = `Torneio Continental ${continent}`;

        item.append(icon, name);
        continentalList.appendChild(item);
    });
}

// Lista alfabética dos países com os respetivos perfis.
const countryList = document.getElementById("country-list");

if (countryList) {
    const sortedCountries = [...countries].sort((a, b) =>
        a.localeCompare(b, "pt", { sensitivity: "base" })
    );

    sortedCountries.forEach(country => {
        const item = document.createElement(
            countryPages[country] ? "a" : "div"
        );

        item.className = "list-item";

        if (countryPages[country]) {
            item.href = countryPages[country];
        }

        const name = document.createElement("strong");
        name.textContent = country;

        const description = document.createElement("span");
        description.textContent = countryPages[country]
            ? "Ver perfil →"
            : "Perfil em construção";

        item.append(name, description);
        countryList.appendChild(item);
    });
}

// Página genérica para as secções ainda em finalização.
const comingSoonTitle = document.getElementById("coming-soon-title");

if (comingSoonTitle) {
    const params = new URLSearchParams(window.location.search);
    const section = params.get("secao") || "Esta secção";

    comingSoonTitle.textContent = section;
    document.title = `${section} | PB Database`;
}
const breadcrumbSection = document.getElementById("breadcrumb-section");

if (breadcrumbSection) {
    breadcrumbSection.textContent = section;
}