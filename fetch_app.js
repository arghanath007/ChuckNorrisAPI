const URL = "https://api.chucknorris.io/jokes/random";
const img = document.querySelector(".container img");

const btn = document.querySelector(".btn");
const container = document.querySelector(".content");

btn.addEventListener("click", () => {
  fetch(URL)
    .then((data) => data.json())
    .then((response) => displayData(response))
    .catch((err) => console.log(err));
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

// This code has been omitted here
// function getData(url) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", url);
//     xhr.send();
//     xhr.onreadystatechange = () => {
//       if (xhr.readyState !== 4) {
//         return;
//       }
//       if (xhr.status === 200) {
//         resolve(xhr.responseText);
//       } else {
//         reject({
//           status: xhr.status,
//           text: xhr.statusText,
//         });
//       }
//     };
//   });
// }
