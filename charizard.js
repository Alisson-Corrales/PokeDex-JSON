//Charizard
let input = `{
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

//Charmander
let input2 = `{
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
    }`

//Charmeleon for c
let input3 = `{
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



let container = document.getElementById("grid")
let name = document.getElementById("imageAndName")

let paragraph = document.getElementById("description")
let basic = document.getElementById("basic")

let stats = document.getElementById("stats")

let link = document.getElementById("links")

let charizard = JSON.parse(input)

//Basic Info
createContainer(charizard);
createName(charizard);
createParagraph(charizard);
createLink(charizard);


//Functions to create basic info
function createContainer(obj) {
    const CONT = document.createElement("section");

    
}
function createName(obj) {
    const NAME = document.createElement("h1");

    NAME.textContent = `${obj["name"]}`
    imageAndName.appendChild(NAME)
}
function createParagraph(obj) {
    const PARA = document.createElement("p");

    PARA.textContent = `Base Experience: ${obj["base_experience"]}, ID: ${obj["id"]}, Height: ${obj["height"]}`
    imageAndName.appendChild(PARA)
}
function createLink(obj) {
    const LINKS = document.createElement("a");
}

//Stats info
createStats(charizard);

function createStats(obj){
  //STATS stores a array of every stats on a data base
  const STATS = obj["stats"];
  for(stats in STATS) {
      //Ilnitialized all of the HTML elements we are going to need for each stats
      const ARTICLE = document.createElement("artticle")
      const H2 = document.createElement("h2")
      const P1 = document.createElement("p")
      const P2 = document.createElement("p")
      const P3 = document.createElement("p")
      const LIST = document.createElement("ul")

      //Puts the 
      H2.textContent = STATS[stats]["name"];
      P1.textContent = `Base Stat: ${STATS[stats]["base_stat"]}`
      P2.textContent = `Efffort: ${STATS[stats]["effort"]}`
      P3.textContent = `Stats:`

      //Loop throgu hall of the powers and add them to the list


      const POWERS = STATS[stats]["stats"];
      for (power in POWERS) {
          const ITEM = document.createElement("li");
          ITEM.textContent = POWERS[power];
          LIST.appendChild(ITEM);
      }
 //adds the lst to the articles
      ARTICLE.appendChild(H2)
      ARTICLE.appendChild(P1)
      ARTICLE.appendChild(P2)
      ARTICLE.appendChild(P3)
      ARTICLE.appendChild(LIST)

      //Adds the article to the html
      stats.appendChild(ARTICLE)
  }
}
//Functions to create the stats area