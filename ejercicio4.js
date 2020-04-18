let cursos = [
    {
    name: 'BackEnd',
    dura: 2
    },
    {
       name: 'FrondEnd',
       dura: 34
    },
    {
       name: 'Apps',
       dura: 5
    }
]

const mapCursos = function(array, callback) {
    let newElemnt = "";
    array.reduce((all, actual) =>{
        return newElemnt = callback(all +' '+ actual.name);
    },"");
    return newElemnt;
};

const cursosReduce = mapCursos(cursos, function(task){
    return task;
})

console.log(cursosReduce);