import data from '../data/DataSort';

const articles = `
${data.slice(1).map(bourbon => `
<li class='article__card' key="${bourbon.key}">
    <img src="${bourbon.image}" alt="${bourbon.alt}" class="article__image" />
    <div class='article__content'>
        <img src="${bourbon.icon}" alt="Article Icons" class="icon-xs" />
        <div class="article__circle__base"><div class="article__circle">&nbsp;</div></div>
        <h5 class="font-size-xs article__display">${bourbon.display}</h5>
        <h3 class="article__title">${bourbon.title}</h3>
        <a href='${bourbon.a}' class="article__redirect">${bourbon.link}</a>
    </div>
</li>
`).join('')}
`;

document.getElementById('article').innerHTML = articles;

export default function articleContent() { }