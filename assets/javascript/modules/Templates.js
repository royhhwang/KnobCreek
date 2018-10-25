import data from '../data/DataSort';

const markup = `
${data.map(bourbon => `
<div key="${bourbon.key}">
    <img src="${bourbon.image}" alt="${bourbon.alt}" class="__image" />
    <div class='__icon'></div>
    <div class='__card'>
        <h5 class="subpara--font">${bourbon.display}</h5>
        <h3>${bourbon.title}</h3>
        <a href='${bourbon.a}'>${bourbon.link}</a>
    </div>
    <div id="date" style="background-color:white"></div>
</div>
`).join('')}
`;

document.getElementById('article--content').innerHTML = markup;

export default function tmplContent() { }