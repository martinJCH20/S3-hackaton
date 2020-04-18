function showValue(value){
    console.log(value);
}

function doMath(valores, callFunction){
    var newNumber = [];
    if(typeof callFunction === 'function'){
        valores.map((element) => {
            if(element.length > 5){
                newNumber.push(element);
            }
        });
        callFunction(newNumber);
    }else{
        console.log(`Debe ingresar la función`);
    }
}

let nombres = ['José','Roberto','Martín','Raúl']
doMath(nombres, showValue);