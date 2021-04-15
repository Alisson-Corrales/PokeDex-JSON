"use strict";


//🔥this holds everything🔥 
let charmander = `{"abilities": [
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
    "name": "Charmander",
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
"weight": 85}`

let charizard = `{
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
}`

let charmeleon = `{
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
}`

let input = ``


if (document.body.id = charizard) {
  input = charizard
} if (document.body.id = charmander) {
  input = charmander
} if (document.body.id = charmeleon) {
  input = charmeleon
} else {
  input = ``
}



//🔥gets all the elements in the html🔥
//let grid = document.getElementById("grid");
let imgName = document.getElementById("imageAndName");
let section = document.getElementById("description")
let links = document.getElementById("links");
//turns charmander array into sometihng we can easily output
let charms = JSON.parse(input)


createImgName(charms);
createGen(charms);
createStats(charms);
createAble(charms);
createTypes(charms);


//✧･ﾟ: *✧･ﾟ:* 🔥 *:･ﾟ✧*:･ﾟ✧//


//🔥 makes the image and the name🔥 
function createImgName(obj){
    const H1 = document.createElement("h1")
    H1.textContent = obj.name;
    imgName.appendChild(H1)
}

//🔥 grabs values that are in the array and puts them in the descript. box
//should change based on different buttons 🔥 
function createGen(obj){
  //🔥 makes the article where everything goees and p1🔥 
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
  section.appendChild(ARTICLE)
}
function createStats(obj){
  //🔥 makes the article where everything goees and p1🔥 
  const ARTICLE = document.createElement("article");
  const P1 = document.createElement("p");
  ARTICLE.appendChild(P1)
  
  const STATS = obj["stats"];
  for(let s in STATS){
    const ITEMS = document.createElement("li");
    ITEMS.textContent = STATS[s]["base_stat"];
    P1.textContent = `Stats:`
    ARTICLE.appendChild(ITEMS)
  }
  section.appendChild(ARTICLE)
}
function createAble(obj){
  //🔥 makes the article where everything goees and p1🔥 
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
  section.appendChild(ARTICLE)
}
function createTypes(obj){
  //🔥 makes the article where everything goees and p1🔥 
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
  section.appendChild(ARTICLE)
}


//🔥 this is what makes the text box cahnges between topics🔥 
  const BUTTON1 = document.getElementById("general")
  const BUTTON2 = document.getElementById("stats")
  const BUTTON3 = document.getElementById("abilites")
  const BUTTON4 = document.getElementById("types")

  BUTTON1.textContent = "general";
  BUTTON2.textContent = "abilities";
  BUTTON3.textContent = "stats";
  BUTTON4.textContent = "types";


//let file = window.location.pathname
//file = /charmander.html - except you splice our the / and .html
//file += .json

//TO DO LIST
//* make a function for every button 0/4
//* make a new article for each one, if you click one button, it erases the current article 0/4
//* make time for scss