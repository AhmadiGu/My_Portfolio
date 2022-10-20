const project = document.querySelector('.subjects');
const modal = document.querySelector('.modal-container');
const featuredProject = document.querySelector('.featured-project');
const container = document.querySelector('.container-element');

const featuredProjectdata = {
  id: 0,
  name: 'Multi-Post Stories',
  image: 'images/Placeholder.png',
  imageUrl: 'images/Placeholder.png',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  languages: [
    'HTML',
    'Css',
    'Javascript',
    'Ruby',
  ],

};

featuredProject.innerHTML = `
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
`;

const projectData = [
  {
    id: 1,
    image: 'first',
    imageUrl: 'images/Placeholder.png',
    name: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    languages: [
      'HTML',
      'CSS',
      'Javascript',
    ],

  },
  {
    id: 2,
    image: 'second',
    imageUrl: 'images/Placeholder2.png',
    name: 'Data Dashboard Healthcare',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    languages: [
      'HTML',
      'CSS',
      'Javascript',
    ],

  },
  {
    id: 3,
    name: 'Website Protfolio',
    image: 'third',
    imageUrl: 'images/Placeholder3.png',

    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    languages: [
      'HTML',
      'CSS',
      'Javascript',
    ],

  },
  {
    id: 4,
    name: 'Profesional Art Printing Data',
    image: 'fourth',
    imageUrl: 'images/Placeholder6.png',

    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    languages: [
      'HTML',
      'CSS',
      'Javascript',
    ],

  },
  {
    id: 5,
    image: 'fifth',
    imageUrl: 'images/Placeholder2.png',
    name: 'Data Dashboard Healthcare',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    languages: [
      'HTML',
      'CSS',
      'Javascript',
    ],

  },
  {
    id: 6,
    name: 'Website Protfolio',
    image: 'sixth',
    imageUrl: 'images/Placeholder3.png',

    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    languages: [
      'HTML',
      'CSS',
      'Javascript',
    ],

  },
];

project.innerHTML = projectData.map((project) => (
  `
  <div class="${project.image}-project profesional"> 
      <button id=${project.id} class="see-project modal-button">
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
                <a id="live-link" class="button live-icon" href=" #" target="new">See Live</a>
                <a id="source-link" class="button source-icon" href="#" target="new">See Source</a>
              </div>
            </div>
          </div>
        </div>
          `;
};


