/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Allen Rutledge",
    photo: 'images/404.jpg',
    favoriteFoods: [
        'Pizza',
        'Burger',
        'Ice Cream',
        'Onion',
        'Stromboli'
    ],
    hobbies: [
        'Video Games',
        'Virtual Reality',
        'Art',
        'Programming'
    ],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({
        place: 'Fairfax, VA',
        length: '16 years'
    },
    {
        place: 'Cibolo, TX',
        length: '2 years'
    },
    {
        place: 'Glen Burnie, MD',
        length: '4 years'
    },
    {
        place: 'Round Hill, VA',
        length: '3 months'
    },
    {
        place: 'Rexburg, ID',
        length: '2+ years'
    });

/* DOM Manipulation - Output */
/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(({place,length}) => {
    let dt = document.createElement('dt');
    let dd = document.createElement('dd');
    dt.textContent = place;
    dd.textContent = length;
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
});