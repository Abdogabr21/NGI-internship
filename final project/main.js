const countryList = [
  {
    name: "France",
    continent: "Europe",
    city: "Paris",
    info: "Paris is one of the most beautiful cities in the world, famous for its art, architecture and romantic atmosphere.",
    food: "Croissant, Macarons",
    place: "Eiffel Tower",
    language: "French",
    number: "01 / 04",
    image: "./assets/paris.jpg",
    imagenum: "01",
  },
  {
    name: "Japan",
    continent: "Asia",
    city: "Tokyo",
    info: "Tokyo is a modern city that combines advanced technology with traditional Japanese culture.",
    food: "Sushi, Ramen",
    place: "Tokyo Tower",
    language: "Japanese",
    number: "02 / 04",
    image: "./assets/tokyo.jpg",
    imagenum: "02",
  },
  {
    name: "Italy",
    continent: "Europe",
    city: "Rome",
    info: "Rome is famous for its ancient history, beautiful architecture and delicious Italian food.",
    food: "Pizza, Pasta",
    place: "Colosseum",
    language: "Italian",
    number: "03 / 04",
    image: "./assets/roma.jpg",
    imagenum: "03",
  },
  {
    name: "Egypt",
    continent: "Africa",
    city: "Cairo",
    info: "Cairo is a historic city known for its ancient Egyptian civilization and famous landmarks.",
    food: "Koshari, Foul",
    place: "Pyramids",
    language: "Arabic",
    number: "04 / 04",
    image: "./assets/cairo.jpg",
    imagenum: "04",
  },
];
const image = document.getElementById("image");
const imageNum = document.getElementById("imageNum");
const number = document.getElementById("number");
const country = document.getElementById("country");
const city = document.getElementById("city");
const info = document.getElementById("info");
const continent = document.getElementById("continent");
const food = document.getElementById("food");
const place = document.getElementById("place");
const language = document.getElementById("language");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const points = document.querySelectorAll(".point");
prevButton.addEventListener("click", prev);
nextButton.addEventListener("click", next);
let i = 0;

function showlocation() {
  number.textContent = countryList[i].number;
  country.textContent = countryList[i].name;
  city.textContent = countryList[i].city;
  info.textContent = countryList[i].info;
  continent.textContent = countryList[i].continent;
  food.textContent = countryList[i].food;
  place.textContent = countryList[i].place;
  language.textContent = countryList[i].language;
  image.src = countryList[i].image;
  imageNum.textContent = countryList[i].imagenum;
  points.forEach((point, ind) => {
    point.classList.toggle("active", ind === i);
  });
}
showlocation();
function next() {
  i = (i + 1) % countryList.length;
  showlocation();
}
function prev() {
  i = (i - 1 + countryList.length) % countryList.length;
  showlocation();
}
