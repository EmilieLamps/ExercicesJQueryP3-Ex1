$(function(){
  // Déclarer la variable "compteur de clic" à 0
  var clicCounter = 0;
  // récupérer le clic du bouton
  $('#button').click(function(){
    // Incrémenter la variable ?
    clicCounter++
    // Afficher ma valeur dans le champs #score
    $('#score').val(clicCounter);
  });
});
