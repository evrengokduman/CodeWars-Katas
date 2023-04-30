/* This one is a mix of tutorial question and my own problem

Find your next destination
Use async/await with an api
Create a randomizer country name button
Make a button, filter a random country name, show it on the dom */

/* <div class="country-pick">
  <button id="btn">Click to Find Your Next Destination</button>
  <span id="country"></span>
</div>;

.country-pick{
  display:flex;
  flex-direction: column;
  align-items:center;
} */

const span = document.querySelector("#country");
const btn = document.querySelector("#btn");

const url = "https://restcountries.com/v2/all";

btn.addEventListener("click", () => {
  getCountry()
    .then((countryName) => {
      span.textContent = countryName;
    })
    .catch((error) => {
      console.error(error);
    });
});

async function getCountry() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const randomNumber = Math.floor(Math.random() * data.length);
    return data[randomNumber].name;
  } catch (error) {
    throw error;
  }
}
