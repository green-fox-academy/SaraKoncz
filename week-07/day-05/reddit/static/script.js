const submitButton = document.querySelector('#post-submit-button');
submitButton.addEventListener('click', (e) => {
  e.preventDefault();

  const formData = document.querySelector('form');
  const xmlhttp = new XMLHttpRequest();

  xmlhttp.open('POST', '/posts');
  xmlhttp.setRequestHeader('Content-Type', 'application/json');

  xmlhttp.send(JSON.stringify({
    title: formData.elements.title.value,
    url: formData.elements.url.value,
  }));
});

// const likeButtons = document.querySelectorAll('.likebuttons');
// console.log(likeButtons);
// likeButtons.forEach((element, index) => {
//   element.addEventListener('click', (e, i) => {
//     const xmlhttp = new XMLHttpRequest();
//     console.log(index);
//     let voteme = '/posts/' + (index + 1) + '/upvote/';
//     xmlhttp.open('PUT', voteme);
//     xmlhttp.send();
//   });
// });

const dislike = document.body;
dislike.addEventListener('click', e => {
  if (e.target.hasAttribute("data-action")) {
    let id = e.target.getAttribute("data-id");
    let upOrDown = e.target.getAttribute("data-action");
    let voteme = '/posts/' + id + '/' +upOrDown + '/';
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open('PUT', voteme);
    xmlhttp.send();
  }
})

