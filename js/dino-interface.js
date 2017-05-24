var Dinosaur = require('./../js/dino.js').dinosaurModule;

$('document').ready(function(){
  $('#button').click(function(event){
    var newDino = new Dinosaur();
    console.log("hi");
    console.log(newDino.getDino());
      $("#output").text(newDino.getDino());
  });
});
