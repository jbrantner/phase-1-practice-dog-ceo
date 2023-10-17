console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";


// create dog img from URL


// document.addEventListener('DOMContentLoaded', () => {
// // creates img tag and inserts image url
// function addDogsToDOM(imgArray){
//     const imgDev = document.getElementById('dog-image-container');
//     const dogImg = document.createElement('img');
//     dogImg.src = imgArray;
//     imgDev.appendChild(dogImg)
// }
// // fetches image url
// fetch(imgUrl)
//     .then(response => response.json())
//     .then(data => {
//         for(let i = 0; i < data.message.length; i++){
//             addDogsToDOM(data.message[i])
//         }})
// })


// creates 
document.addEventListener('DOMContentLoaded', () => {
function addBreedsToDOM(array){
    const ulBreed = document.getElementById('dog-breeds');
    const dogBreed = document.createElement('p');
    dogBreed.innerHTML(array)
    ulBreed.appendChild(dogBreed)
}})

fetch(breedUrl)
    .then(response => response.json())
    .then(data => console.log(data))
    .then(data => {
        for(let i = 0; i < data.message.length; i++){
            addBreedToDOM(data.message[i])
        }
    })





