//Initializing


var displayer = document.getElementById("operationer")
var firstvalue = 0;
var secondvalue = 0;
var operator;
var sub = '-';
var mul ='x';
var div = '/';
var add ='+';
var mod ='%';
var firstdisplay;
var answer;


//declaring functionalities

function decideoperation(value){
    switch(value){
        case '+':
            operator = add;
            displayer.value =  displayer.value + "+";
            firstdisplay =  displayer.value;

            // returning a value to make a test wether the selected is same
            selected = '+'
            return selected;
            break;

        case '-':
            operator = sub;
            displayer.value =  displayer.value + "-";
            firstdisplay =  displayer.value;

            // returning a value to make a test wether the selected is same
            selected = '-'
            return selected;
            break;

        case 'x':
            operator = mul;
            displayer.value =  displayer.value + "x";
            firstdisplay =  displayer.value;

         // returning a value to make a test wether the selected is same
            selected = 'x'
            return selected;
            break;


        case '/':
            operator = div;
            displayer.value =  displayer.value + "/";
            firstdisplay =  displayer.value;

            // returning a value to make a test wether the selected is same
            selected = '/'
            return selected;
            break;

        case '%':
            operator = mod;
            displayer.value =  displayer.value + "%";
            firstdisplay =  displayer.value;

   // returning a value to make a test wether the selected is same
            selected = '%'
            return selected;
            break;
    }
}

function clearscreen(){
    displayer.value = null;
    firstvalue = 0;
    secondvalue = 0;
    operator = null;
}

function equals(){

    switch(operator){

        case add:
           answer = parseInt(firstvalue)+parseInt(secondvalue);
           displayer.value = answer;
           break;
        case mul:
            answer = parseInt(firstvalue) * parseInt(secondvalue);
            displayer.value = answer;
            break;
        case sub:
           answer = parseInt(firstvalue)-parseInt(secondvalue);
           displayer.value = answer;
           break;
        case div:
            answer = parseInt(firstvalue) / parseInt(secondvalue);
            displayer.value = answer;
            break;  
        case mod:
            answer = parseInt(firstvalue) % parseInt(secondvalue);
            displayer.value = answer;
            break
        
        default:
         alert("Enter a valid operation")
        
        }
}

function operation(value){
  

switch(operator){

case add :
case sub :
case mul :
case div :
case mod :
    secondvalue = secondvalue + value;
    displayer.value = firstdisplay + parseInt(secondvalue,10) ;
    console.log(secondvalue)
    break;
    
default:
    firstvalue = firstvalue + value;
    displayer.value = parseInt(firstvalue,10) ;
    console.log(firstvalue)

}

}

function summing(a,b){
    return a+b;
}

module.exports = summing;





