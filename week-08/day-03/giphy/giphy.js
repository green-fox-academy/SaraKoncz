let giphy = document.getElementById('giphy');
var button = document.getElementById('btn');

btn.addEventListener('click', function (){
    let http = new XMLHttpRequest();
    http.open('GET', `https://api.giphy.com/v1/gifs/trending?api_key=hDDt4rniL2KlZNkA8DoBmt03QPbE5BJ1&limit=25&rating=G`);
    http.onload = function() {
        var url = JSON.parse(http.response).data[Math.ceil(Math.random()*25)].images.original.url;
        renderHTML(url);                
    };
        http.send();
});

function renderHTML(url){
            giphy.src = url;
};

