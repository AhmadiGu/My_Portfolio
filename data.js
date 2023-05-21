const project = document.querySelector('.subjects');
const modal = document.querySelector('.modal-container');
const featuredProject = document.querySelector('.featured-project');
const container = document.querySelector('.container-element');

const featuredProjectdata = {
  id: 0,
  name: 'Weather Hub',
  image: 'images/weatherProject.png',
  imageUrl: 'images/weatherProject.png',
  description: 'Weather Hub is a React and Redux application that provides current weather info on different countries around the world. and also you can filter the countries according to their related continent.',
  languages: [
    'HTML',
    'Css',
    'Javascript',
    'React',
    'Redux',
  ],
  liveUrl: 'https://weather-app-hub.netlify.app/',
  getUrl: 'https://github.com/AhmadiGu/Weather-React-App',

};

featuredProject.innerHTML = `
<div class="main-project">
  <div class="image">
  <img src="${featuredProjectdata.image}" alt="feature project">
  </div>
  <div class="content"> 
  <h2 class="corner-title">${featuredProjectdata.name}</h2>
  <p class="content">${featuredProjectdata.description}</p>     
  <ul class="works-categories"> 
    ${featuredProjectdata.languages.map((featLang) => `<li class="work-skills">${featLang}</li>`).join('')}
  </ul>
  <button class="modal-button see" id="${featuredProjectdata.id}"  type="button">
    See Projects         
  </button>
  </div>
</div>
`;

const projectData = [
  {
    id: 1,
    image: 'first',
    imageUrl: 'images/meals.png',
    name: 'Meals website',
    description: 'This is Meals website that you can see meals from different categories, see the like of each meal and like your favourite meals also that it GET and display data from API and different API for likes to GET and POST on it.',
    languages: [
      'HTML',
      'CSS',
      'Javascript',
    ],
    liveUrl: 'https://ahmadigu.github.io/Meal-CS2/dist/index.html',
    getUrl: 'https://github.com/AhmadiGu/Meal-CS2',
  },
  {
    id: 2,
    image: 'second',
    imageUrl: 'images/global.png',
    name: 'Global Streaming',
    description: 'Global Streaming is a project that aims to provide a platform for streaming media content, such as videos, music, or live events, on a global scale. It is in responsive and dynamic view in 2 different pages home and about.',
    languages: [
      'HTML',
      'CSS',
      'Javascript',
    ],
    liveUrl: 'https://ahmadigu.github.io/Global_streaming/',
    getUrl: 'https://github.com/AhmadiGu/Global_streaming'
  },
  {
    id: 3,
    name: 'Budget Tracker',
    image: 'third',
    imageUrl: 'images/budget.png', 
    description: 'The Budget Tracker app is a mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
    languages: [
      'Ruby On Rails',
      'CSS',
      'Bootstrap',
    ],
    liveUrl: 'https://budget-app-p05r.onrender.com/',
    getUrl: 'https://github.com/AhmadiGu/Budget_tracker'
  },
  {
    id: 4,
    name: 'Book Store',
    image: 'fourth',
    imageUrl: 'images/bookstore.png', 
    description: 'The Book Store is single page website which will allows you to add books with their category and also see the previous added books and also the progress of each book. Website is react based.',
    languages: [
      'HTML',
      'CSS',
      'Javascript',
      'react',
    ],
    liveUrl: 'https://github.com/AhmadiGu/BookStore',
    getUrl: 'https://github.com/AhmadiGu/BookStore',

  },
  {
    id: 5,
    image: 'fifth',
    imageUrl: 'images/food.png',
    name: 'Food Recipe App',
    description: 'The Recipe app keeps track of all your recipes, ingredients, and inventory. It will allow you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have and what you are missing from a recipe. Also, since sharing recipes is an important part of cooking the app should allow you to make them public so anyone can access them.',
    languages: [
      'HTML',
      'CSS',
      'Ruby On Rails',
      'Postgresql',
    ],
    liveUrl: 'https://food-recipes-n92f.onrender.com/',
    getUrl: 'https://github.com/asharanjith/Food-Recipes-App',

  },
  {
    id: 6,
    name: 'Awesome Books',
    image: 'sixth',
    imageUrl: 'images/book.png', 
    description: 'Awesome Books is a single page website which will allows you to add books with their category and also see the previous added books and also the progress of each book.',
    languages: [
      'HTML',
      'CSS',
      'Javascript',
    ],
    liveUrl: 'https://ahmadigu.github.io/Awesome-bookES6/',
    getUrl: 'https://github.com/AhmadiGu/Awesome-bookES6',

  },
];

project.innerHTML = projectData.map((project) => (
  `
  <div class="${project.image}-project profesional" data-name="${project.name}"> 
      <button id=${project.id} class="see-project modal-button" >
      See Project
    </button>
    </div>
    
    `
)).join('');

const newArray = [featuredProjectdata, ...projectData];
const openModal = (id) => {
  container.style.filter = 'blur(5px)';
  modal.style.display = 'block';
  modal.style.background = '#eee';

  modal.innerHTML = `
        <div class="modal" id="modal">
          <div class="modal-header">
            <h2 id="modal-title">${newArray[id].name}</h2>
            <span class="modal-close" id ="modal-close">&times;</span>
          </div>
          <div id="modal-languages">
            <ul class="works-categories">
              ${newArray[id].languages.map((langSkill) => `<li class="work-skills">${langSkill}</li>`).join('')}     
              </ul>
          </div>
          <div class="modal-content">
            <div class="featured-image">
              <img id="project-image" src="${newArray[id].imageUrl}" alt="Project Preview">
            </div>
            <div class="content">
              <p id="modal-description"> 
               ${newArray[id].description}
              </p>
              <div id="link-container" class="link-container">
                <a id="live-link" class="button live-icon" href="${newArray[id].liveUrl}" target="new">See Live</a>
                <a id="source-link" class="button source-icon" href="${newArray[id].getUrl}" target="new">See Source</a>
              </div>
            </div>
          </div>
        </div>
          `;
};

const openModalButton = document.querySelectorAll('.modal-button');
const buttonsArray = [...openModalButton];
buttonsArray.forEach((button) => {
  button.addEventListener('click', (e) => {
    const { id } = e.target;
    openModal(id);
    const closeModal = document.getElementById('modal-close');
    closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
      container.style.filter = 'none';
    });
  });
});
