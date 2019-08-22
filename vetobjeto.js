function funcao() {
    var vet = []
    for (var i = 0; i < 5; i++) {
        var obj = {}

        //coloca os dados no objeto 
        obj.codigo = Number(prompt("Código"))
        obj.nome = (prompt("Nome"))
        obj.qtde = Number(prompt("Qtde"))
        obj.preco = Number(prompt("Preço"))
        //coloca no vetor 
        vet.push(obj)
    }
}