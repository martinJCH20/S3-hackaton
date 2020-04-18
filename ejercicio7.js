function addOne(number){
   return number + 1;
}

function doMath(valores, callFunction){
    var newNumber = [];
    if(typeof callFunction === 'function'){
        valores.map((element) => {
            if(typeof element === 'number'){
                newNumber.push(callFunction(element));
            }else{
                newNumber.push(`El valor ${element} no es un número`);
            }
        });
        console.log(newNumber);
    }else{
        console.log(`Debe ingresar la función`);
    }
}

let numbers = [2,'1',7,32]
doMath(numbers, addOne);
