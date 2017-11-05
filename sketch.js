function setup(){
    var button = select('#submit');
    button.mousePressed(submitValue);
}

function submitValue () {
    var num = select('#num').value();
    document.getElementById("num_html").innerHTML = num;
    FizzBuzz(num, fizz, buzz);
}

function FizzBuzz(num){
    var Fizz = select('#fizz').value();
    var Buzz = select('#buzz').value();
    var elem = document.getElementById('output');
    //export to body element
    document.getElementById("fizz_html").innerHTML = Fizz;
    document.getElementById("fizz_var").innerHTML = Fizz;
    document.getElementById("buzz_html").innerHTML = Buzz;
    document.getElementById("buzz_var").innerHTML = Buzz;
    for (var i = 1; i <= num; i++){
        //remainder if 3 and 5
        if (i % Fizz == 0 && i % Buzz == 0){
            console.log('FizzBuzz');
            elem.insertAdjacentHTML('beforeend','FizzBuzz' + '</br>');
        //remainder of 3
        } else if (i % Fizz == 0){
            console.log('Fizz');
            elem.insertAdjacentHTML('beforeend','Fizz' + '</br>') ;
        //remainder of 5
        } else if (i % Buzz == 0){
            console.log('Buzz');
            elem.insertAdjacentHTML('beforeend','Buzz' + '</br>');
        } else {
        //print number
            console.log(i);
            elem.insertAdjacentHTML('beforeend',i + '</br>');

        }
    }
}
