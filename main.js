$(document).ready(function(){ 
 
  const contenedorPrestamos=document.getElementById('contenedor') 
  

  //  Animacion.
  $('#titulo').slideUp(1)
              .slideDown(2000)
              .animate({opacity: '0.5'}, 2000)
              .delay(2000)
              .animate({opacity: '1'}, 2000)

              // Traigo array archivo json
   $. get ('array.json', (res) =>{           

     //  Agrego cards y botones

    res.forEach((prestamo) => {    

$('#contenedor').append( `
<div class="card my-2"  style="width: 16rem;">
  <img src=${prestamo.img} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${prestamo.monto}</h5>
    <p class="card-text">${prestamo.cuotas}</p>
    <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" id="agregar${prestamo.id}">Solicitar
  
</button>
  </div>
</div>` 
)
   
    })       
   })      
    })
  

       //Formulario Modal   

   const contenedorFormulario= document.getElementById('conteiner')
    class Cliente{
      constructor(nombre,apellido, mail, direccion, telefono, dni){
        this.nombre=nombre;
        this.apellido=apellido;
        this.mail=mail;
        this.direccion=direccion;
        this.telefono=telefono;
        this.dni=dni;
        
    }
    }
    //  Cargar cliente al formulario
    function cargarCliente() {
     let reMedio = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/
    // let error =document.getElementById('error').value;
      let nombre = document.getElementById("name").value;
      let apellido = document.getElementById("apellido").value;
      let direccion = document.getElementById("adress").value;
      let mail = document.getElementById("mail").value;
      let dni = document.getElementById("dni").value;
      let telefono = document.getElementById("phone"). value;
      let cliente1 = new Cliente(nombre, apellido, mail, direccion, telefono,dni);
                // Local Storage
      localStorage.setItem('nombre',nombre);
      localStorage.getItem('nombre');
      localStorage.setItem('apellido',apellido);
      localStorage.getItem('apellido');
      localStorage.setItem('direccion', direccion);
      localStorage.getItem('direccion');
      localStorage.setItem('mail', mail);
      localStorage.getItem('mail');
      localStorage.setItem('telefono', telefono);
      localStorage.getItem('telefono');
      localStorage.setItem('dni', dni);
      localStorage.getItem('dni');
      
     
      if(nombre === "" || apellido === "" || direccion === "" || mail === "" || dni ==="" || telefono === "") {
       document.getElementById('error').innerHTML = "Llenar todos los campos"
        return false;
         
       } else if(nombre.length > 30){
       document.getElementById('error').innerHTML = "El nombre es muy largo"
         return false;

       } else if(apellido.length > 40){
         document.getElementById('error').innerHTML ="El apellido es muy largo"
         return false;

       } else if(direccion.length > 40){
         document.getElementById('error').innerHTML = "La dirección es muy larga" 
        return false;

       } else if(!reMedio. test(mail)){
         document.getElementById('error').innerHTML = "El mail no es valido"
         return false;

       } else if(telefono.length > 15){
         document.getElementById('error').innerHTML = "El número de teléfono es muy largo"
         return false;

       } else if(dni.length > 10){
         document.getElementById('error').innerHTML = "El número de DNI es muy largo"
         return false;

       } else if(isNaN(telefono)){
         document.getElementById('error').innerHTML = "No es un número de teléfono"
         return false;

       } else if(isNaN(dni)){
        document.getElementById('error').innerHTML = "No es un número de DNI" 
         return false;
       }
       
       // Remuevo el Modal.
      $('.modal-backdrop').remove()
      $('.modal').removeClass('show')
    
    

      console.log(cliente1);
     mostrarCliente(cliente1);
    }


//    Finalizar Compra

function mostrarCliente(cliente) { 
$('#contact'). append( 
  `  
 <p> Hola
  ${cliente.nombre}
  !!
  Sus datos se han registrado correctamente, en breve le enviaremos un mail con las condiciones del prestamo a 
  ${cliente.mail}<p/>`).addClass('contact')

}

