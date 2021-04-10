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

let container = document.getElementById("grid")
let images = document.getElementById("imageAndName")
let paragraph = document.getElementById("description")
let link = document.getElementById("links")

let charizard = JSON.parse(input)

createContainer(charizard);
createImages(charizard);
createParagraph(charizard);
createLink(charizard);


function createContainer(obj) {
    const CONT = document.createElement("")
}

function createImages(obj) {
    const 
}

function createParagraph(obj) {
    const 
}

function createLink(obj) {
    const 
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//These go into section 1
//Picture section
//image tag


//name section
//h1 tag

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//These go into the second section

//description
//paragraph tag


//Basic section
//parapgraph tag with id "basic"


//Stats section
//paragraph tag with id "stats"


//types section
//parapgraph tag with id "types"


//Link to other charmander evolution
// image tag


//link to charmeleon evolution
//image tag


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~