const btns = document.querySelector(".box");

function func(e) {
  let id = `#s${e.target.id.slice(3)}`;
  let sound = document.querySelector(id);
  sound.play();
}

btns.addEventListener("click", func);
