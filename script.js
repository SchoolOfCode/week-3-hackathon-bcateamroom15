//Instructions Page

//create a welcome/instruction page which will explain the trivia challenge which is on films, multiple choice, and that we have a points system. - html file using p
//create a play button (hyperlink that will take you to the trivia challenge game). So we need two html page.

async function getAndDisplayNewFact() {
  const { text } = await retrieveFact();
  // console.log({ text });
  displayFact(text);
}
//Pseudocode for game page

//html object which will be our trivia questions - this will show one quetsion at a time
//5 buttons including the skip one - 4 for multiple choice
//fetch API on js file
//create async function which fetches the API
async function retrieveFact() {
  //   try {
  //     const response = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random');
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }
  //     const data = await response.json();
  //     // Handle your data
  //     return data;
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //     // Handle any errors
  //   }
  // }
  const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random", {
    headers: {
      Accept: "application/json",
    }
  });
  //console.log(response);
  const data = await response.json();
  //console.log(data.joke);
  return data;
  }

// fetchData()

//Access the question property fromm the API

// getAndDisplayNewFact()

function displayFact(fact) {
  const factElement = document.getElementById("fact");
  factElement.textContent = fact
  // console.log(fact);
}
//access each specific question at a time,
//access the correct answers and the incorrect answers,
//log the correct and incorrect answers in random order for the user to see,
//present buttons for the user to choose 'try again'

// Waits for the DOM to be fully loaded and then displays an initial joke.
document.addEventListener("DOMContentLoaded", getAndDisplayNewFact);

//we need to display the correct answer once the has picked a response
const newFactButton = document.getElementById("newFactBtn");


newFactButton.addEventListener("click", getAndDisplayNewFact);
