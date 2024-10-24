
function convertirADolares() {
    const dolares = parseFloat(document.getElementById('dolares').value);
    const tipoCambio = parseFloat(document.getElementById('tipoCambioDolares').value);
    
    if (isNaN(dolares) || isNaN(tipoCambio) || dolares === 0 || tipoCambio === 0) {
        Swal.fire({
            title: "No puede ejecutar la conversión sin no ingresa los datos.",
            confirmButtonText: "Intentar de nuevo",
            confirmButtonColor: "#00838F",
            html: '<iframe width="320" height="240" src="https://embed.lottiefiles.com/animation/98274"></iframe>',
        });
        return; 
    } 

    const resultado = dolares * tipoCambio;
    document.getElementById('resultadoDolares').innerText = 
        `El resultado es: ${resultado.toFixed(2)} colones`;
}


function convertirAColones() {
    const colones = parseFloat(document.getElementById('colones').value);
    const tipoCambio = parseFloat(document.getElementById('tipoCambioColones').value);



    if (isNaN(colones) || isNaN(tipoCambio) || dolares === 0 || tipoCambio === 0) {
        Swal.fire({
            title: "Verificar la entrada de datos",
            confirmButtonText: "Intentar de nuevo",
            confirmButtonColor: "#00838F",
            html: '<iframe width="320" height="240" src="https://embed.lottiefiles.com/animation/98274"></iframe>',
        });
        return; 
    } 
    const resultado = colones / tipoCambio;
    document.getElementById('resultadoColones').innerText = 
        `El resultado es: ${resultado.toFixed(2)} dólares`;
}
