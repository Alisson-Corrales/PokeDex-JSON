let charmanderInput = {
  "abilities": [
    {
      "name": "blaze"
    },
    {
      "name": "solar-power"
    }
  ],
  "base_experience": 62,
  "height": 6,
  "id": 4,
  "is_default": true,
  "name": "charmander",
  "order": 5,
  "stats": [
    {
      "base_stat": 39,
      "effort": 0,
      "stat": {
        "name": "hp"
      }
    },
    {
      "base_stat": 52,
      "effort": 0,
      "stat": {
        "name": "attack"
      }
    },
    {
      "base_stat": 43,
      "effort": 0,
      "stat": {
        "name": "defense"
      }
    },
    {
      "base_stat": 60,
      "effort": 0,
      "stat": {
        "name": "special-attack"
      }
    },
    {
      "base_stat": 50,
      "effort": 0,
      "stat": {
        "name": "special-defense"
      }
    },
    {
      "base_stat": 65,
      "effort": 1,
      "stat": {
        "name": "speed"
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
  "weight": 85
};

let charmeleonInput = {
  "abilities": [
    {
      "name": "blaze"
    },
    {
      "name": "solar-power"
    }
  ],
  "base_experience": 142,
  "height": 11,
  "id": 5,
  "is_default": true,
  "name": "charmeleon",
  "order": 6,
  "stats": [
    {
      "base_stat": 58,
      "effort": 0,
      "stat": {
        "name": "hp"
      }
    },
    {
      "base_stat": 64,
      "effort": 0,
      "stat": {
        "name": "attack"
      }
    },
    {
      "base_stat": 58,
      "effort": 0,
      "stat": {
        "name": "defense"
      }
    },
    {
      "base_stat": 80,
      "effort": 1,
      "stat": {
        "name": "special-attack"
      }
    },
    {
      "base_stat": 65,
      "effort": 0,
      "stat": {
        "name": "special-defense"
      }
    },
    {
      "base_stat": 80,
      "effort": 1,
      "stat": {
        "name": "speed"
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
  "weight": 190
};

let charizardInput = {
  "abilities": [
    {
      "name": "blaze"
    },
    {
      "name": "solar-power"
    }
  ],
  "base_experience": 240,
  "height": 17,
  "id": 6,
  "is_default": true,
  "name": "charizard",
  "order": 7,
  "stats": [
    {
      "base_stat": 78,
      "effort": 0,
      "stat": {
        "name": "hp"
      }
    },
    {
      "base_stat": 84,
      "effort": 0,
      "stat": {
        "name": "attack"
      }
    },
    {
      "base_stat": 78,
      "effort": 0,
      "stat": {
        "name": "defense"
      }
    },
    {
      "base_stat": 109,
      "effort": 3,
      "stat": {
        "name": "special-attack"
      }
    },
    {
      "base_stat": 85,
      "effort": 0,
      "stat": {
        "name": "special-defense"
      }
    },
    {
      "base_stat": 100,
      "effort": 0,
      "stat": {
        "name": "speed"
      }
    }
  ],
  "types": [
    {
      "slot": 1,
      "type": {
        "name": "fire"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying"
      }
    }
  ],
  "weight": 905
};

let input = "Page path is " + window.location.pathname;

input = input.split("/")
input = input.splice(", ");

let lastInput = input[input.length - 1];

let empty = [];


if (lastInput == "charmander.html") {
console.log("this is the cramander page");
charmander();
} if (lastInput == "charizard.html") {
console.log("this is the charizard page");
charizard();
} if (lastInput == "charmeleon.html") {
console.log("this is the charmeleonee page");
charmeleon();
}
//console.log(lastInput);


//console.log(chosen);


//🔥gets all the elements in the html🔥


function charmeleon() {
  //🔥gets all the elements in the html🔥
let grid = document.getElementById("charmander");
let nav = document.getElementById("navbar")
let imgName = document.getElementById("imageAndName");
let general = document.getElementById("generalAbilities")
//let abilities = document.getElementById("abilities")
let stats = document.getElementById("stats")
let links = document.getElementById("links")


//grabs all the arrays and seperates them
const { name: n, stats: newStats, abilities: abils, id, types: Types, ...Others } = charmeleonInput
console.log(n)
console.log(newStats)
console.log(abils)
console.log(id)
console.log(Types)
console.log(Others)


// + ✧･ﾟ: *✧･ﾟ:**:･ﾟ✧*:･ﾟ✧ + //

//
//🔥 makes a navbar 🔥
//
const HOME = document.createElement("a")
const CHARMA = document.createElement("a");
const CHARMEL = document.createElement("a");
const CHARI = document.createElement("a");
const PTAG = document.createElement("p");
const HOLDER = document.createElement("ul");
const ITEM1 = document.createElement("li");
const ITEM2 = document.createElement("li");
const ITEM3 = document.createElement("li");

HOME.setAttribute("href", "LandingPage.html");
CHARMA.setAttribute("href", "charmander.html");
CHARMEL.setAttribute("href", "charmeleon.html");
CHARI.setAttribute("href", "charizard.html");

HOME.textContent = "PokeDex";
CHARMA.textContent = "Charmander";
CHARMEL.textContent = "Charmeleon";
CHARI.textContent = "Charizard";

PTAG.appendChild(HOME);
ITEM1.appendChild(CHARMA);
ITEM2.appendChild(CHARMEL);
ITEM3.appendChild(CHARI);

HOLDER.appendChild(ITEM1)
HOLDER.appendChild(ITEM2)
HOLDER.appendChild(ITEM3)

nav.appendChild(PTAG);
nav.appendChild(HOLDER);


//
//🔥 displays the pokemon's name 🔥
//
const H1 = document.createElement("h1")
H1.textContent = n;
imgName.appendChild(H1)


//
//🔥 displays the Others 🔥
//
//makes the elements that are going to be filled
const ARTICLE1 = document.createElement("article");
const TITLE1 = document.createElement("p")
const BASE = document.createElement("li");
const LIST = document.createElement("div")
const ORDER = document.createElement("li");
const ID = document.createElement("li");
const HEIGHT = document.createElement("li");
const WEIGHT = document.createElement("li");

//fills the previously made elements
TITLE1.textContent = `General:`
BASE.textContent = `Base experience: ${Others["base_experience"]} (Gen I-IV)`;
ORDER.textContent = `Order: ${Others["order"]}`;
ID.textContent = `ID: 00${id}`;
HEIGHT.textContent = `Height: 0.${Others["height"]} m`;
WEIGHT.textContent = `Weight: ${Others["weight"]} kg`;

//loops through types to grab and output the pokemon's type and its slot (which i assumed was its total EVs)
for (let t in Types) {
  const listITEM1 = document.createElement("li");
  const listITEM2 = document.createElement("li");
  listITEM1.textContent = `Type: ${Types[t]["type"]["name"]}`
  listITEM2.textContent = `Total EVs: ${Types[t]["slot"]}`

  LIST.appendChild(listITEM1)
  LIST.appendChild(listITEM2)
}

//displays the elements
ARTICLE1.appendChild(TITLE1)
ARTICLE1.appendChild(BASE);
ARTICLE1.appendChild(LIST);
ARTICLE1.appendChild(ORDER);
ARTICLE1.appendChild(ID);
ARTICLE1.appendChild(HEIGHT);
ARTICLE1.appendChild(WEIGHT);

//this displays EVERYTHING
general.appendChild(ARTICLE1)


//
//🔥 displays the abilities 🔥
//
//makes the title
const TITLE2 = document.createElement("p");
ARTICLE1.appendChild(TITLE2)

//loops through abils to grab the objects and display them
for (let a in abils) {
  const ITEMS = document.createElement("li");
  ITEMS.textContent = `🔥 ${abils[a]["name"]} 🔥`;
  TITLE2.textContent = `Abilities:`;
  ARTICLE1.appendChild(ITEMS)
}
//this displays EVERYTHING
general.appendChild(ARTICLE1)

//
//🔥 displays the stats 🔥
//

const ARTICLE2 = document.createElement("article");
const P2 = document.createElement("p");
ARTICLE2.appendChild(P2)

//loops through newStats to grab the objects and display them
for (let s in newStats) {
  const BASE = document.createElement("li");
  const EFFORT = document.createElement("li");
  const STATISTS = document.createElement("li");
  const BREAK = document.createElement("br")

  P2.textContent = `Stats:`
  BASE.textContent = `Base: ${newStats[s]["base_stat"]}`;
  EFFORT.textContent = `Effort: ${newStats[s]["effort"]}`;

  STATISTS.textContent = `${newStats[s]["stat"]["name"]}:`;

  ARTICLE2.appendChild(STATISTS)
  ARTICLE2.appendChild(BASE)
  ARTICLE2.appendChild(EFFORT)
  ARTICLE2.appendChild(BREAK)
}
//this displays EVERYTHING
stats.appendChild(ARTICLE2)


//
//🔥 IMGS 🔥
//
//makes the charmander picture 490 X 540 px
document.getElementById("img").height = "490";
document.getElementById("img").width = "540";

//makes a p element and charmeleon img link that's 140X120 px
let link1 = document.createElement("a");
link1.setAttribute("href", "charmander.html");

let textLevel1 = document.createElement("p");
textLevel1.textContent = "Level 1!";

let charmeleon = document.createElement("img");
charmeleon.src = "images/charmander.png";
charmeleon.height = "140";
charmeleon.width = "120";
link1.appendChild(charmeleon)

links.appendChild(textLevel1);
links.appendChild(link1);

//makes a p element and a charizard image link that's 190X120 px 
let link2 = document.createElement("a");
link2.setAttribute("href", "charizard.html");

let textLevel2 = document.createElement("p")
textLevel2.textContent = "Level 36!"

let charizard = document.createElement("img");
charizard.src = "images/charizard2.png";
charizard.height = "190";
charizard.width = "180";
link2.appendChild(charizard)

links.appendChild(textLevel2);
links.appendChild(link2);
}

function charizard() {
  //🔥gets all the elements in the html🔥
let grid = document.getElementById("charmander");
let nav = document.getElementById("navbar")
let imgName = document.getElementById("imageAndName");
let general = document.getElementById("generalAbilities")
//let abilities = document.getElementById("abilities")
let stats = document.getElementById("stats")
let links = document.getElementById("links")


//grabs all the arrays and seperates them
const { name: n, stats: newStats, abilities: abils, id, types: Types, ...Others } = charizardInput
console.log(n)
console.log(newStats)
console.log(abils)
console.log(id)
console.log(Types)
console.log(Others)


// + ✧･ﾟ: *✧･ﾟ:**:･ﾟ✧*:･ﾟ✧ + //

//
//🔥 makes a navbar 🔥
//
const HOME = document.createElement("a")
const CHARMA = document.createElement("a");
const CHARMEL = document.createElement("a");
const CHARI = document.createElement("a");
const PTAG = document.createElement("p");
const HOLDER = document.createElement("ul");
const ITEM1 = document.createElement("li");
const ITEM2 = document.createElement("li");
const ITEM3 = document.createElement("li");

HOME.setAttribute("href", "LandingPage.html");
CHARMA.setAttribute("href", "charmander.html");
CHARMEL.setAttribute("href", "charmeleon.html");
CHARI.setAttribute("href", "charizard.html");

HOME.textContent = "PokeDex";
CHARMA.textContent = "Charmander";
CHARMEL.textContent = "Charmeleon";
CHARI.textContent = "Charizard";

PTAG.appendChild(HOME);
ITEM1.appendChild(CHARMA);
ITEM2.appendChild(CHARMEL);
ITEM3.appendChild(CHARI);

HOLDER.appendChild(ITEM1)
HOLDER.appendChild(ITEM2)
HOLDER.appendChild(ITEM3)

nav.appendChild(PTAG);
nav.appendChild(HOLDER);


//
//🔥 displays the pokemon's name 🔥
//
const H1 = document.createElement("h1")
H1.textContent = n;
imgName.appendChild(H1)


//
//🔥 displays the Others 🔥
//
//makes the elements that are going to be filled
const ARTICLE1 = document.createElement("article");
const TITLE1 = document.createElement("p")
const BASE = document.createElement("li");
const LIST = document.createElement("div")
const ORDER = document.createElement("li");
const ID = document.createElement("li");
const HEIGHT = document.createElement("li");
const WEIGHT = document.createElement("li");

//fills the previously made elements
TITLE1.textContent = `General:`
BASE.textContent = `Base experience: ${Others["base_experience"]} (Gen I-IV)`;
ORDER.textContent = `Order: ${Others["order"]}`;
ID.textContent = `ID: 00${id}`;
HEIGHT.textContent = `Height: 0.${Others["height"]} m`;
WEIGHT.textContent = `Weight: ${Others["weight"]} kg`;

//loops through types to grab and output the pokemon's type and its slot (which i assumed was its total EVs)
for (let t in Types) {
  const listITEM1 = document.createElement("li");
  const listITEM2 = document.createElement("li");
  listITEM1.textContent = `Type: ${Types[t]["type"]["name"]}`
  listITEM2.textContent = `Total EVs: ${Types[t]["slot"]}`

  LIST.appendChild(listITEM1)
  LIST.appendChild(listITEM2)
}

//displays the elements
ARTICLE1.appendChild(TITLE1)
ARTICLE1.appendChild(BASE);
ARTICLE1.appendChild(LIST);
ARTICLE1.appendChild(ORDER);
ARTICLE1.appendChild(ID);
ARTICLE1.appendChild(HEIGHT);
ARTICLE1.appendChild(WEIGHT);

//this displays EVERYTHING
general.appendChild(ARTICLE1)


//
//🔥 displays the abilities 🔥
//
//makes the title
const TITLE2 = document.createElement("p");
ARTICLE1.appendChild(TITLE2)

//loops through abils to grab the objects and display them
for (let a in abils) {
  const ITEMS = document.createElement("li");
  ITEMS.textContent = `🔥 ${abils[a]["name"]} 🔥`;
  TITLE2.textContent = `Abilities:`;
  ARTICLE1.appendChild(ITEMS)
}
//this displays EVERYTHING
general.appendChild(ARTICLE1)

//
//🔥 displays the stats 🔥
//

const ARTICLE2 = document.createElement("article");
const P2 = document.createElement("p");
ARTICLE2.appendChild(P2)

//loops through newStats to grab the objects and display them
for (let s in newStats) {
  const BASE = document.createElement("li");
  const EFFORT = document.createElement("li");
  const STATISTS = document.createElement("li");
  const BREAK = document.createElement("br")

  P2.textContent = `Stats:`
  BASE.textContent = `Base: ${newStats[s]["base_stat"]}`;
  EFFORT.textContent = `Effort: ${newStats[s]["effort"]}`;

  STATISTS.textContent = `${newStats[s]["stat"]["name"]}:`;

  ARTICLE2.appendChild(STATISTS)
  ARTICLE2.appendChild(BASE)
  ARTICLE2.appendChild(EFFORT)
  ARTICLE2.appendChild(BREAK)
}
//this displays EVERYTHING
stats.appendChild(ARTICLE2)


//
//🔥 IMGS 🔥
//
//makes the charmander picture 490 X 540 px
document.getElementById("img").height = "490";
document.getElementById("img").width = "540";

//makes a p element and a charizard image link that's 190X120 px 
let link2 = document.createElement("a");
link2.setAttribute("href", "charmander.html");

let textLevel2 = document.createElement("p")
textLevel2.textContent = "Level 1!"

let charizard = document.createElement("img");
charizard.src = "images/charmander.png";
charizard.height = "190";
charizard.width = "180";
link2.appendChild(charizard)

links.appendChild(textLevel2);
links.appendChild(link2);

//makes a p element and charmeleon img link that's 140X120 px
let link1 = document.createElement("a");
link1.setAttribute("href", "charmeleon.html");

let textLevel1 = document.createElement("p");
textLevel1.textContent = "Level 16!";

let charmeleon = document.createElement("img");
charmeleon.src = "images/charmeleon.png";
charmeleon.height = "140";
charmeleon.width = "120";
link1.appendChild(charmeleon)

links.appendChild(textLevel1);
links.appendChild(link1);




}

function charmander() {
  //🔥gets all the elements in the html🔥
let grid = document.getElementById("charmander");
let nav = document.getElementById("navbar")
let imgName = document.getElementById("imageAndName");
let general = document.getElementById("generalAbilities")
//let abilities = document.getElementById("abilities")
let stats = document.getElementById("stats")
let links = document.getElementById("links")


//grabs all the arrays and seperates them
const { name: n, stats: newStats, abilities: abils, id, types: Types, ...Others } = charmanderInput
console.log(n)
console.log(newStats)
console.log(abils)
console.log(id)
console.log(Types)
console.log(Others)


// + ✧･ﾟ: *✧･ﾟ:**:･ﾟ✧*:･ﾟ✧ + //

//
//🔥 makes a navbar 🔥
//
const HOME = document.createElement("a")
const CHARMA = document.createElement("a");
const CHARMEL = document.createElement("a");
const CHARI = document.createElement("a");
const PTAG = document.createElement("p");
const HOLDER = document.createElement("ul");
const ITEM1 = document.createElement("li");
const ITEM2 = document.createElement("li");
const ITEM3 = document.createElement("li");

HOME.setAttribute("href", "LandingPage.html");
CHARMA.setAttribute("href", "charmander.html");
CHARMEL.setAttribute("href", "charmeleon.html");
CHARI.setAttribute("href", "charizard.html");

HOME.textContent = "PokeDex";
CHARMA.textContent = "Charmander";
CHARMEL.textContent = "Charmeleon";
CHARI.textContent = "Charizard";

PTAG.appendChild(HOME);
ITEM1.appendChild(CHARMA);
ITEM2.appendChild(CHARMEL);
ITEM3.appendChild(CHARI);

HOLDER.appendChild(ITEM1)
HOLDER.appendChild(ITEM2)
HOLDER.appendChild(ITEM3)

nav.appendChild(PTAG);
nav.appendChild(HOLDER);


//
//🔥 displays the pokemon's name 🔥
//
const H1 = document.createElement("h1")
H1.textContent = n;
imgName.appendChild(H1)


//
//🔥 displays the Others 🔥
//
//makes the elements that are going to be filled
const ARTICLE1 = document.createElement("article");
const TITLE1 = document.createElement("p")
const BASE = document.createElement("li");
const LIST = document.createElement("div")
const ORDER = document.createElement("li");
const ID = document.createElement("li");
const HEIGHT = document.createElement("li");
const WEIGHT = document.createElement("li");

//fills the previously made elements
TITLE1.textContent = `General:`
BASE.textContent = `Base experience: ${Others["base_experience"]} (Gen I-IV)`;
ORDER.textContent = `Order: ${Others["order"]}`;
ID.textContent = `ID: 00${id}`;
HEIGHT.textContent = `Height: 0.${Others["height"]} m`;
WEIGHT.textContent = `Weight: ${Others["weight"]} kg`;

//loops through types to grab and output the pokemon's type and its slot (which i assumed was its total EVs)
for (let t in Types) {
  const listITEM1 = document.createElement("li");
  const listITEM2 = document.createElement("li");
  listITEM1.textContent = `Type: ${Types[t]["type"]["name"]}`
  listITEM2.textContent = `Total EVs: ${Types[t]["slot"]}`

  LIST.appendChild(listITEM1)
  LIST.appendChild(listITEM2)
}

//displays the elements
ARTICLE1.appendChild(TITLE1)
ARTICLE1.appendChild(BASE);
ARTICLE1.appendChild(LIST);
ARTICLE1.appendChild(ORDER);
ARTICLE1.appendChild(ID);
ARTICLE1.appendChild(HEIGHT);
ARTICLE1.appendChild(WEIGHT);

//this displays EVERYTHING
general.appendChild(ARTICLE1)


//
//🔥 displays the abilities 🔥
//
//makes the title
const TITLE2 = document.createElement("p");
ARTICLE1.appendChild(TITLE2)

//loops through abils to grab the objects and display them
for (let a in abils) {
  const ITEMS = document.createElement("li");
  ITEMS.textContent = `🔥 ${abils[a]["name"]} 🔥`;
  TITLE2.textContent = `Abilities:`;
  ARTICLE1.appendChild(ITEMS)
}
//this displays EVERYTHING
general.appendChild(ARTICLE1)

//
//🔥 displays the stats 🔥
//

const ARTICLE2 = document.createElement("article");
const P2 = document.createElement("p");
ARTICLE2.appendChild(P2)

//loops through newStats to grab the objects and display them
for (let s in newStats) {
  const BASE = document.createElement("li");
  const EFFORT = document.createElement("li");
  const STATISTS = document.createElement("li");
  const BREAK = document.createElement("br")

  P2.textContent = `Stats:`
  BASE.textContent = `Base: ${newStats[s]["base_stat"]}`;
  EFFORT.textContent = `Effort: ${newStats[s]["effort"]}`;

  STATISTS.textContent = `${newStats[s]["stat"]["name"]}:`;

  ARTICLE2.appendChild(STATISTS)
  ARTICLE2.appendChild(BASE)
  ARTICLE2.appendChild(EFFORT)
  ARTICLE2.appendChild(BREAK)
}
//this displays EVERYTHING
stats.appendChild(ARTICLE2)


//
//🔥 IMGS 🔥
//
//makes the charmander picture 490 X 540 px
document.getElementById("img").height = "490";
document.getElementById("img").width = "540";

//makes a p element and charmeleon img link that's 140X120 px
let link1 = document.createElement("a");
link1.setAttribute("href", "charmeleon.html");

let textLevel1 = document.createElement("p");
textLevel1.textContent = "Level 16!";

let charmeleon = document.createElement("img");
charmeleon.src = "images/charmeleon.png";
charmeleon.height = "140";
charmeleon.width = "120";
link1.appendChild(charmeleon)

links.appendChild(textLevel1);
links.appendChild(link1);

//makes a p element and a charizard image link that's 190X120 px 
let link2 = document.createElement("a");
link2.setAttribute("href", "charizard.html");

let textLevel2 = document.createElement("p")
textLevel2.textContent = "Level 36!"

let charizard = document.createElement("img");
charizard.src = "images/charizard2.png";
charizard.height = "190";
charizard.width = "180";
link2.appendChild(charizard)

links.appendChild(textLevel2);
links.appendChild(link2);


}

