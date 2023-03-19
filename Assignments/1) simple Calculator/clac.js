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
            break;
        case '-':
            operator = sub;
            displayer.value =  displayer.value + "-";
            firstdisplay =  displayer.value;
            break;
        case 'x':
            operator = mul;
            displayer.value =  displayer.value + "x";
            firstdisplay =  displayer.value;
            break;
        case '/':
            operator = div;
            displayer.value =  displayer.value + "/";
            firstdisplay =  displayer.value;
            break;
        case '%':
            operator = mod;
            displayer.value =  displayer.value + "%";
            firstdisplay =  displayer.value;
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





