/* on récupère toutes les parties qui sont susceptibles de changer après */
const debut = document.getElementsByClassName("menu");
const boutonJouer = document.getElementById("btnJouer");
const boutonOptions = document.getElementById("btnOptions");
const menu = document.getElementsByClassName("menuDeux");
const nom = document.getElementById("nom");
const capacite = document.getElementById("capacite");
const boutonValider = document.getElementById("play");
// const boutonInfo = document.getElementById("inforPerso");
const histoire = document.getElementById("textuel");

// pour les choix 
const lesChoix = document.getElementById("lesBoutons");

// pour ajouter des images dans la div prévue
const divImage = document.getElementById("imageAjout");


// pour afficher une div après un clic qui été cachée de base
function AfficherDiv() {
    debut[0].style.display = "none";
    menu[0].style.display = "inline-block";
}


/* LE JEU EN LUI MEME */


/* on initialise le personnage */
let personnage = {
    nom: "",
    pointsVie: 30,
    force: 10,
    pointsResis: 0,
    xp: 0,
    niveau: 1,
    familia: "",
    ami: "",
    etat: "",
    aide: "",
    inventaire: [],
};

/* afin de voir les statistique du personnage
function afficherInfo() {
    let statistique = "<p> Nom : " + personnage.nom + ", Niveau : " + personnage.niveau + ", Points de vie : " + personnage.pointsVie + ", Force : " + personnage.force + ", Points de résistance : " + personnage.pointsResis + " </p>";
    
    boutonInfo.innerHTML = statistique;
}
*/


/* fonction pour personnaliser le personnage */
function creerPerso() {
    let name = nom.value;
    personnage.nom = name;
    
    menu[0].style.display = "none";
    //boutonInfo.style.display = "block";
    
    principale(name);
}


/* la fonction principale qui va appeler les autres */
function principale (prenom) {
    
    // les textes de dialogues à afficher et les images
    let phrase1 = "<p>- Bienvenue " + prenom + ", le monde de Caerdydd t'accueille à bras ouvert ! Nous sommes si heureux de te compter parmi nos potentiels héros, parmi ces personnes qui s'élèveront dans notre monde afin de nous apporter des nouveautés... Oops j'en oublie les bonnes manières, pardonne moi. Je me prénomme Kuyma, je suis la déesse suprême de Caerdydd, sa créatrice. Accompagne moi je te prie, je vais te guider. </p>";
    let interligne1 = "<p class=\"italique\">~~ Vous l'accompagnez et traversez des nuages jusqu'à arriver en vue d'une ville construite singulièrement ~~</p>";
    let image1 = "<img class=\"monImage\" src=\"images/fondAincrad.jpg\"/>";
    
    let phrase2 = " <p>- Voici Shuime, la capitale de ce monde, avec en son centre, la tour des Galera. Ne vous fiez pas à sa belle apparence, elle regroupe des donjons où naîssent toutes sortes de créatures que vous n'imagineriez pas. La Familia Tsuki en fait le recensement en allant explorer les étages des donjons en premier. Oh! J'oublie les essentiels encore, il faut que je te parle des Familia. Assis-toi, on a encore beaucoup à discuter !</p>";
    let interligne2 = "<p class=\"italique\">~~ Vous vous asseyez sur des nuages ayant pris la forme de fauteuils ~~</p>";
    let phrase3 = "<p> - Une Familia est un sorte de clan, une famille dans laquelle chacun évolue sous l'oeil protecteur d'un dieu ou d'une déesse. Par exemple, la Familia Tsuki est dirigée par la déesse Tsuki, déesse du feu et des vents. Tu peux formuler une demande afin de rentrer dans une de ces Familia mais tu peux aussi être mandaté par un ou une déesse. </p> <br /> <p> - Bien ! Maintenant, tu vas pouvoir choisir tes capacités. Tu as le choix entre les compétences à l'épée, les compétences au bâton magique ou alors les compétences à l'épée magique. Chacune de ses compétences auront à un moment donnée, une compétence unique. A toi de trouver... Oh, c'est l'heure ! Au revoir, " + prenom + " ! </p>";
    
    // on passe à la suite de l'histoire
    let didas = "<p class=\"italique\">~~ Vous vous sentez tomber à travers les nuages vers la ville et lorsque vous voyez arriver le toit d'un batiment, vous fermez les yeux, attendant l'impact. Cependant rien ne se passe. Vous étiez arrivé dans le dit bâtiment et une jeune femme vous accoste ~~</p>";
    let image2 = "<img class=\"monImage\" src=\"images/salon.jpg\"/>";
    let discours = "<p>- Oh bonjour ! Tu viens d'arriver c'est ça ? Cela se voit. Viens je vais t'expliquer un peu. Ici nous sommes à la Guilde, nous donnons des missions au jeune aventurier comme toi afin de les faire progresser et pour qu'il puisse accéder au plus loin niveau qu'il leur est possible. Oh je te vois venir. Tu ne peux pas partir en mission '' seul '', tu as besoin d'intégrer une Familia. Elles offrent des bonus spécifique, par exemple la Familia Hestia t'offre 20 points de vie supplémentaire. A toi de choisir ! </p>";
    let details = "<p class=\"italique\"> ~~ La Familia Hestia offre 20 points de vie supplémentaire, la Familia Hecate offre 20 points de résistance et enfin la Familia Ares offre 20 points de forces supplémentaire ~~ </p>";
    
    let buttons = "<a id=\"btn1\" onclick=\"integrerFamilia(this);\">Familia Hestia</a> " 
                + "<a id=\"btn2\" onclick=\"integrerFamilia(this);\">Familia Hecate</a> " 
                + "<a id=\"btn3\" onclick=\"integrerFamilia(this);\">Familia Ares</a>";
    
    
    
    // pour afficher les écritures tout doucement et les unes après les autres 
    histoire.innerHTML = phrase1;
    setTimeout(function(){histoire.innerHTML += interligne1; divImage.innerHTML = image1}, 5*1000);
    setTimeout(function(){histoire.innerHTML += phrase2;}, 10*1000);
    setTimeout(function(){histoire.innerHTML += interligne2;}, 14*1000);
    setTimeout(function(){histoire.innerHTML += phrase3;}, 17*1000);
    setTimeout(function(){histoire.innerHTML = didas;}, 30*1000);
    setTimeout(function(){histoire.innerHTML += discours; divImage.innerHTML = image2;}, 34*1000);
    setTimeout(function(){lesChoix.innerHTML += details; lesChoix.style.display = "inline-block"; lesChoix.innerHTML += buttons}, 37*1000);
}




/* les fonctions d'intégration d'une familia */
function integrerFamilia(balise) {
   let bal = balise.textContent;
    
    console.log(bal);
    
    if (bal == "Familia Hestia") {
        personnage.familia = "Hestia";
        personnage.pointsVie += 20;
        personnage.ami = "Bichi";
        suite();
    }
    else if (bal == "Familia Hecate") {
        personnage.familia = "Hecate";
        personnage.pointsResis += 20;
        personnage.ami = "Aoki";
        suite();
    }
    else if (bal == "Familia Ares") {
        personnage.familia = "Ares";
        personnage.force += 20;
        personnage.ami = "Tsino";
        suite();
    }
    else {
        console.log("erreur de lecture");
    }
}


/* la suite */
function suite() {
    /* l'histoire encore */
    let deb1 = "<p>- Ooh tu as choisi cette familia ! D'accord très bien. Maintenant passons aux capacités. Tu peux choisir entre une épée normale, un bâton magique ou alors une épée magique. Ce ne sont que des armes de qualité basique cependant tu pourras en acheter ou les améliorer quand tu auras atteint le niveau 10. &#128521; </p>"
    
    let image3 = "<img class=\"mesImages\" src=\"images/epee.png\"/>"
                + "<img class=\"mesImages\" src=\"images/baton.png\"/>"
                + "<img class=\"mesImages\" src=\"images/epeeMagique.png\"/>";
    
    
    let bout = "<a id=\"btn1\" onclick=\"choixArme(this);\">Epee</a> " 
                + "<a id=\"btn2\" onclick=\"choixArme(this);\">Baton Magique</a> " 
                + "<a id=\"btn3\" onclick=\"choixArme(this);\">Epee Magique</a>";
    
    histoire.innerHTML = deb1;
    divImage.innerHTML = image3;
    lesChoix.innerHTML = bout;
}


/* fonction pour le choix de l'arme */
function choixArme (arme) {
    let weapon = arme.textContent;
    
    console.log(weapon);
    
    if (weapon == "Epee") {
        personnage.inventaire += ["Epee"];
        personnage.force += 10;
        premierCombat();
    }
    else if (weapon == "Baton Magique") {
        personnage.inventaire += ["BatonMagique"];
        personnage.force += 10;
        premierCombat();
    }
    else if (weapon == "Epee Magique") {
        personnage.inventaire += ["EpeeMagique"];
        personnage.force += 10;
        premierCombat();
    }
    else {
        console.log("erreur dans la lecture");
    }
}

/* suite de l'histoire */
function premierCombat() {
    let blanc2 = "";
    
    let first = "<p>- Très bien, alors à partir de maintenant tu seras accompagné par " + personnage.ami + ", qui va t'accompagner dans chacun de tes combats. Allons-y pour te montrer un peu les environs. </p>";
    let firstDid = "<p class=\"italique\">~~ Vous la suivez jusqu'à l'intérieur de la tour, au premier étage du donjon, où vous tombiez sur des Skrulls, des petits monstres. Vous les battez très vite grâce à l'aide de votre compagnon ~~</p> <p class=\"italique\">~~ Vous avez gagné un niveau, vous êtes maintenant niveau 2 ! Voyons voir un peu vos statistiques : ~~</p> ";
    let img2 = "<img class=\"monImage\" src=\"images/mob.png\"/>";
    
    // on augmente les statistiques
    personnage.niveau = 2;
    personnage.pointsVie += 10;
    personnage.pointsResis += 5;
    
    let stat = "<p> Nom : " + personnage.nom + ", Niveau : " + personnage.niveau + ", Points de vie : " + personnage.pointsVie + ", Force : " + personnage.force + ", Points de résistance : " + personnage.pointsResis + " </p>";
    
    let secondD = "<p>- Bien, maintenant tu dois prendre une quête afin de monter de niveau.. à celui actuel, tu ne peux que prendre pour le moment '' Arrivée dans la Familia '' qui est une quête simple. </p>";
    let seconDee = "<p class=\"italique\">~~ Vous acceptez la quête et vous vous retrouvez dans l'arrière du magasin de forgeron de la Familia Hephaistos. Vous devez attirer un maximum de personne dans la boutique. Cependant, un choix vous a été proprosé : porter la robe rouge (très mignonne avec ce petit serre-tête) afin de présenter une visage plus avenant au public et ainsi réduire le temps de travail, soit ne pas la porter et rallonger le temps de travail. Que choisissez-vous ? ~~</p>";
    
    let choixRo = "<a id=\"btn1\" onclick=\"choixRobe(this);\">La porter</a>" 
                + "<a id=\"btn2\" onclick=\"choixRobe(this);\">Ne pas la porter</a>";
    
    
    lesChoix.innerHTML = blanc2;
    histoire.innerHTML = first;
    setTimeout(function(){histoire.innerHTML += firstDid; divImage.innerHTML = img2;}, 2*1000);
    setTimeout(function(){histoire.innerHTML += stat;}, 3*1000);
    setTimeout(function(){histoire.innerHTML += secondD; histoire.innerHTML += seconDee;}, 4*1000);
    setTimeout(function(){lesChoix.innerHTML = choixRo;}, 5*1000);
}

/* pour savoir quel choix a été fait */
function choixRobe (reponse) {
    let rep = reponse.textContent;
    
    if (rep == "La porter") {
        sweet();
    }
    else if (rep == "Ne pas la porter") {
        personnage.etat = "fatigue";
        sweet();
    }
    else {
        console.log("erreur dans la lecture");
    }
}


/* fonction qui prend la relève */
function sweet () {
    let blanc3 = "";
    let image5 = "<img class=\"monImage\" src=\"images/salon.jpg\"/>";
    let inter1 = "<p class=\"italique\">~~ Vous finissez le travail et retournez à la guilde afin d'avoir la récompense ~~</p>"
                + "<p> - Oh vous êtes là ! Venez on va valider votre quête. </p>" 
                + "<p class=\"italique\">~~ Vous avez gagné un niveau ainsi qu'un peu de force ~~</p>";
    personnage.niveau = 3;
    personnage.force += 5;
    
    let mad = "<p> - Bien, maintenant vous avez le choix, soit vous continuez les quêtes afin de monter en niveau et de vous entraîner, soit vous pouvez aller vous reposer chez vous. </p>";
    
    let statB = "<a id=\"btn1\" onclick=\"choixChemin(this);\">Prendre une nouvelle quête</a>" 
                + "<a id=\"btn2\" onclick=\"choixChemin(this);\">Rentrer chez soi</a>";
    
    lesChoix.innerHTML = blanc3;
    divImage.innerHTML = image5;
    histoire.innerHTML = inter1;
    setTimeout(function(){histoire.innerHTML += mad;}, 3*1000);
    setTimeout(function(){lesChoix.innerHTML += statB;}, 4*1000);
}

/* pour savoir quel choix a été fait */
function choixChemin(chem) {
    let che = chem.textContent;
    
    if (che == "Prendre une nouvelle quête") {
        newQuete();
    }
    else if (che == "Rentrer chez soi") {
        goHome();
    }
    else {
        console.log("erreur dans la lecture");
    }
}

/* suite de l'histoire si on a choisi de prendre une nouvelle quête */
function newQuete() {
    let blancB = "";
    let newQ = "<p> - Hop, j'ai une quête pour vous. Elle s'intitule '' La contre-attaque des Vaches '', vous devrez aller dans le donjon pour la réaliser. Cependant vous pouvez choisir de ne pas la réaliser tout de suite et aller vous promener en dehors de la ville. Faites toutefois attention aux petits monstres qui peuvent venir vous attaquer. </p>";
    
    let newB = "<a id=\"btn1\" onclick=\"choixCheminBis(this);\">Aller dans le donjon</a> " 
                + "<a id=\"btn2\" onclick=\"choixCheminBis(this);\">Aller à l'extérieur de la ville</a>";
    
    let image6 = "<img class=\"monImage\" src=\"images/salon.jpg\"/>";
    
    lesChoix.innerHTML = blancB;
    divImage.innerHTML = image6;
    histoire.innerHTML = newQ;
    setTimeout(function(){lesChoix.innerHTML = newB;}, 3*1000);
}


function choixCheminBis(chemBis) {
    let cheBis = chemBis.textContent;
    
    if (cheBis == "Aller dans le donjon") {
        personnage.niveau = 4;
        personnage.pointsResis += 5;
        personnage.xp += 30;
        donjon();
    }
    else if (cheBis == "Aller à l'extérieur de la ville") {
        alert("Attention, cette partie n'ayant pas encore été faite, vous ne pouviez pas la réaliser. J'en suis navrée.");
    }
    else {
        console.log("erreur dans la lecture");
    }
    
}

function donjon() {
    let blancD = "";
    
    let don = "<p class=\"italique\">~~ Vous marchez à la recherche de l'objet qu'il vous faut : une baie des Lailay. Très utile pour  ~~</p>"
        + "<p>- Au secouuuuuurs ! </p> "
        + "<p class=\"italique\">~~ Ce cri venait d'un coin devant vous. ~~</p>";
    
    
}

/* suite de l'histoire si on a choisi de rentrer chez soi */
function goHome() {
    
}













