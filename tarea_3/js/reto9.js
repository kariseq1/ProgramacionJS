function evaluarEncuesta() {

    var pregunta1 = document.getElementById("r1").value
    var pregunta2 = document.getElementById("r2").value

    var respuesta3 = ""
    document.getElementsByName("opinion")
        .forEach(radio => {
            if (radio.checked) {
                console.log(radio.value);
                respuesta3 = radio.value
            }
        });

    var respuesta4 = ""
    document.getElementsByName("opinion2")
        .forEach(radio => {
            if (radio.checked) {
                console.log(radio.value);
                respuesta4 = radio.value
            }
        });

    if (pregunta1 == "" || pregunta2 == "" || respuesta3 == "" || respuesta4 == "") {
        swal.fire({
            title: "Error de validación.",
            text: "No deje espacios vacios!",
            icon: "warning",
        })
    } else {

        var mensaje1 = "";
        if (document.formulario.frescura.checked == true && document.formulario.calidad.checked == true && document.formulario.servicio.checked == true) {
            mensaje1 = "¡Gracias por confiar en nosotros y calificarnos bien en nuestros servicios!";
        } else if (document.formulario.frescura.checked == false || document.formulario.calidad.checked == false || document.formulario.servicio.checked == false) {
            mensaje1 = "Gracias por sus respuestas, tomaremos en cuenta sus respuestas para mejorar.";
        } else if (document.formulario.frescura.checked == false && document.formulario.calidad.checked == false && document.formulario.servicio.checked == false) {
            mensaje1 = "Gracias por sus respuestas, lamentamos no haya tenido la mejor experiencia, lo tomaremos en cuenta para mejorar.";
        }

        var mensaje3 = "";
        if (respuesta4 == "Buena") {
            mensaje3 = "Apreciamos que califique nuestra atencion al cliente de buena manera, seguiremos brindando nuestro servicio incluso mejor para seguir complaciendo a nuestros clientes.";
        } else if (respuesta4 == "Regular") {
            mensaje3 = "Agradecemos su sinceridad acerca de nuestros servicio de atencion, vamos a trabajar para mejorarlo.";
        } else {
            mensaje3 = "Lamentamos que la frescura de los alimentos le haya decepcionado, nos ocuparemos de eso para mejorar pronto y no causar otro problema igual.";
        }

        var mensaje2 = "";
        if (respuesta3 == "Si") {
            mensaje2 = "¡Gracias por preferir nuestros alimentos!";
        } else {
            mensaje2 = "Gracias por su respuesta, intentaremos mejorar para que pueda volver a nuestro local y sllevarse una buena experiencia!";
        }

        swal.fire({
            title: "Respuestas enviadas",
            text: "Gracias por realizar nuestra encuesta",
            
            html: "<iframe src='https://embed.lottiefiles.com/animation/123492' width='440' height='380' > < /iframe>"
        })
        
        document.getElementById("res0").innerHTML = "¡Gracias por sus respuestas!";
        document.getElementById("res1").innerHTML = mensaje2
        document.getElementById("res2").innerHTML = mensaje3
        document.getElementById("res3").innerHTML = mensaje1
    }
}

function limpiarFormulario() {
    document.getElementById("r1").value = "";
    document.getElementById("r2").value = "";

    var opcionesRadio3 = document.getElementsByName("opinion");
    opcionesRadio3.forEach(radio => (radio.checked = false));

    var opcionesRadio4 = document.getElementsByName("opinion2");
    opcionesRadio4.forEach(radio => (radio.checked = false));

    document.getElementById("calidad").checked = false;
    document.getElementById("frescura").checked = false;
    document.getElementById("servicio").checked = false;
    document.getElementById("radio").checked = false;
    document.getElementById("youtube").checked = false;
    document.getElementById("facebook").checked = false;
    document.getElementById("television").checked = false;
    document.getElementById("otro").checked = false;

    document.getElementById("res0").innerHTML = "";
    document.getElementById("res1").innerHTML = "";
    document.getElementById("res2").innerHTML = "";
    document.getElementById("res3").innerHTML = "";

}