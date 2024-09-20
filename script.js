
let box = document.getElementsByClassName("box")

let pierre = document.getElementById("pierre")
let papier = document.getElementById("papier")
let ciseaux = document.getElementById("ciseaux")

const valeurs = ["pierre", "papier", "ciseaux"]

let aleatoire = valeurs[Math.floor(Math.random() * 3)]

let resultat = document.getElementById("resultat");

let joueur = document.createElement("p");
joueur.setAttribute("id", "joueur");

let robot = document.createElement("p");
robot.setAttribute("id", "robot");

let resultatText = document.createElement("p");
resultatText.setAttribute("id", "resultatText");

resultat.appendChild(joueur);
resultat.appendChild(robot);
resultat.appendChild(resultatText);

joueur = document.getElementById("joueur")
robot = document.getElementById("robot")
resultatText = document.getElementById("resultatText")


pierre.addEventListener('click', () =>{
    compareResultat("pierre", aleatoire);
    aleatoire = valeurs[Math.floor(Math.random() * 3)];
})

papier.addEventListener("click", () =>{
    compareResultat("papier", aleatoire);
    aleatoire = valeurs[Math.floor(Math.random() * 3)];
})

ciseaux.addEventListener("click", () =>{
    compareResultat("ciseaux", aleatoire);
    aleatoire = valeurs[Math.floor(Math.random() * 3)];
})

function compareResultat(joueur, ordi){
    switch(joueur){
        case "pierre":
            ordi == "pierre" ? affichageResultat(joueur,ordi,"EGALITE") : ordi == "papier" ? affichageResultat(joueur,ordi,"PERDU") : affichageResultat(joueur,ordi,"GAGNE")
            break;
        case "papier":
            ordi == "pierre" ? affichageResultat(joueur,ordi,"GAGNE") : ordi == "papier" ?  affichageResultat(joueur,ordi,"EGALITE") : affichageResultat(joueur,ordi,"PERDU")
            break;
        case "ciseaux":
            ordi == "pierre" ? affichageResultat(joueur,ordi,"PERDU") : ordi == "papier" ?  affichageResultat(joueur,ordi,"GAGNE") : affichageResultat(joueur,ordi,"EGALITE")
            break;
    }
}

function affichageResultat(j, o, r){
    joueur.textContent = "Joueur : " + j;
    robot.textContent = "Robot : " + o;
    resultatText.textContent = "Résultat : " + r; 
}