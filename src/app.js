// import Swiper from '../node_modules/swiper/swiper-bundle.js';
// import '../node_modules/swiper/swiper-bundle.css';
// import SwiperCore, { Navigation, Pagination } from '../node_modules/swiper/core';
import renderTeam from './components/Team.js';
import team from './data/team.js';
// import * from 'https://unpkg.com/swiper/swiper-bundle.min.js';

// init func.
renderTeam();

const swiperWrapperEl = document.querySelector('.swiper-wrapper');

const toRender = team
  .map(({ firstName, lastName, role }) => `
  <div class="swiper-slide">
    <span>${role}</span>
    <h2>${firstName} ${lastName}</h2>
  </div>
    `).join('');

swiperWrapperEl.innerHTML = toRender;

// eslint-disable-next-line no-unused-vars
const swiper = new Swiper('.swiper-container', {
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});




// // configure Swiper to use modules
// SwiperCore.use([Navigation, Pagination]);

// // init Swiper:
// const swiper = new Swiper('.swiper-container', {
//   // Optional parameters
//   direction: 'vertical',
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });
