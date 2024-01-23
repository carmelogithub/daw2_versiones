function iniciar(){
    console.log("iniciando");
    document.getElementById('titulo').innerText="cambio";
    $('#titulo').text="otro cambio";
}  

function saludar(){
    let nombre="juan";
    window.alert("hola, qué tal "+nombre);
}

function saludar2(nombre){
    window.alert("hola, qué tal "+nombre);

}
function calcular(){
    let precio=12;
    let unidades=window.prompt("dime cuántas unidades");
    let total=precio*unidades;
    window.alert("el total es "+total);
    window.confirm("Aceptas la compra");
}