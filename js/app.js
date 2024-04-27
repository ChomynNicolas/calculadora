let display = document.getElementById("display");
var val1="",val2,oper;

function press(valor){
  val1 += valor;
  
  display.textContent = val1;
  
    

}

function setOP(operacion){
    oper = operacion;
    
    val2=val1;
    display.textContent = val2;
    val1='';
}


function clr(){
    val1=0;
    val2=0;
    display.textContent = "0";

}

function calculate(){
  let result;
  switch(oper){
    case '/':{result=Number(val2)/Number(val1);
            break;}
    case '*':{result=Number(val2)*Number(val1);
            break;}
    case '-':{result=Number(val2)-Number(val1);
            break;}
    case '+':{result=Number(val2)+Number(val1);
            break;}
    }

    display.textContent=result;
}