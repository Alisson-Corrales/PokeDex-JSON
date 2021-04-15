"use strict";

//let file = window.location.pathname
//file = /charmander.html - except you splice our the / and .html
//file += .json

let charmander = {"abilities": [
      {
        "name": "Blaze"
      },
      {
        "name": "Solar-power"
      }
    ],
    "base_experience": 62,
    "height": 6,
    "id": 4,
    "is_default": true,
    "name": "Charmander",
    "order": 5,
    "stats": [
      {
        "base_stat": 39,
        "effort": 0,
        "stat": {
          "name": "HP"
        }
      },
      {
        "base_stat": 52,
        "effort": 0,
        "stat": {
          "name": "Attack"
        }
      },
      {
        "base_stat": 43,
        "effort": 0,
        "stat": {
          "name": "Defense"
        }
      },
      {
        "base_stat": 60,
        "effort": 0,
        "stat": {
          "name": "Special-attack"
        }
      },
      {
        "base_stat": 50,
        "effort": 0,
        "stat": {
          "name": "Special-defense"
        }
      },
      {
        "base_stat": 65,
        "effort": 1,
        "stat": {
          "name": "Speed"
        }
      }
    ],
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fire"
        }
      }
    ],
"weight": 8.5}


//🔥gets all the elements in the html🔥
//let grid = document.getElementById("grid");
let imgName = document.getElementById("imageAndName");
let section1 = document.getElementById("general")
let section2 = document.getElementById("abilities")
let section3 = document.getElementById("stats") 
let section4 = document.getElementById("links") 
//let links = document.getElementById("links");
//turns charmander array into sometihng we can easily output

//grabs all the arrays and seperates them
const{name: n, stats: newStats, abilities: abils, id, types: Types, ...Others} = charmander
console.log(n)
console.log(newStats)
console.log(abils)
console.log(id)
console.log(Types)
console.log(Others)


// + ✧･ﾟ: *✧･ﾟ:**:･ﾟ✧*:･ﾟ✧ + //


//🔥 displays the pokemon's name 🔥
const H1 = document.createElement("h1")
H1.textContent = n;
imgName.appendChild(H1)


//🔥 displays the Others 🔥
const ARTICLE = document.createElement("article");
const BASE = document.createElement("li");
const LIST = document.createElement("div")
const ORDER = document.createElement("li");
const ID = document.createElement("li");
const HEIGHT = document.createElement("li");
const WEIGHT = document.createElement("li");

BASE.textContent = `Base experience: ${Others["base_experience"]} (Gen I-IV)`;
ORDER.textContent = `Order: ${Others["order"]}`;
ID.textContent = `ID: 00${id}`;
HEIGHT.textContent = `Height: 0.${Others["height"]} m`;
WEIGHT.textContent = `Weight: ${Others["weight"]} kg`;

for(let t in Types){
  const listITEM1 = document.createElement("li");
  const listITEM2 = document.createElement("li");
  listITEM1.textContent = `Type: ${Types[t]["type"]["name"]}`
  listITEM2.textContent = `Total EVs: ${Types[t]["slot"]}`

  LIST.appendChild(listITEM1)
  LIST.appendChild(listITEM2)
}

  ARTICLE.appendChild(BASE);
  ARTICLE.appendChild(LIST);
  ARTICLE.appendChild(ORDER);
  ARTICLE.appendChild(ID);
  ARTICLE.appendChild(HEIGHT);
  ARTICLE.appendChild(WEIGHT);

  general.appendChild(ARTICLE)


//🔥 displays the abilities 🔥
//makes the article where everything goees and p1
const P1 = document.createElement("p");
ARTICLE.appendChild(P1)

for(let a in abils){
  const ITEMS = document.createElement("li");
  ITEMS.textContent = abils[a]["name"];
  P1.textContent = `Abilities:`;
  ARTICLE.appendChild(ITEMS)
}
abilities.appendChild(ARTICLE)


//🔥 displays the stats 🔥
const P2 = document.createElement("p");
  ARTICLE.appendChild(P2)
  
  for(let s in newStats){
    const BASE = document.createElement("li");
    const EFFORT = document.createElement("li");
    const STATISTS = document.createElement("li");
    const BREAK = document.createElement("br")

    P2.textContent = `Stats:`
    BASE.textContent = `Base: ${newStats[s]["base_stat"]}`;
    EFFORT.textContent = `Effort: ${newStats[s]["effort"]}`;

    STATISTS.textContent = `${newStats[s]["stat"]["name"]}:`;

    ARTICLE.appendChild(STATISTS)
    ARTICLE.appendChild(BASE)
    ARTICLE.appendChild(EFFORT)
    ARTICLE.appendChild(BREAK)
  }
  stats.appendChild(ARTICLE)

  
//🔥 IMGS 🔥
document.getElementById("img").height = "490";
document.getElementById("img").width = "540";

let charmeleon = document.createElement("img");
charmeleon.src = "media/charmeleon.png";
charmeleon.height = "140";
charmeleon.width = "120";
section4.appendChild(charmeleon);

let charizard = document.createElement("img");
charizard.src = "media/charizard.png";
charizard.height = "190";
charizard.width = "180";
links.appendChild(charizard);

/*let charms = JSON.parse(charmander)


createImgName(charms);
createGen(charms);
createAble(charms);
createStats(charms);

//✧･ﾟ: *✧･ﾟ:**:･ﾟ✧*:･ﾟ✧//

//🔥 makes the image and the name🔥 
function createImgName(obj){
    const H1 = document.createElement("h1")
    H1.textContent = obj.name;
    imgName.appendChild(H1)
}

//grabs values that are in the array and puts them in the descript. box
//should change based on different buttons
//🔥 this one generates the general text (the first thing that shows in the site)🔥
function createGen(obj){
  //makes the article where everything goees and p1
  const ARTICLE = document.createElement("article");
  const BASE = document.createElement("li");
  const LIST = document.createElement("div")
  const ORDER = document.createElement("li");
  const ID = document.createElement("li");
  const HEIGHT = document.createElement("li");
  const WEIGHT = document.createElement("li");

  BASE.textContent = `Base experience: ${obj["base_experience"]} (Gen I-IV)`;
  ORDER.textContent = `Order: ${obj["order"]}`;
  ID.textContent = `ID: 00${obj["id"]}`;
  HEIGHT.textContent = `Height: 0.${obj["height"]} m`;
  WEIGHT.textContent = `Weight: ${obj["weight"]} kg`;

  const TYPES = obj.types;
  for(let t in TYPES){
    const TYPE = document.createElement("li")
    TYPE.textContent = `Type: ${TYPES[t]["type"]["name"]}`;
    LIST.appendChild(TYPE)
  }
  
  ARTICLE.appendChild(BASE);
  ARTICLE.appendChild(LIST);
  ARTICLE.appendChild(ORDER);
  ARTICLE.appendChild(ID);
  ARTICLE.appendChild(HEIGHT);
  ARTICLE.appendChild(WEIGHT);

  section1.appendChild(ARTICLE)
}

//🔥this one generates the abiliteis text🔥
function createAble(obj){
  //makes the article where everything goees and p1
  const ARTICLE = document.createElement("article");
  const P1 = document.createElement("p");
  ARTICLE.appendChild(P1)
  
  const ABILITIES = obj["abilities"];
  for(let a in ABILITIES){
    const ITEMS = document.createElement("li");
    ITEMS.textContent = ABILITIES[a]["name"];
    P1.textContent = `Abilities:`;
    ARTICLE.appendChild(ITEMS)
  }
  section2.appendChild(ARTICLE)
}
//🔥this one generates the stats text🔥
function createStats(obj){
  //makes the article where everything goees and p1
  const ARTICLE = document.createElement("article");
  const P1 = document.createElement("p");
  ARTICLE.appendChild(P1)
  
  const STATS = obj["stats"];
  for(let s in STATS){
    const BASE = document.createElement("li");
    const EFFORT = document.createElement("li");
    const STATISTS = document.createElement("li");
    const BREAK = document.createElement("br")

    P1.textContent = `Stats:`
    BASE.textContent = `Base: ${STATS[s]["base_stat"]}`;
    EFFORT.textContent = `Effort: ${STATS[s]["effort"]}`;

    STATISTS.textContent = `${STATS[s]["stat"]["name"]}:`;

    ARTICLE.appendChild(STATISTS)
    ARTICLE.appendChild(BASE)
    ARTICLE.appendChild(EFFORT)
    ARTICLE.appendChild(BREAK)
  }
  section3.appendChild(ARTICLE)
}


//🔥 this is what makes the text box cahnges between topics🔥 
  const BUTTON1 = document.getElementById("general")
  const BUTTON2 = document.getElementById("stats")
  const BUTTON3 = document.getElementById("abilites")

  BUTTON1.textContent = "General";
  BUTTON2.textContent = "Abilities";
  BUTTON3.textContent = "Stats";

document.getElementById("img").height = "490";
document.getElementById("img").width = "540";


let charmeleon = document.createElement("img");
charmeleon.src = "media/charmeleon.png";
charmeleon.height = "200";
charmeleon.width = "220";
section4.appendChild(charmeleon);

let charizard = document.createElement("img");
charizard.src = "media/charizard.png";
charizard.height = "200";
charizard.width = "190";
section4.appendChild(charizard);
*/