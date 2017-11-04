function setup(){
    var button = select('#submit');
    button.mousePressed(submitValue);
}

function submitValue () {
    var num = select('#num').value();
    FizzBuzz(num, fizz, buzz);
}

function FizzBuzz(num){
    var Fizz = select('#fizz').value();
    var Buzz = select('#buzz').value();
    for (var i = 1; i <= num; i++){
        //remainder if 3 and 5
        if (i % Fizz == 0 && i % Buzz == 0){
            console.log('FizzBuzz');
            // document.write('FizzBuzz');
            // document.write('<br/>');
        //remainder of 3
        } else if (i % Fizz == 0){
            console.log('Fizz');
            // document.write('Fizz');
            // document.write('<br/>');
        //remainder of 5
        } else if (i % Buzz == 0){
            console.log('Buzz');
            // document.write('Buzz');
            // document.write('<br/>');
        } else {
        //print number
            console.log(i);
            // document.write(i);
            // document.write('<br/>');
        }
    }
}