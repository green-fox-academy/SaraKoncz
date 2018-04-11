let http = new XMLHttpRequest();
http.open('GET', `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=84c20306861c4f878c9d2bfe57361686&fq=apollo&fq=moon`);
http.onload = function () {
    var url = JSON.parse(http.response);
    console.log(url);
    renderHTML(url);
};
http.send();

function renderHTML(url, stillurl) {

    for (let i = 0; i < url.response.docs.length; i++) {
        const newP = document.createElement('p');
        const newA = document.createElement('a');

        newP.textContent = url.response.docs[i].snippet;
        newA.href = url.response.docs[i].web_url;
        newA.textContent = url.response.docs[i].headline.main;

        document.body.appendChild(newA);
        document.body.appendChild(newP);
    }
};
