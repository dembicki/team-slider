import team from './data/team.js';

const teamEl = document.querySelector('.members');


const toRender = team.map(({ firstName, lastName, role, location }) => {
  let mailAddr = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@indahash.com`;
  return `
  <li class="member">
  <a href="mailto:${mailAddr}"><div class="email"><img src="./assets/mail.svg"></div></a>
  <img
    src="https://source.unsplash.com/random/200x200"
    alt="avatar"
  />
  <h3 class="name">${firstName} ${lastName}</h3>
  <div class="details">
    <span class="role">${role}</span>
    <span class="location">${location}</span>
  </div>
 
</li>
  `}).join('');

teamEl.innerHTML = toRender;

