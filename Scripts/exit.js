$(function() {
  $('#exitBtn').on('click', function(e) {
    e.preventDefault();
    var ok = confirm('¿Deseas salir al menú principal?');
    if(ok) {
      window.location.href = 'index.html';
    }
  });
});
