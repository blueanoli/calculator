function appendOperation(operation) {
    document.getElementById('resultDiv').innerHTML += operation;
}
function calc() {
    let container = document.getElementById('resultDiv');
    let result = eval(container.innerHTML);

    container.innerHTML = result;
}
function del() {
    let container = document.getElementById('resultDiv');
    container.innerHTML = '';
}
function delLast() {
    let container = document.getElementById('resultDiv');
    if (container.innerHTML.endsWith(' ')) {
        container.innerHTML = container.innerHTML.slice(0, -3);
        return;
    }
    container.innerHTML = container.innerHTML.slice(0, -1);
}
function root(){
    let container = document.getElementById('resultDiv');
    let sqRoot = Math.sqrt(container.innerHTML);
    let convert = sqRoot % 1 === 0 ? sqRoot : sqRoot.toFixed(2);
    container.innerHTML = convert;
}
function squared(){
    let container = document.getElementById('resultDiv');
    let sq = Math.pow(container.innerHTML, 2);
    let squared = sq % 1 === 0 ? sq : sq.toFixed(2);
    container.innerHTML = squared;
}