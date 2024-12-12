//Instructions Page

//create a welcome/instruction page which will explain the trivia challenge which is on films, multiple choice, and that we have a points system. - html file using p
//create a play button (hyperlink that will take you to the trivia challenge game). So we need two html page.

//Pseudocode for game page

//html object which will be our trivia questions - this will show one quetsion at a time
//5 buttons including the skip one - 4 for multiple choice
//fetch API on js file
//create async function which fetches the API
async function fetchData() {
    try {
      const response = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      // Handle your data
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle any errors
    }
  }

fetchData()

//Access the question property fromm the API
async function getFact() {
  const { text } = await fetchData();
  console.log({ text });
}

getQuestion()
//access each specific question at a time,
//access the correct answers and the incorrect answers,
//log the correct and incorrect answers in random order for the user to see,
//present buttons for the user to choose 'try again'



//we need to display the correct answer once the has picked a response

