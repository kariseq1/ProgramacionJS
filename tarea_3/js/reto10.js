const text = require("body-parser/lib/types/text");

function comprobar () {


    if (document.form1.c3.checked == true){
        if (document.form1.c1.checked == true & document.form1.c2.checked == false ) {
            
            Swal.fire({
                title: 'Falta el requisito #2',
                icon: 'error',
                iconColor: '#231955',
                text: 'El pago no puede ser realizado.',
                imageWidth: 400,
                ImageHeight: 200,
            })
}
if (document.form1.c2.checked == true & document.form1.c1.checked == false){
    Swal.fire({
        title: 'Falta el requisito #1',
        icon: 'error',
        iconColor: '#231955',
        text: 'El pago no puede ser realizado.',
        imageWidth: 400,
        ImageHeight: 200,
    })
}
if (document.form1.c1.checked == true & document.form1.c2.checked == true ){
    Swal.fire({
        title: 'Excelente',
        icon: 'success',
        iconColor: '#231955',
        text: '¡Pago efectuado!',
        imageWidth: 400,
        ImageHeight: 200,
    })
    document.getElementById("demo").innerHTML = "<strong>Excelente. Buena suerte </strong>";
    document.getElementById("ima1").style.display = '<img src = "logos.png" alt="logos" ';
    document.getElementById("ima1").style.display = 'block';
    }
}
document.form1.c3.checked == false;
document.form1.c2.checked == false;
document.form1.c1.checked == false; 
}