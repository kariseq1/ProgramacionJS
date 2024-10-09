
document.getElementById("btn-login").addEventListener("click", login);



function validation_alert(ptext) {
    swal.fire({
        
        title: "Por favor, corroborar la entrada de datos",
        text: ptext,
        confirmButtonText: "Inténtelo nuevamente",
        confirmButtonColor: "#0D6EFD",
        html: '<iframe src="https://lottie.host/embed/d7903031-2322-475a-adcb-e2088f711407/o9gZEPUC17.json"></iframe> <br><p>' + ptext + " </p>",
    });
}


function login() {
    let user_input = document.getElementById("in-txt-user").value;
    let pass_input = document.getElementById("in-txt-pass").value;
    
    let username = "cenfo";
    let password = "123";
    
    let input = [user_input, pass_input];
    let input_id = ["in-txt-user", "in-txt-pass"];
    let error_count = 0;
    let text = "";

    for (let i = 0; i < input.length; i++) {
        document.getElementById(input_id[i]).classList.remove("error");
        if (input[i] == "") {
            
            text = "Complete todos los campos, de lo contrario, no podrá continuar con el proceso.";
            validation_alert(text);
            document.getElementById(input_id[i]).classList.add("error");
            error_count++;
        }
    }

    
    if (error_count == 0) {
        if (user_input == username && pass_input == password) {
            Swal.fire({
                
                title: "Credenciales correctas",
                showConfirmButton: false,
                
                timer: 2000,
                html: '<iframe src="https://lottie.host/embed/2b006d60-b191-4cc9-a86b-b513d81fb16c/qMXrbj0CxT.json"></iframe> <br><br><p>!Un momento!</p>',

            }).then(() => {
                window.location.href = "landing.html", "blank";
            });
        } else {
            text = "Usuario o contraseña incorrecta.";
            
            validation_alert(text);
        }
    }
}