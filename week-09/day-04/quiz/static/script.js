let buttons = document.querySelectorAll('button');

function changeclass() {
  buttons.forEach(button => {
    if (button.className === "1") {
      button.className = "green";
    } else {
      button.className = "red";
    }
  })
}

function reload() {
  window.location.reload(false);
}

function resultCheck(buttons) {
  buttons.forEach(button => {
    button.addEventListener('click', event => {
      changeclass();
      window.setTimeout(reload, 1000);
    })
  });
}

resultCheck(buttons);
