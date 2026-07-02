function mostrarLogin(){
  document.getElementById("pantallaInicio").classList.add("oculto");
  document.getElementById("pantallaLogin").classList.remove("oculto");
}

function abrirRegistro(){
  document.getElementById("loginCard").classList.add("oculto");
  document.getElementById("registroCard").classList.remove("oculto");
}

function volverLogin(){
  document.getElementById("registroCard").classList.add("oculto");
  document.getElementById("loginCard").classList.remove("oculto");
}

function togglePassword(id){
  const input = document.getElementById(id);
  input.type = input.type === "password" ? "text" : "password";
}

function medirSeguridad(){
  const clave = document.getElementById("registroClave").value;
  const barra = document.getElementById("barraSeguridad");
  const texto = document.getElementById("textoSeguridad");

  let puntos = 0;

  if(clave.length >= 6) puntos++;
  if(clave.length >= 10) puntos++;
  if(/[A-Z]/.test(clave)) puntos++;
  if(/[0-9]/.test(clave)) puntos++;
  if(/[^A-Za-z0-9]/.test(clave)) puntos++;

  if(puntos <= 1){
    barra.style.width = "25%";
    barra.style.background = "red";
    texto.innerText = "Seguridad: baja";
  }else if(puntos <= 3){
    barra.style.width = "60%";
    barra.style.background = "orange";
    texto.innerText = "Seguridad: media";
  }else{
    barra.style.width = "100%";
    barra.style.background = "limegreen";
    texto.innerText = "Seguridad: alta";
  }
}

function crearCuenta(){
  const usuario = document.getElementById("registroUsuario").value.trim();
  const clave = document.getElementById("registroClave").value;
  const confirmar = document.getElementById("confirmarClave").value;
  const mensaje = document.getElementById("mensajeRegistro");

  if(usuario === "" || clave === "" || confirmar === ""){
    mensaje.innerText = "Completa todos los campos.";
    return;
  }

  if(clave !== confirmar){
    mensaje.innerText = "Las contraseñas no coinciden.";
    return;
  }

  localStorage.setItem("darkUser", usuario);
  localStorage.setItem("darkPass", clave);

  mensaje.style.color = "limegreen";
  mensaje.innerText = "Cuenta creada correctamente.";

  setTimeout(volverLogin, 1000);
}

function iniciarSesion(){
  const usuario = document.getElementById("loginUsuario").value;
  const clave = document.getElementById("loginClave").value;

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
