document.querySelector("#btnRegistrar").addEventListener('click', validar)
function validar() {
    let nombre = document.getElementById('name').value 
    let apellido = document.getElementById('lastname').value
    let cedula = document.getElementById('idCard').value
    let correo = document.getElementById('email').value
    let contrasena = document.getElementById('password').value
    
    let auxNum = false 
    let vectorPassword = contrasena.split("")
    let error = false
    if (nombre == "") {
        alert("Debe ingresar un nombre")
        evento.preventDefault()
        error = true
    }
    if (apellido == "") {
        alert("Debe ingresar un apellido")
        envento.preventDefault()
        error = true
    }
    if (cedula == "") {
        alert("Debe ingresar una cedula")
        evento.preventDefault()
        error = true
    }
    if (correo == "") {
        alert("Debe ingresar un correo")
        evento.preventDefault()
        error = true
    }
    if (contrasena == "") {
        alert("Debe ingresar un contrasena")
        evento.preventDefault()
        error = true
    }
    else {
        
        for (let i = 0; i<vectorPassword.length; i++) {
            if (vectorPassword[i] == 0 || vectorPassword[i] == 1 || vectorPassword[i] == 2 || vectorPassword[i] == 3 || vectorPassword[i] == 4 || vectorPassword[i] == 5 || vectorPassword[i] == 6 || vectorPassword[i] == 7 || vectorPassword[i] == 8 || vectorPassword[i] == 9)
            auxNum = true
            break;
        }

    }
    if (auxNum == true) {
        if (vectorPassword.length > 5) {
           
        }
        else {
            alert("Debe ingresar al menos 5 caracteres")
            error = true
            evento.preventDefault()
        }
        

    }
    else {
        alert("Debe ingresar al menos un numero en la contraseña")
        error = true
        evento.preventDefault()
    }
    if (error == false) {
        alert("El usuario fue creado de forma correcta")

    }
}
