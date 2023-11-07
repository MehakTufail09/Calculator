const input1=document.getElementById("input-1");
const input2=document.getElementById("input-2");
const btn=document.getElementById("btn");
const options=document.getElementById("options");
const results=document.getElementById("result");
btn.addEventListener("click", ()=>{
    const operator=options.value;
    const value1=parseFloat(input1.value);
    const value2=parseFloat(input2.value);
    
    if(isNaN(value1)||isNaN(value2)){
     results.textContent="Enter valid number "
    }
 else{
     let output;
     switch(operator){
         case "+":
             output=value1+value2;
             console.log(output);
             break;
         case "-":
             output=value1-value2;
             console.log(output);
             break;
         case "*":
             output=value1 * value2;
             console.log(output);
             break;
         case "/":
             if(value2===0)
        { output.textContent="Division with zero is not valid";
        return;}
             output=value1/value2;
             console.log(output);
             break;
         default:
             output.textContent="invalid operator";
             return;     
             }
      results.textContent=`Result: ${output}`;}
});


