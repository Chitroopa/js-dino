var Dinosaur = require('./../js/dino.js').dinosaurModule;


var displayDino = function(dino) {
  $('#output').text("The dino name is "+ dino);
};

$('document').ready(function(){
  $('#button').click(function(event){
    var newDino = new Dinosaur();
    $("#output").text(newDino.getDino(displayDino));
  });
});
