//3
let buffer = '0';
let runningtotal= 0;
let previousoperator = null;

//6
const screen = document.querySelector(".screen");

//5
function buttonclick(value)    //parseInt() is a function
{ if(isNaN(parseInt(value)))  //isNaN() is a function 
   {                          
    handlesymbol(value);
   }else
   {
    handlenumber(value);
   }
   rerender();

}


function handlenumber(number)
{
  if(buffer==='0')
   { 
     buffer =number;
}else {
     buffer = buffer + number;
     
}
}

//4
function handlesymbol(symbol)
{    switch(symbol) {
       case 'AC':
        buffer='0';
        break;
        case '=':
            if(previousoperator===null)
{
    return;
}
    flushoperation(parseInt(buffer));
    previousoperator = null;
    buffer ="" + runningtotal;
    runningtotal =0;
            break;
            case '🡠':
                if(buffer.length===1)
                    {
                        buffer=0;
                    }else{
                        buffer = buffer.substring(0,buffer.length-1);
                    }
                break;
                case '+':
                case '-':
                case 'x':
                case '÷':
                case '%':
                   handlemath(symbol);
                    break;

}
}

function handlemath(value)
{
    if (buffer==='0')
        {
            return;
        }

        const intbuffer = parseInt(buffer);
        if(runningtotal===0)
            {
                runningtotal= intbuffer;
            }
            else{
                flushoperation(intbuffer);
            } 
    previousoperator = value;
    buffer='0';
    
}

function flushoperation(intbuffer) 
{
    if(previousoperator==='+')
        {
        runningtotal += intbuffer 
    }else if (previousoperator==='%')
    {
runningtotal = runningtotal % intbuffer
    }else if (previousoperator==='x')
                {
        runningtotal = runningtotal * intbuffer
    }else if (previousoperator==='÷')
                    {
        runningtotal = runningtotal / intbuffer
    }else if (previousoperator==='-')
        {
    runningtotal = runningtotal - intbuffer
}
}

//6
function rerender ()
{
    screen.innerText = buffer;
}

   //1
  function init () {
    document.querySelector(".container")
    .addEventListener("click", function(event){
        buttonclick(event.target.innerText)
        
    });
}

//2
init ();

const button = true;


