let modal = document.getElementsByClassName('bg-modal');
let close = document.getElementsByClassName('blose');

document.getElementById("button").addEventListener("click", display1);

function display1(){
  modal[0].style.display = 'flex';
}

close[0].addEventListener('click', function(){
  modal[0].style.display = 'none';
});
