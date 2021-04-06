import team from './data/team.js';

const teamEl = document.querySelector('.members');


const toRender = team.map(({ firstName, lastName, role, location }) => `
  <li class="member">
  <img
    src="https://source.unsplash.com/random/200x200"
    alt="avatar"
  />
  <h3 class="name">${firstName} ${lastName}</h3>
  <div class="details">
    <span class="role">${role}</span>
    <span class="location">${location}</span>
  </div>
  <a href="#"><span></span></a>
</li>
  `).join('');

teamEl.innerHTML = toRender;

