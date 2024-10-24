document.querySelector('#btnCalcular').addEventListener('click', determinarMontoFinal);

function determinarMontoFinal() {
    let stipoflor = '';
    let nCostoDia = 0;
    let nCodigo = 0; 
    let nMontoFinal = 0; 
    let nCantDias = 0; 
    let nSubtotal = 0; 
    let nCliente = '';

    nCodigo = Number(document.querySelector('#txtCodigo').value);
    stipoflor = document.querySelector('#slttipogamer').value;
    nCantDias = Number(document.querySelector('#txtCantDias').value);
    nCliente = document.querySelector('#txtNombre').value;

    
    switch (stipoflor) {
        case 'GIRASOL':
            nCostoDia = 100000;
            break;
        case 'GERBERA':
            nCostoDia = 300000;
            break;  
        case 'LIRIO':
            nCostoDia = 600000;
            break;    
        case 'MINI ROSA':
            nCostoDia = 450000;
            break;  
        case 'HORTENSIA':
            nCostoDia = 500000;
            break;
        default:
            nCostoDia = 0;
            break;  
    }

    // los calculos para que de el resultado en la factura
    nSubtotal = nCostoDia * nCantDias;
    const nIVA = nSubtotal * 0.13;
    const nServicio = nSubtotal * 0.05;
    nMontoFinal = nSubtotal + nIVA + nServicio; 

    
    document.querySelector('#resultNombre').textContent = nCliente;
    document.querySelector('#resultArticulo').textContent = stipoflor;
    document.querySelector('#resultCantidad').textContent = nCantDias;
    document.querySelector('#resultPrecio').textContent = nCostoDia.toLocaleString();
    document.querySelector('#resultSubtotal').textContent = nSubtotal.toLocaleString();
    document.querySelector('#resultIVA').textContent = nIVA.toLocaleString();
    document.querySelector('#resultServicio').textContent = nServicio.toLocaleString();
    document.querySelector('#resultTotal').textContent = nMontoFinal.toLocaleString();
}

function btnlimpiar() {
    document.getElementById('txtCodigo').value = "";
    document.getElementById('txtCantDias').value = "";
    document.getElementById('slttipogamer').value = "";
    document.getElementById('txtNombre').value = ""; 
    document.getElementById('resultNombre').textContent = "";
    document.getElementById('resultArticulo').textContent = "";
    document.getElementById('resultCantidad').textContent = "";
    document.getElementById('resultPrecio').textContent = "";
    document.getElementById('resultSubtotal').textContent = "";
    document.getElementById('resultIVA').textContent = "";
    document.getElementById('resultServicio').textContent = "";
    document.getElementById('resultTotal').textContent = "";
}