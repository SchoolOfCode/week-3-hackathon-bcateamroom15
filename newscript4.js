const fakeFactsArr = [
    {
      "id": "1",
      "text": "Honey never spoils and can be eaten even after thousands of years if properly stored.",
      "source": "fake",
    },
    {
      "id": "2",
      "text": "An octopus has three hearts: two pump blood to the gills, and one pumps it to the rest of the body.",
      "source": "fake",
    },
    {
      "id": "3",
      "text": "The shortest war in history was between Britain and Zanzibar, lasting only 38 minutes.",
      "source": "fake",
    },
    {
      "id": "4",
      "text": "A duck's quack doesn't echo",
      "source": "fake",
    },
    {
      "id": "5",
      "text": "The Eiffel Tower can grow up to 6 inches taller during the summer due to the expansion of the metal in the heat.",
      "source": "fake",
    },
    {
      "id": "6",
      "text": "Humans share about 60% of their DNA with bananas",
      "source": "fake",
    },
    {
      "id": "7",
      "text": "The shortest commercial flight in the world lasts only 47 seconds, between two islands in Scotland.",
      "source": "fake",
    },
    {
      "id": "8",
      "text": "Cows can have best friends and experience stress when separated from them",
      "source": "fake",
    },
    {
      "id": "9",
      "text": "Sharks are the only fish species that can blink with both eyes at the same time",
      "source": "fake",
    },
    {
      "id": "10",
      "text": "In 2006, a group of scientists discovered a hidden city beneath the Sahara Desert, believed to be over 5,000 years old.",
      "source": "fake",
    },
  ];
  
  async function randomFakeFact() {
    let randomIndex = Math.floor(Math.random() * fakeFactsArr.length);
    const fakeFact = fakeFactsArr[randomIndex];
    return fakeFact.text;
  }
  
  let realOrFake = null;
 // if user choice = true then alert correct
 // if user choice = incorrect then alert false
  async function chooseFakeOrTrueFact() {
    let choice = Math.random();
    if (choice < 0.5) {
      realOrFake = true;
      return await getAndDisplayNewFact();
    } else {
      realOrFake = false;
      return await randomFakeFact();
    }
  }
  
  async function getAndDisplayNewFact() {
    const { text } = await retrieveFact();
    //console.log(text); // Just for debugging, you can remove this if you don't need it
    displayFact(text);
    return text;
  }
  
  async function retrieveFact() {
    const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random", {
      headers: {
        Accept: "application/json",
      }
    });
    const data = await response.json();
    return data;
  }
  
  function displayFact(fact) {
    const factElement = document.getElementById("fact");
    factElement.textContent = fact; // Overwrites the content of the element with id="fact"
    console.log(realOrFake);
  }
  
  document.addEventListener("DOMContentLoaded", async () => {
    const fact = await chooseFakeOrTrueFact();
    displayFact(fact); // Display the fact when the page loads
  });
  
  const newFactFalseButton = document.getElementById("falseBtn");
  // const newFactButton = document.querySelector("button");
  
  newFactFalseButton.addEventListener("click", async () => {
    const fact = await chooseFakeOrTrueFact();
    displayFact(fact); // Update the fact element with a new fact when the button is clicked
  });
  
  const displayCorrectAnswer = document.getElementById("trueBtn")
     displayCorrectAnswer.addEventListener("click", async () => {
     if (realOrFake === true) {
      alert("What an expert!")
     } else {
      alert("Sorry, that's not right!")
     }
     })

  const displayIncorrectAnswer = document.getElementById("falseBtn")
     displayIncorrectAnswer.addEventListener("click", async () => {
     if (realOrFake === false) {
      alert("What an expert!")
     } else {
      alert("Sorry, that's not right!")
     }
     })

  const newFactTrueButton = document.getElementById("trueBtn");

  newFactTrueButton.addEventListener("click", async () => {
    const fact = await chooseFakeOrTrueFact();
    displayFact(fact); // Update the fact element with a new fact when the button is clicked
  });
  
  // function displayIncorrectAnswer