document.querySelector("#btnRegistrar").addEventListener('click', validar)
function validar() {
    nombre = document.getElementById('name').value 
    let apellido = document.getElementById('lastname').value
    let cedula = document.getElementById('idCard').value
    let correo = document.getElementById('email').value
    let contrasena = document.getElementById('password').value
    let auxNum = false 
    let vectorPassword.split('')
    if (nombre == "") {
        alert("Debe ingresar un nombre")
    }
    if (apellido == "") {
        alert("Debe ingresar un apellido")
    }
    if (cedula == "") {
        alert("Debe ingresar una cedula")
    }
    if (correo == "") {
        alert("Debe ingresar un correo")
    }
    if (contrasena == "") {
        alert("Debe ingresar un contrasena")

    }
    else {
        
        for (let i = 0; i<vectorPassword.length; i++) {
            if(vectorPassword[i] == 0 || vectorPassword[i] == 1 || vectorPassword[i] == 2 || vectorPassword[i] == 3 || vectorPassword[i] == 4 || vectorPassword[i] == 5 || vectorPassword[i] == 6 || vectorPassword[i] == 7 || vectorPassword[i] == 8 || vectorPassword[i] == 9)
            auxNum = true
            break;
        }

    }
    if(auxNum == true) {
        if(vectorPassword.length > 5) {
            alert("Contraseña creada")
        }
        else {
            alert("Debe ingresar al menos 5 caracteres")
        }
        

    }
    else {
        alert("Debne ingresar al menos un numero en la contraseña")
    }
}
