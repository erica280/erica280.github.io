const myCar = new Object();
myCar.color = 'Gray';
myCar.make = 'Mazda';
myCar.model = 'CX-5';
myCar.year = '2017';

const mySecondCar = {
  color: 'Blue',
  make: 'Ford',
  model: 'Ranger',
  year: '2020',
}

console.log(myCar.make);
console.log(mySecondCar.make);

console.log(myCar['make']);

let superHeroes = {
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": [
        "Radiation resistance",
        "Turning tiny",
        "Radiation blast"
      ]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}
​
function addEmployee(obj) {
  let employee = {
    "first_name": "Anna",
    "department": "Tech",
    "designation": "Executive",
    "salary": 25600,
    "raise eligible": false
  };
​
obj['employees'].push(company.employee);

// Function to add a new superhero -- it's built to be changeable (see the function call below)
​
function addHero(obj, heroName, heroAge, heroIdentity, heroPowers) {
  let hero = {
    "name": heroName,
    "age": heroAge,
    "secretIdentity": heroIdentity,
    "powers": heroPowers
  };
​
  obj['members'].push(hero); // the push() method adds a value to an object/array.
​
}
​
//  uncomment this line to add a hero; notice how it pushes fourth entry to the second line?
//  try changing the width of the body and of the article in the week14-demo.css file
​
addHero(superHeroes, "The Batman", 45, "Bruce Wayne", ["money", "technology", "Alfred"]);
​
// Function to populate header... try to add the location of the secret base!
​
function populateHeader(obj) {
  const header = document.querySelector('header');
  const myH1 = document.createElement('h1');
​
  myH1.textContent = obj['squadName'];
  console.log(myH1);
  header.appendChild(myH1);
​
  const myPara = document.createElement('p');
  // We use the `` (top left of keyboard) to indicate strings.
  // You could also concatenate using + signs
  // Like 'Hometown: ' + obj['homeTown'] + '// Formed: ' + obj['formed']
  myPara.textContent = `Hometown: ${obj['homeTown']} // Formed: ${obj['formed']}`;
​
  header.appendChild(myPara);
}
​
// Function to populate heroes cards; will run for however many heros are in the "members" array of our JSON.
​
function populateHeroes(obj) {
  const section = document.querySelector('section');
  const heroes = obj['members'];
​
  for (const hero of heroes) {
    const myArticle = document.createElement('article');
    const myH2 = document.createElement('h2');
    const myPara1 = document.createElement('p');
    const myPara2 = document.createElement('p');
    const myPara3 = document.createElement('p');
    const myList = document.createElement('ul');
​
    myH2.textContent = hero.name;
    myPara1.textContent = `Secret identity: ${hero.secretIdentity}`;
    myPara2.textContent = `Age: ${hero.age}`;
    myPara3.textContent = 'Superpowers:';
​
    const superPowers = hero.powers;
    for (const power of superPowers) {
      const listItem = document.createElement('li');
      listItem.textContent = power;
      myList.appendChild(listItem);
    }
​
    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);
​
    section.appendChild(myArticle);
  }
}
​
populateHeader(superHeroes);
populateHeroes(superHeroes);

// console.log(superHeroes['members'][1]['powers'][1]);
// accessing the second element of the members array.
// accessing the second element in the powers array within the members array

//function to add new superhero
function addHero(obj) {
  const heroName = 'Batman';
  const years = '35';
  const secretID = 'Bruce Wayne';
  const abilities = ['technology', 'money', 'solving riddles'];

  let memb = obj['members']
  console.log(memb);

  memb = [heroName, years, secretID, abilities];
  console.log(memb);
  console.log(obj);

}

addHero(superHeroes);
