const form = document.getElementById('form-at');
const imgCon = '<img src="./images/pngwing.com.png" alt= "emoji celebrando" />'
const nomes = []
const numeros = []

let linhas = ''

form.addEventListener('submit', function(e) {
    e.preventDefault()
    
    adicionaLinha()
    atualizaTab()
    
})

function adicionaLinha() {
    const inputNomeAt = document.getElementById ('nome-ct')
    const inputNumeroAt = document.getElementById ('numero-ct')


    if (nomes.includes(inputNomeAt.value)) {
        alert(`O nome: ${inputNomeAt.value} já foi inserido`)
    } else  if (numeros.includes(inputNumeroAt.value)) {
        alert(`O numero: ${inputNumeroAt.value} já foi inserido`)
    } else {

        
        nomes.push(inputNomeAt.value)
        numeros.push(inputNumeroAt.value)

        let linha = '<tr>'
        linha += `<td>${inputNomeAt.value}</td>`
        linha += `<td>${inputNumeroAt.value}</td>`
        linha += `<td>${imgCon}</td>`
        linha += '</tr>'
    
        linhas += linha 
    }

    inputNomeAt.value = ''
    inputNumeroAt.value = ''
}

function atualizaTab() {
    const corpoTable = document.querySelector('tbody')
    corpoTable.innerHTML = linhas
}
