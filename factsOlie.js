// An array of FakFacts Objects

// Sample object:
const fakeFactsArr = 
[
{
    "id": "1",
    "text": "This fact is not correct",
    "source": "fake",
  },
  {
    "id": "2",
    "text": "This fact is not true",
    "source": "fake",
  },
  {
    "id": "3",
    "text": "This fact is wholly inacurate",
    "source": "fake",
  },
  {
    "id": "4",
    "text": "A duck's quack doesn't echo",
    "source": "fake",
  },
];

//A function to randomly select a fake fact from the array
async function randomFakeFact() {
    let randomIndex= Math.floor(Math.random() * fakeFactsArr.length);
    fakeFact = fakeFactsArr[randomIndex];
    // console.log ("Fake fact is: " + fakeFact.text);
    return await fakeFact.text
}

// console.log(randomFakeFact())


//create a test realfact to use as an input to chooseFakeorTrueFact
// function realFact() {
//     return "test fact"
    // console.log("real fact is: " + displayFact)
    // return displayFact
// }
// let randomFakeFact = "testFakeFact"


//I need a function to choose randomly between either a fake fact, or false one.
//input a fake fact or a true act and log whether it's real or fake so that we can score the user choice

async function chooseFakeOrTrueFact() {
    // use math.random and choice higher or lower than 0.5
    // If higher, fact = true, return real fact from API
    // if lower, fact = false
    let choice = Math.random()
    if (choice < 0.5) {
        return await getAndDisplayNewFact();
    } else {
        return await randomFakeFact()
    }
}


// realFact()

console.log(randomFakeFact())
console.log(chooseFakeOrTrueFact())




//Import the code from the other file

async function getAndDisplayNewFact() {
  const { text } = await retrieveFact();
  console.log(text);
  displayFact(text);
  return text;
}

//create async function which fetches the API
async function retrieveFact() {
  const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/", {
    headers: {
      Accept: "application/json",
    }
  });
  const data = await response.json();
  return data;
}

//Access the fact  property fromm the API
function displayFact(fact) {
  const factElement = document.getElementById("fact");
  factElement.textContent = fact;
  //Added a test line in to print to console:
  // console.log(fact);
}

let correctAnswer ;
let incorrectAnswer ;

function 

// Waits for the DOM to be fully loaded and then displays an initial joke.
document.addEventListener("DOMContentLoaded", chooseFakeOrTrueFact);

//we need to display the correct answer once the has picked a response
const newFactButton = document.getElementById("newFactBtn");


newFactButton.addEventListener("click", chooseFakeOrTrueFact);