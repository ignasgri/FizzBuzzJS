function setup(){
    // var Fizz = document.getElementById('#fizz');
    // var Buzz = document.getElementById('#buzz');
    // var num = document.getElementById('#num');
    var button = select('#submit');
    button.mousePressed(submitValue);
}

function submitValue () {
    // var Fizz = select('#fizz').value();
    // var Buzz = select('#buzz').value();
    var num = select('#num').value();
    FizzBuzz(num);
}
var num = document.getElementById('#num');
function FizzBuzz(number){
for (var i = 1; i <= number; i++){
    //remainder if 3 and 5
    if (i % 3 == 0 && i % 5 == 0){
        console.log('FizzBuzz');
    //remainder of 3
    } else if (i % 3 == 0){
        console.log('Fizz');
    //remainder of 5
    } else if (i % 5 == 0){
        console.log('Buzz');
    } else {
    //print number
        console.log(i);
    }
}
}
FizzBuzz(num);