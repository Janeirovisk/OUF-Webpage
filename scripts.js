function calcularModificador(num) {
    var atributo = parseInt(document.getElementById('atributo' + num).value);
    var modificador = Math.floor((atributo - 10) / 2);
    document.getElementById('modificador' + num).textContent = '(' + (modificador >= 0 ? '+' : '') + modificador + ')';
}

function rolarD20(num) {
    var atributo = parseInt(document.getElementById('atributo' + num).value);
    var modificador = Math.floor((atributo - 10) / 2);
    var resultado = Math.floor(Math.random() * 20) + 1;
    var total = resultado + modificador;
    alert("Você rolou um d20 e obteve: " + resultado + " (com modificador " + (modificador >= 0 ? '+' : '') + modificador + ")");
}
function toggleMorte(num) {
    var botaoMorte = document.getElementById('botao-morte' + num);
    botaoMorte.classList.toggle('ativado');
}
function atualizarBarra(valorInputId, maxInputId, barraId) {
    var valorInput = parseFloat(document.getElementById(valorInputId).value);
    var maxInput = parseFloat(document.getElementById(maxInputId).value);
    var barra = document.getElementById(barraId);
    var porcentagem = (valorInput / maxInput) * 100;

    barra.style.width = porcentagem + '%';
}
