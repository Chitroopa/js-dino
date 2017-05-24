function Dinosaur() {

}

Dinosaur.prototype.getDino = function(){
  var output;
  var randomOne = Math.floor(Math.random()*10);
  var randomTwo = Math.floor(Math.random()*30);
  // $.get('http://dinoipsum.herokuapp.com/api/?format=json').then (function(response) {
  //   output = response[randomOne][randomTwo];
  //   console.log(response);
  //   console.log(output);
  //   return output;
  // });
  $.get('http://dinoipsum.herokuapp.com/api/?format=json', function(response){
    output = response[randomOne][randomTwo];
    console.log(response);
    console.log(output);
    return output;
  })
};
exports.dinosaurModule = Dinosaur;
