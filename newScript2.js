const fakeFactsArr = [
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
  
  async function randomFakeFact() {
    let randomIndex = Math.floor(Math.random() * fakeFactsArr.length);
    const fakeFact = fakeFactsArr[randomIndex];
    return fakeFact.text;
  }
  
  async function chooseFakeOrTrueFact() {
    let choice = Math.random();
    if (choice < 0.5) {
      return await getAndDisplayNewFact();
    } else {
      return await randomFakeFact();
    }
  }
  
  async function getAndDisplayNewFact() {
    const { text } = await retrieveFact();
    console.log(text);
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
    factElement.textContent = fact;
  }
  
  document.addEventListener("DOMContentLoaded", async () => {
    const fact = await chooseFakeOrTrueFact();
    console.log(fact); // Log the chosen fact
  });
  
  const newFactButton = document.getElementById("newFactBtn");
  
  newFactButton.addEventListener("click", async () => {
    const fact = await chooseFakeOrTrueFact();
    console.log(fact); // Log the new fact when the button is clicked
  });
  