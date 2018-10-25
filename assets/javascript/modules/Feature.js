import data from '../data/DataSort';

var landing = data.shift();

const featured = `
<section class="bg--darkTan" key="${landing.key}">
    <aside>
        <img src="${landing.image}" alt="${landing.alt}" />
        <div class="--featured --centered">
            <img src="${landing.icon}" alt="Article Icons" class="__medium-icon" />
            <h5 class="subpara--font">${landing.display}</h5>
            <h2>${landing.title}</h2>
            <p>${landing.para}</p>
            <a href="${landing.a}">${landing.link}</a>
        </div>
    </aside>
</section>
`;

document.getElementById('featured--content').innerHTML = featured;

export default featured;