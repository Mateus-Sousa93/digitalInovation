const alunos =[
    {
        nome:'Joao',
        nota:5,
        turma:'1b'
    },
    {
        nome:'jimmy',
        nota:5,
        turma:'1b'
    },
    {
        nome:'carlito',
        nota:5,
        turma:'1b'
    },
    {
        nome:'Joao',
        nota:2,
        turma:'1b'
    }

]

function alunosAprovados(arr, media){
    let aprovados =[];

    for(let i=0; i<arr.length; i++){

        const {nota,nome} =arr[i];

        if(nota>=media){
            aprovados.push(nome);
        }
    }
    return aprovados;
}
console.log(alunosAprovados(alunos,5));