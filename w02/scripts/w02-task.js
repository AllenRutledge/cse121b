/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Allen Rutledge';
const currentYear = 2023;
const profilePicture = 'images/404.jpg';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.getElementById('year');
const images = document.getElementsByTagName('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
for (let i = 0; i < images.length; i++) {
    if (images[i].src.endsWith('placeholder.png')) {
      images[i].src = profilePicture;
      break;
    }
}

/* Step 5 - Array */
let foodArray = ['Pizza','Cheeseburger','Ice Cream'];
foodElement.innerHTML = `<br>${foodArray}`;
let foodItem = 'Onion';
foodArray.push(foodItem);
foodElement.innerHTML += `<br>${foodArray}`;
foodArray.shift();
foodElement.innerHTML += `<br>${foodArray}`;
foodArray.pop();
foodElement.innerHTML += `<br>${foodArray}`;