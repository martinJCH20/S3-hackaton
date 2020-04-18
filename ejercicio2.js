let animals = [
    'Conejo','Perro','Jirafa','Leon'
]

const mapAnimals = function (array, callback){
    let newArray = [];
    array.map(function(element, index){
        newArray.push(`${index+1}) ${element}`);
    })
    return newArray;
}

const animalsNombres = mapAnimals(animals, function(task){
    return task;
})

console.log(animalsNombres);