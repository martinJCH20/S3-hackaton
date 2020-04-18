let departaments = [
    'Piura','Loreto','Arequipa','Lima'
]

const mapDep = function (array, callback){
    let newArray = [];
    array.filter(function(element){
        if(element.length <= 6){
            newArray.push(callback(element));
        }
    })
    return newArray;
}

const departamentNombres = mapDep(departaments, function(task){
    return task;
})

console.log(departamentNombres);