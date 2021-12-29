function calculaIdade(anos){
    return `daqui a ${anos} anos, ${this.nome} terá ${
        this.idade + anos
    }anos de idade.`;
}

const pessoa1={
    nome:'Maria',
    idade:30,
}
const animal={
    nome:'Mel',
    idade:5,
    raca:'pug',  //não está sendo chamada, logo será ignorada
}
const pessoa2={
    nome:'Carla',
    idade:23,
}

console.log(calculaIdade.apply(pessoa1,[7]));


// console.log(calculaIdade.call(pessoa1,7)); diferença para apply é que não tem a necessidade de[].