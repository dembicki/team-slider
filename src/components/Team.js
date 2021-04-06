import team from '../data/teamData.js';

const removeSpecialChars = (str) => {
  return str
    .replace(/ą/g, 'a')
    .replace(/Ą/g, 'A')
    .replace(/ć/g, 'c')
    .replace(/Ć/g, 'C')
    .replace(/ę/g, 'e')
    .replace(/Ę/g, 'E')
    .replace(/ł/g, 'l')
    .replace(/Ł/g, 'L')
    .replace(/ń/g, 'n')
    .replace(/Ń/g, 'N')
    .replace(/ó/g, 'o')
    .replace(/Ó/g, 'O')
    .replace(/ś/g, 's')
    .replace(/Ś/g, 'S')
    .replace(/ż/g, 'z')
    .replace(/Ż/g, 'Z')
    .replace(/ź/g, 'z')
    .replace(/Ź/g, 'Z');
};

const renderTeam = () => {
  // selectors
  const teamEl = document.querySelector('.members');

  const toRender = team
    .map(({ firstName, lastName, role, location, imageURL, email, id }) => {
      const autoEmail = `${removeSpecialChars(firstName).toLowerCase()}.${removeSpecialChars(lastName).toLowerCase()}@indahash.com`;
      return `
    <li class="member" data-id="${id}">
      <a href="mailto:${email || autoEmail}">
        <div class="email">
          <img src="./assets/mail.svg">
        </div>
      </a>
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