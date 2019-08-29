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
function ex2() {
    let vet = []
    for (i = 0; i < 3; i++) {
        let obj = {}
        let = 0
        //colocar dados no objeto
        obj.salario = Number(prompt("Informe salário: "))
        obj.idade = Number(prompt("Informe idade: "))
        obj.filhos = Number(prompt("Informe a quantidade de filhos: "))
        obj.sexo = prompt("Informe o sexo: ")
        //coloca no vetor
        vet.push(obj)
    }
    let mediaSal = 0
    let mediaFIlhos = 0
    let maiorSal = vet[0].salario
    let qtde = 0
    for (i = 0; i < 3; i++) {
        mediaSal = vet[i].salario + mediaSal
        mediaFIlhos = vet[i].filhos + mediaFIlhos
        if (vet[i].salario > maiorSal) {
            maiorSal = vet[i].salario
        }
        if ((vet[i].sexo == "F") && (vet[i].salario > 1000)) {
            qtde++
        }
    }
    alert("A média de salário é de: " + mediaSal / vet.length + "\n A média de filhos é de: " + mediaFIlhos / vet.length + "\nO maior salário é de: " + maiorSal + "\n E a porcentagem de mulheres com salário superior a R$1000.00 é de : " + qtde / 3 * 100 + "%")
}

function ex3() {
    let vet = []
    let i = 0
    for (i = 0; i < 4; i++) {
        let obj = {}
        //colocar dados no objeto
        obj.sexo = prompt("Informe o sexo: ")
        obj.altura = Number(prompt("Informe a altura: "))
        obj.idade = Number(prompt("Informe a idade: "))
        obj.corOlho = prompt("Informe a cor do olho: ")
        //colocar no vetor
        vet.push(obj)
    }
    let somaIdade = 0
    let contIdade = 0
    let mediaIdade = 0
    let maiorIdade = vet[0].idade
    let fidadecorOlho = 0
    let somaHomem = 0
    let percHomem = 0
    for (i = 0; i < 4; i++) {
        if ((vet[i].corOlho == "c") && (vet[i].altura > 1.60)) {
            somaIdade = vet[i].idade + somaIdade
            contIdade++
            mediaIdade = somaIdade / contIdade
        }
        if (vet[i].idade > maiorIdade) {
            maiorIdade = vet[i].idade
        }
        if ((vet[i].sexo == "f") && (((vet[i].idade > 20) && (vet[i].idade <= 45)) || ((vet[i].corOlho == "v") && (vet[i].altura < 1.7)))) {
            fidadecorOlho++
        }
        if (vet[i].sexo == "f") {
            somaHomem++
        }
        percHomem = somaHomem / 4 * 100
    }
    alert("A média de idade das pessoas com olhos castanhos e idade superior a 1.60 m é de: " + mediaIdade + "\nA maior idade é de: " + maiorIdade + "\nA quantidade de individuos do sexo feminino com idade entre 20 e 45 ou que tenham olhos verdes e altura superior a 1.70 m é de: " + fidadecorOlho + "\nO percentual de homens é de: " + percHomem + "%")
}

function ex4() {
    vet = []
    for (i = 0; i < 4; i++) {
        let obj = {}
        //entra dados no objeto
        obj.idade = Number(prompt("Informe a idade: "))
        obj.sexo = prompt("Informe o sexo:")
        obj.rendaFamiliar = Number(prompt("Informe a renda familiar: "))
        obj.nFilhos = Number(prompt("Informe a quantidade de filhos: "))
        //colocar no vetor
        vet.push(obj)
    }
    let somaRenda = 0
    let mediaRenda = 0
    let menorIdade = vet[0].idade
    let maiorIdade = vet[0].idade
    let qntdmulhersalariomenor600 = 0
    for (i = 0; i < 4; i++) {
        somaRenda = somaRenda + vet[i].rendaFamiliar
        if (vet[i].idade < menorIdade) {
            menorIdade = vet[i].idade
        }
        if (vet[i].idade > maiorIdade) {
            maiorIdade = vet[i].idade
        }
        if ((vet[i].rendaFamiliar < 600) && (vet[i].sexo == "f")) {
            qntdmulhersalariomenor600++
        }
    }
    mediaRenda = somaRenda / 4
    alert("A média de renda é de: " + mediaRenda + "\nA menor idade é de: " + menorIdade + "\nA maior idade é de: " + maiorIdade + "\nA quantidade de mulheres com dois filhos e salário inferior a de R$600.00 é de: " + qntdmulhersalariomenor600)
}
function ex5() {
    var vet = []
    for (var i = 0; i < 5; i++) {
        var objeto = {}
        // Coloca dados no objeto
        objeto.codigo = Number(prompt("Codigo"))
        objeto.descricao = (prompt("Descrição"))
        objeto.qtde = Number(prompt("Qtde"))
        objeto.preco = Number(prompt("Preço"))
        // Coloca obejto no vetor ordenado
        for (var j = 0; j < vet.length; j++) {
            if (objeto.codigo < vet[j].codigo) {
                vet.splice(j, 0, objeto);
                alert("Adicionado com sucesso")
                break; // Sai do laço
            }
        }
        if (j == vet.length) {
            vet.push(objeto);
            alert("Adicionado com sucesso")
        }
    }
    for (var i = 0; i < vet.length; i++) {
        alert(vet[i].codigo + " " + vet[i].descricao)
    }

}