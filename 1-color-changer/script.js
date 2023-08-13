const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener("click", (e) => {
    console.log(e.target.id);
      // if (e.target.id === 'grey') {
      //   body.style.backgroundColor = e.target.id
      // }
      switch (e.target.id) {
        case 'white': body.style.backgroundColor = e.target.id;
        break;
        case 'grey': body.style.backgroundColor = e.target.id;
        break;
        case 'blue': body.style.backgroundColor = e.target.id;
        break;
        case 'yellow': body.style.backgroundColor = e.target.id;
        break;
      }
  })
})