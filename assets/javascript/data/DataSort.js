const data = [
    { 'image': '../images/splash/bourbon-barrels.jpg', 'alt': 'Liquor well-aged in stacked barrels', 'display': 'NOVEMBER 10', 'date': '2018-11-10', 'title': 'This Creek Runs Full, Making Every Glass Count', 'a': '#twitter', 'link': 'Read More', 'key': 1 },
    { 'image': '../images/splash/bourbon-campfire-solo.jpg', 'alt': 'Man sitting comtemplating whether to drink more Knob Creek. The answer is yes.', 'display': 'NOVEMBER 01', 'date': '2018-11-01', 'title': 'Celebrating Knob Creek\'s 25th Anniversary', 'a': '#twitter', 'link': 'Watch Video', 'key': 2 },
    { 'image': '../images/splash/bourbon-cherry.jpg', 'alt': 'Sublime glass of Knob Creek bourbon. Topped off with a cherry.', 'display': 'OCTOBER 3O', 'date': '2018-10-30', 'title': 'The Single Barrel Experience', 'a': '#twitter', 'link': 'Read More', 'key': 3 },
    { 'image': '../images/splash/bourbon-mint-ice.jpg', 'alt': 'Incomplete without ice and a sprig of mint.', 'display': 'OCTOBER 30', 'date': '2018-10-30', 'title': 'Make No Small Plans. Drink No Small Bourbon.', 'a': '#twitter', 'link': 'Watch Video', 'key': 4 },
    { 'image': '../images/splash/bourbon-river2.jpg', 'alt': 'Bourbon by the river.', 'display': 'OCTOBER 10', 'date': '2018-10-10', 'title': 'About Our Maser Distiller Booker Nue', 'a': '#twitter', 'link': 'Read More', 'key': 5 },
    { 'image': '../images/splash/bourbon-whse-k.jpg', 'alt': 'Whiskey Puns', 'display': 'OCTOBER 25', 'date': '2018-10-25', 'title': 'Learn About Pre-Prohibition Style Whiskey', 'a': '#twitter', 'link': 'View Gallery', 'key': 6 },
]

data.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
});

export default data;