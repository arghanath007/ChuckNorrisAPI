const URL = "https://api.chucknorris.io/jokes/random";
const img = document.querySelector(".container img");

const btn = document.querySelector(".btn");
const container = document.querySelector(".content");

btn.addEventListener("click", () => {
  getData(URL);
});

function getData(url) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.send();
  xhr.onreadystatechange = () => {
    if (xhr.readyState !== 4) {
      return;
    }
    if (xhr.status === 200) {
      img.classList.add("shake-img");
      const response = JSON.parse(xhr.responseText);
      //   const { value: joke } = JSON.parse(xhr.responseText);
      const random = Math.random() * 1000;
      const { value: joke } = response;
      container.textContent = joke;
      setTimeout(() => {
        img.classList.remove("shake-img");
      }, random);
    } else {
      console.log({
        status: xhr.status,
        text: xhr.statusText,
      });
    }
  };
}
