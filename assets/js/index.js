function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;
    var patron = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    var regexNumeros = /^[0-9]+$/;
  
    if (nombre == "") {
      alert("Por favor, ingresa tu nombre");
     return false;
    }else if (regexNumeros.test(nombre)) {
      alert("El nombre no puede contener números");
      return false;
    }
  
    if (email == "") {
      alert("Por favor, ingresa tu correo electrónico");
      return flase;
      
    }else if (!patron.test(email)) {
    alert("Ingrese un correo electrónico válido.");
    return false;
    }
  
    if (mensaje == "") {
      alert("Por favor, ingresa un mensaje");
      return false;
    }else{
      alert("¡Gracias por tu mensaje!");
          form.reset();
          return true;
    }
  
  
  }