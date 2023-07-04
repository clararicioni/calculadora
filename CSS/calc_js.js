// Acionando os buttons com o teclado utilizando o evento keydown
document.addEventListener('keydown', function (e) {
    if (e.key == "Enter") {
        document.getElementById("btIgual").click();
    } if (e.key == "Delete") {
        document.getElementById("btC").click();
    } if (e.key == "Backspace") {
        document.getElementById("btDelete").click();
    } if (e.key == ",") {
        document.getElementById("btPonto").click();
    } if (e.key == "+") {
        document.getElementById("btAdicao").click();
    } if (e.key == "-") {
        document.getElementById("btSubtrai").click();
    } if (e.key == "*") {
        document.getElementById("btMultiplica").click();
    } if (e.key == "/") {
        document.getElementById("btDivisao").click();
    } if (e.key == "9") {
        document.getElementById("bt9").click();
    } if (e.key == "8") {
        document.getElementById("bt8").click();
    } if (e.key == "7") {
        document.getElementById("bt7").click();
    } if (e.key == "6") {
        document.getElementById("bt6").click();
    } if (e.key == "5") {
        document.getElementById("bt5").click();
    } if (e.key == "4") {
        document.getElementById("bt4").click();
    } if (e.key == "3") {
        document.getElementById("bt3").click();
    } if (e.key == "2") {
        document.getElementById("bt2").click();
    } if (e.key == "1") {
        document.getElementById("bt1").click();
    } if (e.key == "0") {
        document.getElementById("bt0").click();
    }
});

function insert(num) { //mostra o caractere selecionado pelo usuário no textview
    document.form.textview.value = document.form.textview.value + num;
}
function equal() { //mostra o valor da operação 
    exp = document.form.textview.value; if (exp) {
        document.form.textview.value = eval(exp);
    }
}
function c() { //limpa toda a operação
    document.form.textview.value = "";
}
function back() { //limpa um caractere por vez
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length - 1);
}