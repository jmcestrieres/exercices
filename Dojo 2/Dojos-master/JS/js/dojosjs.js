document.querySelector("main section aside div").onmouseenter = function(){
    this.style.borderRadius = "0%";
};
document.querySelector("main section aside div").onmouseleave = function(){
    this.style.borderRadius = "50%";
};



let d1= document.querySelector("main section section article div")
let tet = document.querySelector("main section section article header").addEventListener("click", () => {
    if (d1.style.visibility  === "hidden") {
        d1.style.visibility = "visible";
        d1.style.height = "auto";
      } else {
        d1.style.visibility  = "hidden";
        d1.style.height = "0px";
      }
    }
  )

let d2= document.getElementById("div2")
let tet2 = document.getElementById("h2").addEventListener("click", () => {
    if (d2.style.visibility  === "hidden") {
        d2.style.visibility = "visible";
        d2.style.height = "auto";
    } else {
        d2.style.visibility  = "hidden";
        d2.style.height = "0px";
    }
    }
)

let d3= document.getElementById("div3")
let tet3 = document.getElementById("h3").addEventListener("click", () => {
    if (d3.style.visibility  === "hidden") {
        d3.style.visibility = "visible";
        d3.style.height = "auto";
        } else {
        d3.style.visibility  = "hidden";
        d3.style.height = "0px";
        }
    }
    )

    class Info{
        constructor(nom, type, pays, classement){
            this.nom = nom
            this.type = type
            this.pays = pays
            this.classement = classement
            this.afficher()
        }


    function afficherJson(){
        let xhr = new XMLHttpRequest();
    
        xhr.open('GET', 'JS/data/menu.json',true);
        xhr.responseType = 'json';
    
        xhr.addEventListener('load', function(){
            let infosJson = this.response;
            infosJson.forEach(element => {
                let info = new Fromage(element.nom, element.type, element.pays, element.classement);
                // fromage.afficher();Si pas déclaré ds le constructeur avec this.afficher(), obligé de l'appeler ici
            });
        });
        
        xhr.send();
    };
    
    afficherFromages();