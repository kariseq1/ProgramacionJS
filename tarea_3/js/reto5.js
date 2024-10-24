window.onload = function() {
    document.getElementById("zona").onchange = function(e) {
            
            a = e.target.value;
            if (a == "San José") {
                var imagen = "img/sanjose.jpg";
            } else if (a == "Heredia") {
                var imagen = "img/heredia.jpg";
            } else if (a == "Alajuela") {
                var imagen = "img/alajuela.jpg";
            } else if (a == "Limón") {
                var imagen = "img/limon.jpg";
            }
            
            document.getElementById("imagen").src = imagen;
        }
        
    document.getElementById("planta").onchange = function(es) {
        
        n = es.target.value;
    }
}

function calcular() {

    if (document.getElementById("zona").value == "Seleccione una zona") {
        swal.fire({
            icon: "info",
            title: "Atencion",
            text: "Seleccionar la zona y las plantas que desea.",
        });
    }
    if (document.getElementById("planta").value == "Seleccione si desea una planta o dos") {
        swal.fire({
            icon: "info",
            title: "Atencion",
            text: "Seleccionar la zona y las plantas que desea",
        })
    }

    var montoCuota = 0;
    switch (a) {
        case "San José":
            if (n == "1")
                montoCuota = 500;
            else
                montoCuota = 1000;
            break;
        case "Heredia":
            if (n == "1")
                montoCuota = 500;
            else
                montoCuota = 1000;
        case "Alajuela":
            if (n == "1")
                montoCuota = 500;
            else
                montoCuota = 1000;
        case "Limón":
            if (n == "1")
                montoCuota = 500;
            else
                montoCuota = 1000;
        default:
            break;
    }

    swal.fire({
        html: "<p> Esta es la cuota mensual de la casa sutiada en " +
            a +
            " " +
            "con" +
            n +
            "planta" +
            "<br><br> <strong>Cuota mensual:</strong></p> " +
            "$" +
            montoCuota,
        imageWidth: 600,
        imageHeight: 250,
        imageAlt: "Propiedad " + a,
    });
}
