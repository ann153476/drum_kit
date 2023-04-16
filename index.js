const btns = document.querySelector(".box");

function func(e) {
  let id = `#s${e.target.id.slice(3)}`;
  //   id = e.target.id;
  let sound = document.querySelector(id);
  sound.play();
  console.log(sound);
}

btns.addEventListener("click", func);
