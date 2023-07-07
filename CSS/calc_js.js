// Acionando os buttons com o teclado utilizando o evento keydown


// Todas as funções capturadas pelo Event Listener e seu respectivo id
const CalcFunctions = {
    "Enter": "btIgual",
    "Delete": "btC",
    "Backspace": "btDelete",
    ",":"btPonto",
    "+":"btAdicao",
    "-":"btSubtrai",
    "*":"btMultiplica",
    "/":"btDivisao",
    "9":"bt9",
    "8":"bt8",
    "7":"bt7",
    "6":"bt6",
    "5":"bt5",
    "4":"bt4",
    "3":"bt3",
    "2":"bt2",
    "1":"bt1",
    "0":"bt0",
}

document.addEventListener('keydown', function (e) {
    // verifica se o botão que foi pressionado tem uma função cadastrada no obj CalcFunctions
    if(e.key in CalcFunctions){
        // pega a função correspondente de forma dinamica
        document.getElementById(CalcFunctions[e.key]).click();
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