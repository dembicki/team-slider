import team from '../data/teamData.js';

const toggleSlider = (input) => {
  const header = document.querySelector('.slider');
  if (input) header.classList.remove('hidden');
  else header.classList.add('hidden');
};

const initSlider = () => {
  const swiperWrapperEl = document.querySelector('.swiper-wrapper');

  const toRender =
    team.map(({ firstName, lastName, role }) => `
      <div class="swiper-slide">
        <span>${role}</span>
        <h2>${firstName} ${lastName}</h2>
      </div>
    `).join('');

  // render slide elements
  swiperWrapperEl.innerHTML = toRender;

  const swiper = new Swiper('.swiper-container', {
    loop: true,
    speed: 800,
    slidesPerView: 1,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // event listeners
  const members = document.querySelectorAll('.member');
  members.forEach(member => {
    member.addEventListener('click', (e) => {
      swiper.slideTo(e.currentTarget.dataset.id, 800, true);
      toggleSlider(true);
    });
  });

  const closeBtn = document.querySelector('.swiper-button-close');
  closeBtn.addEventListener('click', () => toggleSlider(false));
};

export default initSlider;