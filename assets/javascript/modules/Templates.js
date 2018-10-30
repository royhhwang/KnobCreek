import data from '../data/DataSort';

const articles = `
${data.slice(1).map(bourbon => `
<li class="article__list__item" key="${bourbon.key}">
            <div class="card">
              <div class="card__image" style="background-image: url('${bourbon.image}')"></div>
              <div class="card__content">
                <div class="circle-icon">
                  <img src="${bourbon.icon}" alt="Article Icons" class="icon" />
                </div>
                <p class="emphasis-text">${bourbon.display}</p>
                <h2 class="subheading-2">${bourbon.title}</h2>
                <a href="${bourbon.a}" class="red-link">${bourbon.link}</a>
              </div>
            </div>
          </li>
`).join('')}
`;

document.getElementById('article').innerHTML = articles;

export default function articleContent() { }
