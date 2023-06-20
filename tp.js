
function calcular(valor){
    switch(valor){
        case 'C': 
            document.getElementById('resultado').value = "";
            break;
        case '=': 
            let x = document.getElementById('resultado').value;
            let y = eval(x);
            document.getElementById('resultado').value = y;
            break;
        default:
            document.getElementById('resultado').value += valor;
            break;
    }
}