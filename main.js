$(document).ready(function(){ 
const arraysPrestamos=[
    {id:1, img: 'imagen/prestamos.jpg', monto: "Prestamo $10.000", cuotas: 'Cuatro cuotas de $3.425'},
    {id:2, img: 'imagen/prestamos.jpg', monto: "Prestamo $10.000", cuotas: 'Seis cuotas de $2.285'},
    {id:3, img: 'imagen/prestamos.jpg', monto: "Prestamo $10.000", cuotas: 'Ocho cuotas de $1.725'},
    {id:4, img: 'imagen/prestamos.jpg', monto: "Prestamo $10.000", cuotas: 'Diez cuotas de $1.370'},
    {id:5, img: 'imagen/prestamos.jpg', monto: "Prestamo $10.000", cuotas: 'Doce cuotas de $1.142'},
    {id:6, img: 'imagen/prestamo_1.jpg', monto:"Prestamo $20.000", cuotas:'Cuatro cuotas de $7.000'},
    {id:7, img: 'imagen/prestamo_1.jpg', monto:"Prestamo $20.000", cuotas:'Seis cuotas de $4.570'},
    {id:8, img: 'imagen/prestamo_1.jpg', monto:"Prestamo $20.000", cuotas:'Ocho cuotas de $3.450'},
    {id:9, img: 'imagen/prestamo_1.jpg', monto:"Prestamo $20.000", cuotas:'Diez cuotas de $2.740'},
    {id:10, img: 'imagen/prestamo_1.jpg', monto:"Prestamo $20.000", cuotas:'Doce cuotas de $2.285'}
]
  
  const contenedorPrestamos=document.getElementById('contenedor') 
  

  //  Animacion.
  $('#titulo').slideUp(1)
              .slideDown(2000)
              .animate({opacity: '0.5'}, 2000)
              .delay(2000)
              .animate({opacity: '1'}, 2000)

     //  Agrego cards y botones                     
    arraysPrestamos.forEach(prestamo => {
     // LocalStorage Array 
      const guardarLS = localStorage.setItem('arrays',JSON.stringify (arraysPrestamos))
     JSON.parse(localStorage.getItem('arrays'))        

$('#contenedor').append( `
<div class="card my-3"  style="width: 16rem;">
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
      //let parrafo = document.getElementById("warning")
     // let form = document.getElementById("form")
     let reMedio = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/
     let error =document.getElementById('error').value;
      let nombre = document.getElementById("name").value;
      let apellido = document.getElementById("apellido").value;
      let direccion = document.getElementById("adress").value;
      let mail = document.getElementById("mail").value;
      let dni = document.getElementById("dni").value;
      let telefono = document.getElementById("phone"). value;
      let cliente1 = new Cliente(nombre, apellido, mail, direccion, telefono,dni);
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
        //alert("Todos los campos son obligatorios");
       document.getElementById('error').innerHTML = "Llenar todos los campos"
        return false;
         
       } else if(nombre.length > 30){
       // alert("El nombre es muy largo");
       document.getElementById('error').innerHTML = "El nombre es muy largo"
         return false;
       } else if(apellido.length > 40){
         //alert("El apellido es muy largo");
         document.getElementById('error').innerHTML ="El apellido es muy largo"
         return false;
       } else if(direccion.length > 40){
         document.getElementById('error').innerHTML = "La dirección es muy larga"
        // alert("La dirección es muy larga");
        
        return false;
       } else if(!reMedio. test(mail)){
         document.getElementById('error').innerHTML = "El mail no es valido"
         //alert("El mail es muy largo");
         
         return false;
       } else if(telefono.length > 15){
         document.getElementById('error').innerHTML = "El número de teléfono es muy largo"
        // alert("El número es muy largo");
       
         return false;
       } else if(dni.length > 10){
         document.getElementById('error').innerHTML = "El número de DNI es muy largo"
        // alert("El número es muy largo");
        
         return false;
       } else if(isNaN(telefono)){
         document.getElementById('error').innerHTML = "No es un número de teléfono"
         //alert("Teléfono no es un número");
         
         return false;
       } else if(isNaN(dni)){
        document.getElementById('error').innerHTML = "No es un número de DNI"
         //alert("El dni solo lleva números");
         
         return false;
       }
       
       
       
     
     /* if(nombre === "" || apellido === "" || direccion === "" || mail === "" || dni ==="" || telefono === "") {
       alert("Todos los campos son obligatorios");
        return false;
      } else if(nombre.length > 30){
        alert("El nombre es muy largo");
        return false;
      } else if(apellido.length > 40){
        alert("El apellido es muy largo");
        return false;
      } else if(direccion.length > 40){
        alert("La dirección es muy larga");
        return false;
      } else if(mail.length > 40){
        alert("El mail es muy largo");
        return false;
      } else if(telefono.length > 15){
        alert("El número es muy largo");
        return false;
      } else if(dni.length > 8){
        alert("El número es muy largo");
        return false;
      } else if(isNaN(telefono)){
        alert("Teléfono no es un número");
        return false;
      } else if(isNaN(dni)){
        alert("El dni solo lleva números");
        return false;
      }*/
     
      $('.modal-backdrop').remove()
      $('.modal').removeClass('show')
    
    

      console.log(cliente1);
     mostrarCliente(cliente1);
    }
   /* const cerrarModal = document.getElementById('modal-cerrar');
    const btnSubmit = document.getElementById('btn-submit')
    cerrarModal.addEventListener('click',() =>{
     btnSubmit.add(`data-bs-dismiss="modal"`)
    })*/
    
    /*const parrafo = document.getElementById('warning')
    const form = document.getElementById('form')
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      let warning = ""
     
      if(nombre === "" || apellido === "" || direccion === "" || mail === "" || dni ==="" || telefono === "") {
       warning += `el nombre es invalid`
         return false;
       } else if(nombre.length > 30){
         alert("El nombre es muy largo");
         return false;
       } else if(apellido.length > 40){
         alert("El apellido es muy largo");
         return false;
       } else if(direccion.length > 40){
         alert("La dirección es muy larga");
         return false;
       } else if(mail.length > 40){
         alert("El mail es muy largo");
         return false;
       } else if(telefono.length > 15){
         alert("El número es muy largo");
         return false;
       } else if(dni.length > 8){
         alert("El número es muy largo");
         return false;
       } else if(isNaN(telefono)){
         alert("Teléfono no es un número");
         return false;
       } else if(isNaN(dni)){
         alert("El dni solo lleva números");
         return false;
       }
      

    })*/
  
   
    

    
 



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

