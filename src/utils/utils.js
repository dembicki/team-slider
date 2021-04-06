export const removeSpecialChars = (str) => str
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

export const scrollTo = (to, duration) => {
  const el = document.scrollingElement || document.documentElement;
  const start = el.scrollTop;
  const change = to - start;
  const startTs = performance.now();
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t -= 1;
    return -c / 2 * (t * (t - 2) - 1) + b;
  };
  const animateScroll = (ts) => {
    const currentTime = ts - startTs;
    el.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
    if (currentTime < duration) {
      requestAnimationFrame(animateScroll);
    }
    else {
      el.scrollTop = to;
    }
  };
  requestAnimationFrame(animateScroll);
};