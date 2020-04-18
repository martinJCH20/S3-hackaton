let departaments = [
    'Piura','Loreto','Arequipa','Lima'
]

const mapDep = departaments.map((dep, index) => {
    return `${index+1}) ${dep}`;
})
console.log(mapDep);