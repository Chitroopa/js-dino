function Dinosaur() {

}

Dinosaur.prototype.getDino = function(display) {
  var randomOne = Math.floor(Math.random()*10);
  var randomTwo = Math.floor(Math.random()*30);
  $.get('http://dinoipsum.herokuapp.com/api/?format=json').then (function(response) {
    display(response[randomOne][randomTwo]);
  });
};

exports.dinosaurModule = Dinosaur;
