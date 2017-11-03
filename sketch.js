for (var i = 1; i <= 100; i++){
    //remainder if 3 and 5
    if (i % 3 == 0 && i % 5 == 0)
        console.log('FizzBuzz');
    //remainder of 3
    else if (i % 3 == 0)
        console.log('Fizz');
    //remainder of 5
    else if (i % 5 == 0)
        console.log('Buzz');
    else
    //print number
        console.log(i);
}
