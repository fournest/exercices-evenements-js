// exercice 1


let bouton = document.querySelector(`#monBouton`);

bouton.addEventListener(`click`, function () {
    alert(`"Vous avez cliqué sur le bouton.`);
});

// exercice 2

const boutonModifie = document.querySelector(`#modifierTexte`);

const paragraphe = document.querySelector(`#texte`);

boutonModifie.addEventListener(`click`, function () {
    paragraphe.textContent = `Le texte a été modifié avec succès.`;
});

// exercice 3

const zoneModifiee = document.querySelector(`#zone`);

zoneModifiee.addEventListener(`mouseover`, function () {
    zoneModifiee.style.backgroundColor = `lightblue`;
});

zoneModifiee.addEventListener(`mouseout`, function () {
    zoneModifiee.style.backgroundColor = `white`;
});

// exercice 4

let compteur = 0;

const compter = document.querySelector(`#compter`);

const resultat = document.querySelector(`#resultat`);

compter.addEventListener(`click`, function () {
    compteur++;
    resultat.textContent = `Vous avez cliqué ${compteur} fois.`;
});

// exercice 5

const champ = document.querySelector(`#champNom`);
const messageModifie = document.querySelector(`#afficherNom`);
const pMessage = document.querySelector(`#message`);

messageModifie.addEventListener(`click`, function () {
    const nomSaisi = champ.value;
    pMessage.textContent = `Bonjour, ${nomSaisi}`;
});

// exercice 6

const texte = document.querySelector(`#champTexte`);
const btn = document.querySelector(`#toggleChamp`);

btn.addEventListener(`click`, () => {
    texte.disabled = !texte.disabled;

    if (texte.disabled) {
        btn.textContent = `Activez le champ`;
        console.log(`Le champ est désactivé.`);

    } else {
        btn.textContent = `Désactivez le champ`;
        console.log(`Le champ est activé.`);

    }

})

// exercice 7
const ulElements = document.createElement(`ul`);
ulElements.id = `listeElements`;
document.body.append(ulElements);

const btnAjouter = document.createElement(`button`);
const t = document.createTextNode(`Ajoutez`);
btnAjouter.append(t);
document.body.append(btnAjouter);



btnAjouter.addEventListener(`click`, () => {

    const newListUl = document.createElement(`li`);
    newListUl.textContent = `Nouvel élément ajouté`;
    ulElements.append(newListUl);
});

// exercice 8

const list = document.querySelectorAll(".cliquable");

for (const element of list) {

    element.addEventListener(`click`, () => {

        element.remove()
    });
}

// exercice 9

const champClavier = document.querySelector(`#champClavier`);
const messageClavier = document.querySelector(`#messageClavier`);

champClavier.addEventListener(`keydown`, function (event) {

    if (event.key === `Enter`) {
        messageClavier.textContent = `Vous avez appuyer sur Entrée.`;
    }
});

// exercice 10


const listeAnimaux = document.querySelectorAll(`.animal`);
const filtreAnimaux = document.querySelector(`#filtreAnimaux`);



filtreAnimaux.addEventListener(`input`, function() {
const filtre = filtreAnimaux.value.toLowerCase();
    for (const animal of listeAnimaux) {
        const nomAnimal = animal.textContent.toLowerCase ();
        if (nomAnimal.includes(filtre)) {
            animal.style.display = ``;
        } else {
            animal.style.display= `none`;
        }

    }
});
