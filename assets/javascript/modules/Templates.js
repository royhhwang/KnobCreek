// import { people } from '../data/data.js';

const data = [
    { 'image': '../images/splash/bourbon-barrels.jpg', 'alt': 'Liquor well-aged in stacked barrels', 'date': 'NOVEMBER 10', 'title': 'This Creek Runs Full, Making Every Glass Count', 'a': '#twitter', 'key': 1 },
    // { 'image': 'url2', 'alt': 'filler-img alt', 'date': '10/22/10', 'title': 'quality', 'a': 'link to article' },
    // { 'image': 'url3', 'alt': 'filler-img alt', 'date': '10/11/10', 'title': 'wefeffd', 'a': 'link to article' },
]

const markup = `
${data.map(bourbon => `
<div class="${bourbon.key}">
    <img src="${bourbon.image}" alt="${bourbon.alt}" class="__image" />
    <div class='__icon'></div>
    <div class='__card'>
        <h5 class="subpara--font">${bourbon.date}</h5>
        <h2>${bourbon.title}</h2>
        <a href='${bourbon.a}'>Read More</a>
    </div>
</div>
`).join('')}
`;

document.getElementById('article--content').innerHTML = markup;


export default function tmplContent() { }