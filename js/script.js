// Exercice 1 : Récrire la fonction length() qui aura le nom myLength().

// function myLength(n) {
// let Pfiou = 0;
// for (i in n) {
//     Pfiou++
// }
// console.log(Pfiou)
// }

// myLength("abracadabra")







// Exercice 2 : Récrire la fonction trim() qui aura le nom myTrim().

// function myTrim(x) {
//     for(var i = 0; i < x.length; i++) {
//     if(x.charAt(i) !== " ") {
//         return x.slice(i);
//     }
//     }
// }

// console.log(x);

// myTrim("aba baba") 


// Exercice 1 Bis : Écrire un algorithme qui demande à l’utilisateur un nombre compris entre 1 et 3 jusqu’à ce que la réponse convienne.

// Choississez un nombre entre 1 et 3, 3 étant le maximum



// function smallGame() {

//     let randomNumber= Math.round(Math.random() * 3);
//     let user;

//     do {
//     user = parseInt(prompt("Saisissez un nombre entre 1 et 3"));
//         if (user === randomNumber){  
//             alert("Bravo, tu as trouvé la bonne réponse !");
//         }
//     } while (user != randomNumber)
// }
// smallGame();


// Exercice 2 Bis : Écrire un algorithme qui demande un nombre compris entre 10 et 20, jusqu’à ce que la réponse convienne. En cas de réponse supérieure à 20, on fera apparaître un message : « Plus petit ! », et inversement, « Plus grand ! » si le nombre est inférieur à 10.

// function askNumber(min, max) {

//     min = 10;
//     max = 20;
//     let randomNumber= (Math.round((max-min)*Math.random() + min));
//     console.log(randomNumber);
//     let user;

//     do {
//     user = parseInt(prompt("Saisissez un nombre entre 10 et 20"));
//         if (user > randomNumber){  
//             alert("Trop grand, essaie encore !");
//         }

//         else if (user < randomNumber) {
//             alert("Trop petit, essaie encore !");   
//         }

//         else if (user === randomNumber) {
//             alert("Bravo Champion(ne) !");   
//         }



//     } while (user !== randomNumber)
// }
// askNumber();

// Exo 3 : Écrire un algorithme qui demande un nombre de départ, et qui ensuite affiche les dix nombres suivants. Par exemple, si l'utilisateur entre le nombre 17, le programme affichera les nombres de 18 à 27.

// function newNumber () {

//     let user = parseInt(prompt("Saisissez un nombre"));
// }

// Exo 4 : 

// function newNumber (user) {

//     user = parseInt(prompt("Saisissez un nombre"));
//     for(let i = 0; i <= 10 ; i++) {
//         console.log(user + i); 
//     }
    
// }

// newNumber()

// Exo 5 : Ecrire un algorithme qui demande un nombre de départ, et qui ensuite écrit la table de multiplication de ce nombre, présentée comme suit(cas où l'utilisateur entre le nombre 7) : Table de 7 :

// function askAsk(newnew) {

//  newnew = parseInt(prompt("Saisissez un nombre"));
//   for(let i = 0; i <= 10 ; i++) {
//     console.log(newnew + " x " + i + " = " + newnew * i);
// }

// }

// askAsk()


// Exo 6 : Écrire un algorithme qui demande un nombre de départ, et qui calcule la somme des entiers jusqu’à ce nombre. Par exemple, si l’on entre 5, le programme doit calculer : 1 + 2 + 3 + 4 + 5 = 15 NB : on souhaite afficher uniquement le résultat, pas la décomposition du calcul.

// function departure(Pfiou) {

//     Pfiou = parseInt(prompt("Veillez saisir un nombre !"));
//     let somme = 0;
//     for (let i = 0; i <= Pfiou; i++) {
//     somme = somme + i;
//     console.log(somme);  
//     }

// }


// departure()




// Exo 7 Écrire un algorithme qui demande un nombre de départ, et qui calcule sa factorielle. NB : la factorielle de 8, notée 8 !, vaut 1 x 2 x 3 x 4 x 5 x 6 x 7 x 8

// function factorial(buenoBueno) {
// buenoBueno = parseInt(prompt("Veillez saisir un nombre !"));
// let Pfiou = 1 ;

// for (let i = 1; i <= buenoBueno; i++) {
// Pfiou = Pfiou * i
// console.log(Pfiou);


// }

// }

// factorial()



// Exo 8 : Ecrire un algorithme qui demande successivement 20 nombres à l’utilisateur, et qui lui dise ensuite quel était le plus grand parmi ces 20 nombres :


// function give(x) {
//     let tab =[]
    
//     for (let i = 1; i <= 20; i++) {
//         x = parseInt(prompt("Entrez un nombre !"));
//         tab.push(x);
//         console.log(tab);
    
//     }

//     let valMax = Math.max(...tab);
//     console.log(valMax);
//     // Permet determiner le nombre le + grand;

    
//     let newPosition = tab.indexOf(valMax);
//     console.log(newPosition);
//     // Permet de voir la position de notre plus grand nombre

// }

// give()

// Exo 9 : Réécrire l’algorithme précédent, mais cette fois-ci on ne connaît pas d’avance combien l’utilisateur souhaite saisir de nombres. La saisie des nombres s’arrête lorsque l’utilisateur entre un zéro.

// function idk(x) {
//     let tab =[]
    
//     do {
//         x = parseInt(prompt("Entrez un nombre !"));
//         tab.push(x);
//         console.log(tab);
    
//     }
//     while(x !== 0) 
//     let valMax = Math.max(...tab);
//     console.log(valMax);
    
//     let newPosition = tab.indexOf(valMax);
//     console.log("la position du plus grand nombre est :" + newPosition);
//     

//     }

// idk()


// Exo 10 : A la naissance de Marie, son grand-père Nestor, lui ouvre un compte bancaire. Ensuite, à chaque anniversaire, le grand-père de Marie verse sur son compte 100 e, auxquels il ajoute le double de l’âge de Marie. Par exemple, lorsqu’elle a deux ans, il lui verse 104 e. Écrire un algorithme qui permette de déterminer quelle somme aura Marie lors de son n-ième anniversaire.


function marie(age) {
let age = parseInt(prompt("Quel est l'âge de Marie")); ;
let solde = 0;

for(let i = 1; i<= age; i++) {
    solde = solde + 100 + (2 * i);
    age++;
}

console.log(solde);
alert("A" + age + "an(s), Marie recevra" + solde + "")


}

marie(70)