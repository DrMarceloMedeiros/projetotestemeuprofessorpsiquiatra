function mudarTela(id) {

  document.querySelectorAll('.screen')
    .forEach(s => s.classList.remove('active-screen'));

  document.getElementById(id)
    .classList.add('active-screen');

  document.querySelectorAll('.menu-item')
    .forEach(b => b.classList.remove('active'));

  event.target.classList.add('active');

}
