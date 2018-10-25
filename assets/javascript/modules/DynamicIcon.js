const paths = [
    {'icon': 'article', }
];

var svg = document.getElementsByClassName('__icon')[0];

var newElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
newElement.setAttribute('width', '75');
newElement.setAttribute('height', '75');

export default DynamicIcon;