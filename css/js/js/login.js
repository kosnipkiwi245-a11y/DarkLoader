function mostrarLogin(){
  document.getElementById("pantallaInicio").classList.add("oculto");
  document.getElementById("pantallaLogin").classList.remove("oculto");
}

function registrarUsuario(){
  const usuario = document.getElementById("usuario").value;
  const clave = document.getElementById("clave").value;

  if(usuario === "" || clave === ""){
    alert("Escribe usuario y contraseña.");
    return;
  }

  localStorage.setItem("darkUser", usuario);
  localStorage.setItem("darkPass", clave);

  alert("Cuenta creada correctamente.");
}

function iniciarSesion(){
  const usuario = document.getElementById("usuario").value;
  const clave = document.getElementById("clave").value;

  if(
    usuario === localStorage.getItem("darkUser") &&
    clave === localStorage.getItem("darkPass")
  ){
    document.getElementById("pantallaLogin").classList.add("oculto");
    document.getElementById("app").classList.remove("oculto");
    mostrarJuegos();
  }else{
    alert("Usuario o contraseña incorrectos.");
  }
}

function cerrarSesion(){
  location.reload();
}
