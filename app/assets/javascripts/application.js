//= require rails-ujs
//= require_tree .

const overview = document.getElementById('menu-icon');
const menu = document.getElementById('menu');

overview.addEventListener("click", (event) => {
  menu.classList.toggle("hide");
});

const switcher = document.getElementById('switch');
const image = document.getElementById('pic-right');

switcher.addEventListener("click", (event) => {
  switcher.classList.toggle("on");
  if(switcher.classList == "on") {
    image.innerHTML = '<img alt="An" src="/assets/AN.png">';
    switcher.innerText = 'AUS';
  } else {
    image.innerHTML = '<img alt="Aus" src="/assets/AUS-d4581088de7010b6e1d6176ebf7596935253bc8ad3803c1ae7cc5b19333f4616.png">';
    switcher.innerText = 'AN';
  };
});
