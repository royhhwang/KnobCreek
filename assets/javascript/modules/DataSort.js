const data = [
    { 'image': '../images/splash/bourbon-barrels.jpg', 'alt': 'Liquor well-aged in stacked barrels', 'display': 'NOVEMBER 10', 'date': '2018-11-10', 'title': 'This Creek Runs Full, Making Every Glass Count', 'a': '#twitter', 'key': 1 },
    { 'image': '../images/splash/bourbon-campfire-solo.jpg', 'alt': 'Man sitting comtemplating whether to drink more Knob Creek. The answer is yes.', 'display': 'NOVEMBER 01', 'date': '2018-11-01', 'title': 'Celebrating Knob Creek\'s 25th Anniversary', 'a': '#twitter', 'key': 2 }
    // { 'image': 'url3', 'alt': 'filler-img alt', 'date': '10/11/10', 'title': 'wefeffd', 'a': 'link to article' },
]

const sortData = () => {
    data.sort((a, b) => {
        const c = new Date(a.date);
        const d = new Date(b.date);
        return [c - d];
    })
}

// const sortData = sortByDate;
document.querySelector('#date').innerHTML = sortData;