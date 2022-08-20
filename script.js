
let first_number;
let second_number;
let operator ;
let result; 


function reset_vars(){
    first_number = null;
    second_number = null;
    operator = null;
    
}

function handle_buttons(Button_value){
    if(operator == null){

        if(first_number == null){
            first_number = Button_value;
        }else{
            first_number = first_number + Button_value;
        }
        document.getElementById('fn').innerText=first_number

        
        
    }
    else{

        if(second_number == null){
            second_number = Button_value;
            document.getElementById('fn').innerText=first_number
        }else{
            second_number = second_number + Button_value;
        }
        document.getElementById('sn').innerText=second_number

        
    
        
    }
 
}

function handle_operators(sign){

    operator = sign;
    document.getElementById('operator').innerText=operator;

}

function show_result(){
    switch (operator) {
        case '+':
            result= parseInt(first_number) + parseInt(second_number);
            console.log(first_number , second_number , result);
            break;
        case '-':
            result = parseInt(first_number) - parseInt(second_number);
            break;
        case '/':
            result = parseInt(first_number) / parseInt(second_number);
            break;
        case '*':
            result = parseInt(first_number) * parseInt(second_number);
            break;
        case '%':
            result = parseInt(first_number) % parseInt(second_number) ;
            break;
    }
    document.getElementById('result').innerText=result
    reset_vars()
    
}

