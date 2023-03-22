/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
*/


//Come prima cosa andiamo a creare gli array di oggetti 
const team = [
    {
        firstName: 'Wayne',
        lastName: 'Barnett',
        role: 'Founder & CEO',
        image:'wayne-barnett-founder-ceo.jpg'
    },

    {
        firstName: 'Angela',
        lastName: 'Caroll',
        role: 'Chief Editor',
        image:'angela-caroll-chief-editor.jpg'
    },

    {
        firstName: 'Walter',
        lastName: 'Gordon',
        role: 'Office Manager',
        image:'walter-gordon-office-manager.jpg',
    },

    {
        firstName: 'Angela',
        lastName: 'Lopez',
        role: 'Social Media Manager',
        image:'angela-lopez-social-media-manager.jpg',
    },

    {
        firstName: 'Scott',
        lastName: 'Estrada',
        role: 'Developer',
        image:'scott-estrada-developer.jpg',
    },

    {
        firstName: 'Barbara',
        lastName: 'Ramos',
        role: 'Graphic Designer',
        image:'barbara-ramos-graphic-designer.jpg',
    },
];
console.log(team);

//prendiamo la classe row 
const row = document.querySelector('.row');

//creiamo un ciclo for per formare le card del team
for(let key = 0; key < team.length; key++){
    const mateId = team[key];
    const tpl = `
    <div class="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
        <div class="card p-3 mb-3" style="width: 16rem;">
            <img src="./img/${mateId.image}" class="card-img-top" alt="${mateId.firstName} ${mateId.lastName} ${mateId.role}">
            <div class="card-body text-center">
                <h5 class="card-title"> ${mateId.firstName} ${mateId.lastName} </h5>
                <p class="card-text"> ${mateId.role} </p>
            </div>
        </div>
    </div>
    
    `
    row.innerHTML += tpl;

}
console.log(row);