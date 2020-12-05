const URL = "https://api.chucknorris.io/jokes/random";
const img = document.querySelector(".container img");

const btn = document.querySelector(".btn");
const container = document.querySelector(".content");

btn.addEventListener("click", async () => {
  try {
    const data = await fetch(URL);
    const response = await data.json();
    displayData(response);
  } catch (error) {
    console.log(error);
  }
});

function displayData({ value: joke }) {
  img.classList.add("shake-img");
  // const response = data;
  //   const { value: joke } = JSON.parse(data);
  const random = Math.random() * 1000;
  // const { value: joke } = response;
  container.textContent = joke;
  setTimeout(() => {
    img.classList.remove("shake-img");
  }, random);
}
