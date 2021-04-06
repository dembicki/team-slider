import team from '../data/team.js';


const renderTeam = () => {
  // selectors
  const teamEl = document.querySelector('.members');

  const toRender = team.map(({ firstName, lastName, role, location, imageURL }) => {
    const mailAddr = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@indahash.com`;
    return `
    <li class="member">
    <a href="mailto:${mailAddr}"><div class="email"><img src="./assets/mail.svg"></div></a>
    <img
    src="${imageURL}"
    alt="avatar"
    />
    <h3 class="name">${firstName} ${lastName}</h3>
    <div class="details">
    <span class="role">${role}</span>
    <span class="location">${location}</span>
    </div>
    
    </li>
    `;
  }).join('');

  // render items
  teamEl.innerHTML = toRender;
};

export default renderTeam;