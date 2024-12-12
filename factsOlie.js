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
function randomFakeFact() {
    let randomIndex= Math.floor(Math.random() * fakeFactsArr.length);
    fakeFact = fakeFactsArr[randomIndex];
    // console.log ("Fake fact is: " + fakeFact.text);
    return fakeFact.text
}

console.log(randomFakeFact())


//create a test realfact to use as an input to chooseFakeorTrueFact
function realFact() {
    return "test fact"
}
// let randomFakeFact = "testFakeFact"

//I need a function to choose randomly between either a fake fact, or false one.
//input a fake fact or a true act and log whether it's real or fake so that we can score the user choice
function chooseFakeOrTrueFact() {
    // use math.random and choice higher or lower than 0.5
    // If higher, fact = true, return real fact from API
    // if lower, fact = false
    let choice = Math.random()
    if (choice < 0.5) {
        return realFact();
    } else {
        return randomFakeFact()
    }
}


// realFact()

randomFakeFact()

console.log(chooseFakeOrTrueFact())