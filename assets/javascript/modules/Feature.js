import data from '../data/DataSort';
var landing = data.shift();

const featured = `
<div class="hero__section bg-dark-tan" key="${landing.key}">
    <img src="${landing.image}" alt="${landing.alt}" class="hero__image"/>
    <div class="hero__content centered-text">
        <img src="${landing.icon}" alt="Article Icons" class="hero__icon icon-med" />
        <h5 class="hero__display font-size-xs">${landing.display}</h5>
        <h2 class="hero__title">${landing.title}</h2>
        <p>${landing.para}</p>
        <a href="${landing.a}" class="hero__link">${landing.link}</a>
    </div>
</div>
`;

document.getElementById('feature').innerHTML = featured;

export default featured;
