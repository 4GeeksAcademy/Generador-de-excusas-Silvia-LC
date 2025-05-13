import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
   function generateExcuse() {
        let who = ['Mi jefe', 'Pedro Sánchez', 'Mi perro', 'Donald Trump'];
        let action = ['se comió', 'se cagó en', 'lamió', 'besó'];
        let what = ['el código', 'la ropa sucia', 'la tele', 'el laptop'];
        let when = ['antes de entrar a trabajar', 'mientras dormía', 'en la iglesia', 'en el coche', 'en la ducha'];

        let randomWho = who[Math.floor(Math.random() * who.length)];
        let randomAction = action[Math.floor(Math.random() * action.length)];
        let randomWhat = what[Math.floor(Math.random() * what.length)];
        let randomWhen = when[Math.floor(Math.random() * when.length)];

        return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
    }

    document.getElementById("excuse").innerHTML = generateExcuse();
  console.log("Hello Rigo from the console!");
};
