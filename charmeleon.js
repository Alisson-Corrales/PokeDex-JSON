let charmeleon = 
`{
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

let charmeleonObj = JSON.pars(charmeleon);
let sectionLeft = document.getElementById("sectionLeft");

createLeftSection(charmeleonObj);

function createLeftSection() {
    //The Figuer will take the image
    //The figcaption will contain it name
    //The article will hold it togeter 
    //The article will get append to the section
    const ARTICLE = document.createElement("article");
    const FIGUER = document.createElement("figure");
    const IMG = document.createElement("img");
    const FIGCAPTION = document.createElement("figcaption");


}

