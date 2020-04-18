let paises = [
    {
        name: 'Perú',
        habitantes: 35000000
    },
    {
        name: 'Australia',
        habitantes: 10000000
    }
    ,
    {
        name: 'Dinamarca',
        habitantes: 4000000
    }
]

const mapPaices = function (array, callback){
    let newArray = [];
        array.forEach(function(element, index, array){
        newArray.push(callback(element));
    })
    return newArray;
};

const paisesNombres = mapPaices(paises, function(task){
    return task.name;
})
console.log(paisesNombres);
