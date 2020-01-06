/* on récupère toutes les parties qui sont susceptibles de changer après */
const debut = document.getElementsByClassName("menu");
const boutonJouer = document.getElementById("btnJouer");
const boutonOptions = document.getElementById("btnOptions");
const menu = document.getElementsByClassName("menuDeux");
const nom = document.getElementById("nom");
const capacite = document.getElementById("capacite");
const boutonValider = document.getElementById("play");
const histoire = document.getElementById("textuel");

// pour les choix 
const choix = document.getElementById("lesBoutons");
const button1 = document.getElementById("btn1");
const button2 = document.getElementById("btn2");
const button3 = document.getElementById("btn3");

// pour ajouter des images dans la div prévue
const divImage = document.getElementById("imageAjout");


// pour afficher une div après un click
function AfficherDiv() {
    debut[0].style.display = "none";
    menu[0].style.display = "block";
}


/* on initialise le personnage */
let personnage = {
    nom: "",
    pointsVie: 30,
    forces: 10,
    pointsResis: 0,
    xp: 0,
    niveau: 1,
    familia: "",
    inventaire: [],
};

/* fonction pour personnaliser le personnage */
function CreerPerso() {
    let name = nom.value;
    personnage.nom = name;
    
    menu[0].style.display = "none";
    principale(name);
}

/* les fonctions d'intégration d'une familia */

function IntegrerFamiliaHestia() {
    console.log("dans integrer familia Hestia");
    
    personnage.familia = "Hestia";
    personnage.pointsVie += 20;
}

function IntegrerFamiliaHecate() {
    console.log("dans integrer familia Hecate");
    
    personnage.familia = "Hecate";
    personnage.pointsResis += 20;
}

function IntegrerFamiliaAres() {
    console.log("dans integrer familia Ares");
    
    personnage.familia = "Ares";
    personnage.forces += 20;
}





/* la fonction principale qui va appeler les autres */
function principale (prenom) {
    // les textes de dialogues à afficher et les images
    let phrase1 = "<p>- Bienvenue " + prenom + ", le monde de Caerdydd t'accueille à bras ouvert ! Nous sommes si heureux de te compter parmi nos potentiels héros, parmi ces hommes qui s'élèveront dans notre monde afin de nous apporter des nouveautés... Oops j'en oublie les bonnes manières, pardonne moi. Je me prénomme Kuyma, je suis la déesse suprême de Caerdydd, sa créatrice. Accompagne moi je te prie, je vais te guider. </p>";
    let interligne1 = "<p class=\"italique\">~~ Vous l'accompagnez et traversez des nuages jusqu'à arriver en vue d'une ville construite singulièrement ~~</p>";
    let image1 = "<img class=\"monImage\" src=\"images/fondAincrad.jpg\"/>";
    
    let phrase2 = " <p>- Voici Shuime, la capitale de ce monde, avec en son centre, la tour des Galera. Ne vous fiez pas à sa belle apparence, elle regroupe des donjons où naîssent toutes sortes de créatures que vous n'imagineriez pas. La Familia Tsuki en fait le recensement en allant explorer les étages des donjons en premier. Oh! J'oublie les essentiels encore, il faut que je te parle des Familia. Assis-toi, on a encore beaucoup à discuter !</p>";
    let interligne2 = "<p class=\"italique\">~~ Vous vous asseyez sur des nuages ayant pris la forme de fauteuils ~~</p>";
    let phrase3 = "<p> - Une Familia est un sorte de clan, une famille dans laquelle chacun évolue sous l'oeil protecteur d'un dieu ou d'une déesse. Par exemple, la Familia Tsuki est dirigée par la déesse Tsuki, déesse du feu et des vents. Tu peux formuler une demande afin de rentrer dans une de ces Familia mais tu peux aussi être mandaté par un ou une déesse. </p> <br /> <p> - Bien ! Maintenant, tu vas pouvoir choisir tes capacités. Tu as le choix entre les compétences à l'épée, les compétences au bâton magique ou alors les compétences à l'épée magique. Chacune de ses compétences auront à un moment donnée, une compétence unique. A toi de trouver... Oh, c'est l'heure ! Au revoir, " + prenom + " ! </p>";
    
    // on passe à la suite de l'histoire
    let didas = "<p class=\"italique\">~~ Vous vous sentez tomber à travers les nuages vers la ville et lorsque vous voyez arriver le toit d'un batiment, vous fermez les yeux, attendant l'impact. Cependant rien ne se passe. Vous étiez arrivé dans le dit bâtiment et une jeune femme vous accoste ~~</p>";
    let discours = "<p>- Oh bonjour ! Tu viens d'arriver c'est ça ? Cela se voit. Viens je vais t'expliquer un peu. Ici nous sommes à la Guilde, nous donnons des missions au jeune aventurier comme toi afin de les faire progresser et pour qu'il puisse accéder au plus loin niveau qu'il leur est possible. Oh je te vois venir. Tu ne peux pas partir en mission '' seul '', tu as besoin d'intégrer une Familia. Elles offrent des bonus spécifique, par exemple la Familia Hestia t'offre 20 points de vie supplémentaire. A toi de choisir ! </p>";
    let details = "<p class=\"italique\"> ~~ La Familia Hestia offre 20 points de vie supplémentaire, la Familia Hecate offre 20 points de résistance et enfin la Familia Ares offre 20 points de forces supplémentaire ~~ </p>";
    
    button1.innerHTML = "Familia Hestia";
    button2.innerHTML = "Familia Hecate";
    button3.innerHTML = "Familia Ares";

    
    // les temps d'apparition des ecritures (en seconde ici)
    let time1 = 5;
    let time2 = 10;
    let time3 = 14;
    let time4 = 17;
    let time5 = 30;
    let time6 = 32;
    
    // pour afficher les écritures tout doucement et les unes après les autres 
    histoire.innerHTML = phrase1;
    setTimeout(function(){histoire.innerHTML += interligne1; divImage.innerHTML = image1}, time1*1000);
    setTimeout(function(){histoire.innerHTML += phrase2;}, time2*1000);
    setTimeout(function(){histoire.innerHTML += interligne2;}, time3*1000);
    setTimeout(function(){histoire.innerHTML += phrase3;}, time4*1000);
    setTimeout(function(){histoire.innerHTML = didas;}, time5*1000);
    setTimeout(function(){histoire.innerHTML += discours; choix.innerHTML += details; choix.style.display = "inline-block";}, time6*1000);
    
    button1.addEventListener("click", IntegrerFamiliaHestia);
    button2.addEventListener("click", IntegrerFamiliaHecate);
    button3.addEventListener("click", IntegrerFamiliaAres);
    
    
    
}











