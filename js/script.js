


for(var i = 1; i <= 200; i++) {
    if ((i % 5 == 0) && (i % 3 == 0)){
     document.getElementById('lista').innerHTML += "FizzBuzz-";
    }
    else if (i % 5 == 0){
     document.getElementById('lista').innerHTML += "Buzz-";
    }
    else if (i % 3 == 0){
     document.getElementById('lista').innerHTML += "Fizz-";
    }
    else{
     document.getElementById('lista').innerHTML += i + '-';
    }
 
}
