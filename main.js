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
      console.log(cliente1);
     mostrarCliente(cliente1);
    }
   
    
    

    
    //  Finalizar compra
   /* let boton = document.getElementById("button-f")
    boton.addEventListener("click", cargarCliente)
    function mostrarCliente(cliente) {
      let formulario = document.getElementById("conteiner");
      formulario.parentNode.removeChild(formulario);

    let nuevoContenido = document.createElement("div");
 nuevoContenido.innerHTML =`  
   Hola
   ${cliente.nombre}
   !!
   sus datos se han registrado correctamente, en breve le enviaremos un mail con las condiciones del prestamo a 
   ${cliente.mail}` ;
 nuevoContenido.className = "contact";
 document.body.appendChild(nuevoContenido);
}*/



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

