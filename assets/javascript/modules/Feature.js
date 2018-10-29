import data from '../data/DataSort';
var landing = data.shift();

const featured = `
<div class="card" key="${landing.key}">
    <div class="card__image" style="background-image: url('${landing.image}')"></div>
    <div class="card__content">
        <img class="icon" src="${landing.icon}" alt="Article Icons" />
        <p class="emphasis-text">${landing.display}</p>
        <h2 class="subheading">${landing.title}</h2>
        <p>${landing.para}</p>
        <a href="${landing.a}" class="red-link">${landing.link}</a>
    </div>
</div>
`;

document.getElementById('feature').innerHTML = featured;

export default featured;
