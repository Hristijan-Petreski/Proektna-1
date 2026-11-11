var bazaGradovi = {
    "Ohrid": {
        ime: "Ohrid",
        statia: "Охрид е бисерот на Македонија со богата историја, езерото и старата архитектура.",
        napisi: "Охрид е познат по 365 цркви, по една за секој ден во годината.",
        top10: [
            "Св. Јован Канео", "Самуилова Тврдина", "Плаошник", "Св. Наум", 
            "Охридска Чаршија", "Залив на Коските (Bay of Bones)", "Билјанини Извори", 
            "Градски Парк", "Галичица", "Куќа на Робевци"
        ],
        sliki: [
            {
                url: "https://images.pexels.com/photos/35259050/pexels-photo-35259050.jpeg?cs=srgb&dl=pexels-yavuz-selim-ozturk-2158256783-35259050.jpg&fm=jpg",
                likes: 24,
                dislikes: 2,
                komentari: ["Прекрасно место на езерото!", "Самуиловата тврдина е неверојатна!"]
            },
            {
                url: "https://images.pexels.com/photos/32937523/pexels-photo-32937523.jpeg?cs=srgb&dl=pexels-valentin-cvetanoski-2147958923-32937523.jpg&fm=jpg",
                likes: 12,
                dislikes: 1,
                komentari: ["Одличен поглед од Канео!"]
            }
        ]
    },
    "Milano": {
        ime: "Milano",
        statia: "Милано е светска метропола на модата, дизајнот и италијанската култура.",
        napisi: "Милано е дом на славната слика Последната Вечера од Леонардо да Винчи.",
        top10: [
            "Дуомо ди Милано", "Галерија Виторио Емануеле II", "Театро ала Скала", 
            "Кастело Сфорцеско", "Санта Марија деле Грацие", "Брера Арт Галерија", 
            "Навигли Канал", "Парко Семпионе", "Сан Сиро Стадион", "Квадрилатеро дела Мода"
        ],
        sliki: [
            {
                url: "https://images.unsplash.com/photo-1513581166391-887a96ddeafd?w=400",
                likes: 18,
                dislikes: 1,
                komentari: ["Дуомо е фасцинантна катедрала!", "Одлично место за шопинг."]
            },
            {
                url: "https://cdn.shopify.com/s/files/1/0182/8937/files/compras-en-milan_1024x1024.jpg?v=1584528264",
                likes: 8,
                dislikes: 0,
                komentari: ["Прекрасна архитектура."]
            }
        ]
    },
    "Pariz": {
        ime: "Pariz",
        statia: "Париз е градот на светлината, романтиката, уметноста и врвната храна.",
        napisi: "Париз има над 450 паркови и градини кои нудат вистинско уживање.",
        top10: [
            "Ајфелова Кула", "Музејот Лувр", "Катедралата Нотр Дам", "Триумфална Капија", 
            "Сакр Кер", "Музеј Орсеј", "Крстарење по Сена", "Палата Гарние", 
            "Луксембуршки Градини", "Монмартр"
        ],
        sliki: [
            {
                url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400",
                likes: 35,
                dislikes: 3,
                komentari: ["Ајфеловата кула во живо е магична!"]
            },
            {
                url: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400",
                likes: 20,
                dislikes: 2,
                komentari: ["Лувр бара цел ден за посета."]
            }
        ]
    }
};

function najaviSe() {
    var email = document.getElementById("korisnicki_email").value;
    var lozinka = document.getElementById("lozinka").value;
    if (email == "hristijanpetreski2005@gmail.com" && lozinka == "12345") {
        window.alert("Успешно сте најавени!");
    }
    else {
        window.alert("Грешка при најава!");
    }
}

function dodadiDestinacija() {
    var ime = document.getElementById("ime").value;
    var kategorija = document.getElementById("kategorija").value;
    var cena = document.getElementById("cena").value;
    var destinacii = document.getElementById("destinacii");

    if (ime === "" || cena === "") return;

    var novaKarticka = `
    <div id="${ime}" class="col-md-4 mb-4 destinacija-item" data-ime="${ime}" data-cena="${cena}" data-kategorija="${kategorija}"> 
        <div class="card h-100 shadow-sm border-0">
            <div class="card-body">
                <h5 class="card-title text-primary">${ime}</h5>
                <p class="card-text mb-1"><strong>Цена:</strong> ${cena}$</p>
                <p class="card-text"><strong>Категорија:</strong> ${kategorija}</p>
            </div>
            <div class="card-footer bg-white border-top-0 d-flex justify-content-between">
                <button class="btn btn-sm btn-info" onclick="otvoriGrad(this)">Повеќе Инфо</button>
                <button class="btn btn-sm btn-danger" onclick="izbrisiDestinacija(this)">Избриши</button>
            </div>
        </div>
    </div>`;
    destinacii.insertAdjacentHTML("beforeend", novaKarticka);

    if (!bazaGradovi[ime]) {
        bazaGradovi[ime] = {
            ime: ime,
            statia: "Nema vneseno statija za ovoj grad.",
            napisi: "Nema vneseno napis za ovoj grad.",
            top10: ["Nema vneseno atrakcii"],
            sliki: []
        };
    }
}

function izbrisiDestinacija(button) {
    var karticka = button.closest(".destinacija-item");
    karticka.remove();
}

function presmetajVkupniTrosoci() {
    var destinacii = document.getElementById("destinacii").getElementsByClassName("destinacija-item");
    var vkupno = 0;
    for (var i = 0; i < destinacii.length; i++) {
        var cena = parseFloat(destinacii[i].dataset.cena);
        if (!isNaN(cena)) {
            vkupno += cena;
        }
    }
    document.getElementById("vkupni_trosoci").textContent = vkupno;
}

function filtrirajDestinacii() {
    var kategorija = document.getElementById("kategorija_filtriraj").value.toLowerCase();
    var maksimalenbudzet = parseInt(document.getElementById("maksimalen_budzet").value);
    var destinacii = document.getElementById("destinacii").getElementsByClassName("destinacija-item");

    for (var i = 0; i < destinacii.length; i++) {
        var cena = parseInt(destinacii[i].dataset.cena);
        var kategorijaDestinacija = destinacii[i].dataset.kategorija.toLowerCase();
        var katMatch = (kategorija === "" || kategorijaDestinacija == kategorija);
        var budzetMatch = (isNaN(maksimalenbudzet) || cena <= maksimalenbudzet);
        if (katMatch && budzetMatch) {
            destinacii[i].style.display = "";
        } else {
            destinacii[i].style.display = "none";
        }
    }
}

function pratiAnketa(){
    window.alert("Вашата анкета е пратена, ви благодариме за одвоеното време!");
}

function otvoriGrad(button) {
    var karticka = button.closest(".destinacija-item");
    var ime = karticka.dataset.ime;
    var grad = bazaGradovi[ime];
    var kontejner = document.getElementById("prikaz_detali");
    var sliki = grad.sliki;
    var top10 = grad.top10;
    
    var html = '<div class="card shadow-sm border-info mt-4 p-4">';
    html += '<div class="d-flex justify-content-between align-items-center mb-3"> <h2 class="text-info m-0">' + ime + '</h2> <button class="btn btn-danger" onclick="zatvori(this)">X Затвори</button> </div><hr>';
    
    html += '<div class="row">';
    
    // Лева колона (Инфо)
    html += '<div class="col-md-5">';
    html += '<h4>Топ 10</h4><ul>';
    for (var i = 0; i < top10.length; i++) {
        html += '<li>' + top10[i] + '</li>';
    }
    html += '</ul><hr>';
    html += '<h4>Статии</h4><p>' + grad.statia + '</p><hr>';
    html += '<h4>Написи</h4><p>' + grad.napisi + '</p>';
    html += '</div>';

    // Десна колона (Галерија)
    html += '<div class="col-md-7">';
    html += '<h4>Галерија и коментари</h4>';
    for (var i = 0; i < sliki.length; i++) {
        var slika = sliki[i];
        html += '<div class="card mb-3 border-0 shadow-sm">';
        html += '<img src="' + slika.url + '" class="card-img-top rounded" alt="Slika">';
        html += '<div class="card-body">';
        html += '<div class="mb-3">';
        html += '<button class="btn btn-sm btn-outline-success mr-2" onclick="likeSlika(\'' + ime + '\', ' + i + ')">👍 Like <span class="badge badge-success" id="like_' + ime + '_' + i + '">' + slika.likes + '</span></button>';
        html += '<button class="btn btn-sm btn-outline-danger" onclick="dislikeSlika(\'' + ime + '\', ' + i + ')">👎 Dislike <span class="badge badge-danger" id="dislike_' + ime + '_' + i + '">' + slika.dislikes + '</span></button>';
        html += '</div>';
        
        html += '<h6 class="text-muted">Коментари:</h6>';
        html += '<div id="komentari_' + ime + '_' + i + '" class="bg-light p-2 mb-2 rounded" style="max-height: 150px; overflow-y: auto;">';
        for (var j = 0; j < slika.komentari.length; j++) {
            html += '<p class="small mb-1 border-bottom pb-1">💬 ' + slika.komentari[j] + '</p>';
        }
        html += '</div>';
        
        html += '<div class="input-group input-group-sm">';
        html += '<input type="text" class="form-control" placeholder="Додади коментар" id="novKomentar_' + ime + '_' + i + '">';
        html += '<div class="input-group-append">';
        html += '<button class="btn btn-info" onclick="dodadiKomentar(\'' + ime + '\', ' + i + ')">Испрати</button>';
        html += '</div></div>';
        
        html += '</div></div>';
    }
    html += '</div>'; // Крај на десна колона
    
    html += '</div></div>'; // Крај на row и главен card
    
    kontejner.innerHTML = html;
    kontejner.style.display = "block";
    
    // Скролај до деталите
    kontejner.scrollIntoView({ behavior: 'smooth' });
}

function zatvori(button){
    var x = document.getElementById("prikaz_detali");
    x.style.display="none";
}

function likeSlika(ime, slikaindex){
    bazaGradovi[ime].sliki[slikaindex].likes++;
    document.getElementById("like_" + ime + "_" + slikaindex).textContent = bazaGradovi[ime].sliki[slikaindex].likes;
}

function dislikeSlika(ime, slikaindex){
    bazaGradovi[ime].sliki[slikaindex].dislikes++;
    document.getElementById("dislike_" + ime + "_" + slikaindex).textContent = bazaGradovi[ime].sliki[slikaindex].dislikes;
}

function dodadiKomentar(ime, slikaindex){
    var inputPole = document.getElementById("novKomentar_" + ime + "_" + slikaindex);
    var komentar = inputPole.value;
    if (komentar !== "") {
        bazaGradovi[ime].sliki[slikaindex].komentari.push(komentar);
        var divKomentari = document.getElementById("komentari_" + ime + "_" + slikaindex);
        divKomentari.innerHTML += '<p class="small mb-1 border-bottom pb-1">💬 ' + komentar + '</p>';
        inputPole.value = ""; // Го брише инпутот по испраќање
    }
}