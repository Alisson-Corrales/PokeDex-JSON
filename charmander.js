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
"weight": 85}`


//🔥gets all the elements in the html🔥
let grid = document.getElementById("grid");
let imgName = document.getElementById("imageAndName");
let desc = document.getElementById("description");
let links = document.getElementById("links");
//turns charmander array into sometihng we can easily output
let charms = JSON.parse(charmander)

createImgName(charms);
createDesc(charms);
createLinks(charms);

function createImgName(obj){
    const H1 = document.createElement("h1")
    H1.textContent = obj.name;
    imgName.appendChild(H1)
}
//grabs values that are in the array and puts them in the descript. box
//should change based on different
function createDesc(obj){}

function createLinks(obj){}

//let file = window.location.pathname
//file = /charmander.html - except you splice our the / and .html
//file += .json