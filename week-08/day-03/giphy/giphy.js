const giphy = document.getElementById('giphy');
let button = document.getElementById('btn');
const giphylist = document.getElementsByClassName('giphylist');

btn.addEventListener('click', function () {
    let http = new XMLHttpRequest();
    http.open('GET', `https://api.giphy.com/v1/gifs/trending?api_key=hDDt4rniL2KlZNkA8DoBmt03QPbE5BJ1&limit=25&rating=G`);
    http.onload = function () {
        for (let i = 0; i < 16; i++) {
            let imageIndex = i;
            let stillurl = JSON.parse(http.response).data[i].images.downsized_still.url;
            let url = JSON.parse(http.response).data[i].images.original.url;
            renderHTML(url, stillurl);
        }
    };
    http.send();
});

function renderHTML(url, stillurl) {
    const newp = document.createElement('p');
    const newA = document.createElement('a');
    const newImg = document.createElement('img');
    newA.href = url;
    newImg.src = stillurl;
    newImg.className = 'gif';
    newA.appendChild(newImg);
    newp.appendChild(newA);
    document.body.appendChild(newp);
};

  
