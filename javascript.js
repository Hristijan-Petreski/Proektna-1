var bazaGradovi = {
    "Ohrid": {
        ime: "Ohrid",
        statia: "Ohrid e bisertot na Makedonija so bogata istorija, ezeroto i starata arhitektura.",
        napisi: "Ohrid e poznat po 365 crkvi, po edna za sekoj den vo godinata.",
        top10: [
            "Sv. Jovan Kaneo", "Samuilova Tvrdina", "Plaosnik", "Sv. Naum", 
            "Ohridska Carsija", "Zaliv na Kskite (Bay of Bones)", "Biljanini Izvori", 
            "Gradski Park", "Galicica", "Kuka na Robevci"
        ],
        sliki: [
            {
                url: "https://images.pexels.com/photos/35259050/pexels-photo-35259050.jpeg?cs=srgb&dl=pexels-yavuz-selim-ozturk-2158256783-35259050.jpg&fm=jpg",
                likes: 24,
                dislikes: 2,
                komentari: ["Prekrasno mesto na ezeroto!", "Samuilovata tvrdina e neverojatna!"]
            },
            {
                url: "https://images.pexels.com/photos/32937523/pexels-photo-32937523.jpeg?cs=srgb&dl=pexels-valentin-cvetanoski-2147958923-32937523.jpg&fm=jpg",
                likes: 12,
                dislikes: 1,
                komentari: ["Odlicen pogled od Kaneo!"]
            }
        ]
    },
    "Milano": {
        ime: "Milano",
        statia: "Milano e svetka metropola na modata, dizajnot i italijanskata kultura.",
        napisi: "Milano e dom na slavnata slika Poslednata Vecera od Leonardo da Vinci.",
        top10: [
            "Duomo di Milano", "Galleria Vittorio Emanuele II", "Teatro alla Scala", 
            "Castello Sforzesco", "Santa Maria delle Grazie", "Brera Art Gallery", 
            "Navigli Canal", "Parco Sempione", "San Siro Stadium", "Quadrilatero della Moda"
        ],
        sliki: [
            {
                url: "https://images.unsplash.com/photo-1513581166391-887a96ddeafd?w=400",
                likes: 18,
                dislikes: 1,
                komentari: ["Duomo e fascinantna katedrala!", "Odlicno mesto za shoping."]
            },
            {
                url: "https://cdn.shopify.com/s/files/1/0182/8937/files/compras-en-milan_1024x1024.jpg?v=1584528264",
                likes: 8,
                dislikes: 0,
                komentari: ["Prekrasna arhitektura."]
            }
        ]
    },
    "Pariz": {
        ime: "Pariz",
        statia: "Pariz e gradot na svetlinata, romantikata, umetnosta i vrvnata hrana.",
        napisi: "Pariz ima nad 450 parkovi i gradini koi nudat vistinsko uzivanje.",
        top10: [
            "Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral", "Arc de Triomphe", 
            "Sacre-Coeur", "Musee d'Orsay", "Krstarenje po Sena", "Palais Garnier", 
            "Luxembourg Gardens", "Montmartre"
        ],
        sliki: [
            {
                url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400",
                likes: 35,
                dislikes: 3,
                komentari: ["Ajfelovata kula vo zivo e magicna!"]
            },
            {
                url: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400",
                likes: 20,
                dislikes: 2,
                komentari: ["Luvr bara cel den za poseta."]
            }
        ]
    }
};

function najaviSe() {
    var email = document.getElementById("korisnicki_email").value;
    var lozinka = document.getElementById("lozinka").value;
    if (email == "hristijanpetreski2005@gmail.com" && lozinka == "12345") {
        window.alert("Uspesno ste najaveni");
    }
    else {
        window.alert("Greska pri najava");
    }
}

function dodadiDestinacija() {
    var ime = document.getElementById("ime").value;
    var kategorija = document.getElementById("kategorija").value;
    var cena = document.getElementById("cena").value;
    var destinacii = document.getElementById("destinacii");

    if (ime === "" || cena === "") return;

    var novaKarticka = `
    <div id="${ime}" class="card" data-ime="${ime}" data-cena="${cena}" data-kategorija="${kategorija}"> 
        <div class="card-body">
            <h5 class="card-title">${ime}</h5>
            <p class="card-text">Cena: ${cena}$</p>
            <p class="card-text">Kategorija: ${kategorija}</p>
        </div>
        <div class="card-footer">
            <button class="btn-danger" onclick="izbrisiDestinacija(this)">Izbrisi</button>
            <button class="btn-info" onclick="otvoriGrad(this)">Povekje Info</button>
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
    var karticka = button.closest(".card");
    karticka.remove();
}

function presmetajVkupniTrosoci() {
    var destinacii = document.getElementById("destinacii").getElementsByClassName("card");
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
    var destinacii = document.getElementById("destinacii").getElementsByClassName("card");

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
    window.alert("Vasata anketa e pratena, vi blagodarime za odvoenoto vreme");
}

function otvoriGrad(button) {
    var karticka = button.closest(".card");
    var ime = karticka.dataset.ime;
    var grad = bazaGradovi[ime];
    var kontejner = document.getElementById("prikaz_detali");
    var sliki = grad.sliki;
    var top10 = grad.top10;
    var html = '<h2>' + ime + '</h2><hr></hr>';
    html += '<h4>Top 10</h4>';
    for (var i = 0; i < top10.length; i++) {
        html += '<p>' + top10[i] + '</p>';
    }

    html += '<hr></hr><h4>Statii</h4>';
    html += '<p>' + grad.statia + '</p>';
    html += '<hr></hr><h4>Napisi</h4>';
    html += '<p>' + grad.napisi + '</p>';
    html += '<hr></hr><h4>Sliki</h4>';

    for (var i = 0; i < sliki.length; i++) {
        var slika = sliki[i];
        html += '<div style="border:1px solid #ccc; padding:10px; margin-bottom:15px;">';
        html += '<img src="' + slika.url + '" alt="Slika" width="400"><br><br>';
        html += '<button class="btn-primary" onclick="likeSlika(\'' + ime + '\', ' + i + ')">Like <span id="like_' + ime + '_' + i + '">' + slika.likes + '</span></button> ';
        html += '<button class="btn-secondary" onclick="dislikeSlika(\'' + ime + '\', ' + i + ')">Dislike <span id="dislike_' + ime + '_' + i + '">' + slika.dislikes + '</span></button>';
        html += '<h5>Komentari:</h5>';
        html += '<div id="komentari_' + ime + '_' + i + '">';
        for (var j = 0; j < slika.komentari.length; j++) {
            html += '<p>Komentar: ' + slika.komentari[j] + '</p>';
        }
        html += '</div>';
        html += '<input type="text" placeholder="Dodadi komentar" id="novKomentar_' + ime + '_' + i + '"> ';
        html += '<button class="btn-info" onclick="dodadiKomentar(\'' + ime + '\', ' + i + ')">Dodadi</button>';
        html += '</div>';
    }
    html+='<button class="btn-danger" onclick="zatvori(this)">Zatvori</button>';
    kontejner.innerHTML = html;
    kontejner.style.display = "block";
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
    var komentar = document.getElementById("novKomentar_" + ime + "_" + slikaindex).value;
    if (komentar !== "") {
        bazaGradovi[ime].sliki[slikaindex].komentari.push(komentar);
        var divKomentari = document.getElementById("komentari_" + ime + "_" + slikaindex);
        divKomentari.innerHTML += '<p>Komentar: ' + komentar + '</p>';
    }
}