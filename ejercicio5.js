let comidas = [
    'Ceviche','Chaufa','Arroz tapado','Papa rellena','Alberjitas'
]

const mapComidas = function (array, callback){
    let newElemnt = "";
    return newElemnt = callback(array.sort());
}

const comidasOrder = mapComidas(comidas, function(task){
    return task;
})

console.log(comidasOrder);