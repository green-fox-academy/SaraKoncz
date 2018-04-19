let deleteBs = document.querySelectorAll('.deleteB');

function deleteQuestion(butID, event) {
  const xml = new XMLHttpRequest();
  xml.open('DELETE', `/questions/${butID}`);
  xml.onload = () => {
    if (xml.status === 200) {
      event.target.parentNode.parentNode.removeChild(event.target.parentNode);
    }
  }
  xml.send();
};

deleteBs.forEach(button => {
  let butID = button.id;
  button.addEventListener('click', event => {
    deleteQuestion(butID, event);
  });
});

let form = document.querySelector('form');

function submitQuestion(form) {
  const xml = new XMLHttpRequest();
  xml.open('POST', '/question');
  xml.setRequestHeader('Content-Type', 'application/json');
  xml.onload = () => {
    if (xml.status === 200) {
      const response = JSON.parse(xml.response);

      form.elements.question.value = '';
      form.elements.answer_1.value = '';
      form.elements.answer_2.value = '';
      form.elements.answer_3.value = '';
      form.elements.answer_4.value = '';
      form.elements.radio[0].checked = false;
      form.elements.radio[1].checked = false;
      form.elements.radio[2].checked = false;
      form.elements.radio[3].checked = false;
    }
  };

  xml.send(JSON.stringify({
    question: form.elements.question.value,
    answer_1: form.elements.answer_1.value,
    is_correct1: form.elements.radio[0].checked ? 1 : 0,
    answer_2: form.elements.answer_2.value,
    is_correct2: form.elements.radio[1].checked ? 1 : 0,
    answer_3: form.elements.answer_3.value,
    is_correct3: form.elements.radio[2].checked ? 1 : 0,
    answer_4: form.elements.answer_4.value,
    is_correct4: form.elements.radio[3].checked ? 1 : 0
  }));
}

let submitButton = document.querySelector('#submitQ');
submitButton.addEventListener('click', event => {
  submitQuestion(form);
});
