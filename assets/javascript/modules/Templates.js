import data from '../data/DataSort';

const articles = `
${data.slice(1).map(bourbon => `
<div key="${bourbon.key}">
    <img src="${bourbon.image}" alt="${bourbon.alt}" class="__image" />
    <div class='__card'>
        <img src="${bourbon.icon}" alt="Article Icons" class="__small-icon" />
        <div class="__circle"><div>&nbsp;</div></div>
        <h5 class="subpara--font">${bourbon.display}</h5>
        <h3>${bourbon.title}</h3>
        <a href='${bourbon.a}'>${bourbon.link}</a>
    </div>
    <div id="date" style="background-color:white"></div>
</div>
`).join('')}
`;

document.getElementById('article--content').innerHTML = articles;

export default function articleContent() { }