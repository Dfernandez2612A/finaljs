//Acciones botones añadir

let boton1 = document.querySelector("#boton1");
boton1.addEventListener("click", () => { 
   let clave = "Collar perro pequeño";
   let valor = 10000;
   localStorage.setItem(clave,valor);
})

let boton2 = document.querySelector("#boton2");
boton2.addEventListener("click", () => { 
   let clave = "Collar corbatin";
   let valor = 15000;
   localStorage.setItem(clave,valor);

})

let boton3 = document.querySelector("#boton3");
boton3.addEventListener("click", () => { 
   let clave = "Collar iluminado";
   let valor = 20000;
   localStorage.setItem(clave,valor);

})

let boton4 = document.querySelector("#boton4");
boton4.addEventListener("click", () => { 
   let clave = "Collar antimordida";
   let valor = 12000;
   localStorage.setItem(clave,valor);

})

let boton5 = document.querySelector("#boton5");
boton5.addEventListener("click", () => { 
   let clave = "Pechera grande";
   let valor = 25000;
   localStorage.setItem(clave,valor);

})

let boton6 = document.querySelector("#boton6");
boton6.addEventListener("click", () => { 
   let clave = "pechera pecheña";
   let valor = 18000;
   localStorage.setItem(clave,valor);

})


// Boton Ver Carrito
document.getElementById("boton_ver").addEventListener('click', function(){
let datos=document.getElementById('datos');
let tabla=document.createElement('table');
datos.innerHTML ='';
  
   for (let index = 0; index < localStorage.length; index++) {
   let clave = localStorage.key(index);
   let fila =document.createElement('tr');
      fila.innerHTML =`<td>${clave}</td>
                       <td>${localStorage.getItem(clave)}</td>`;
          tabla.append(fila);
          datos.append(tabla);  
   }

})

document.getElementById("limpiar").addEventListener('click', function(){
   localStorage.clear();
   document.getElementById('datos').innerHTML ="";

})



document.getElementById("confirmar").addEventListener('click', function(){
   Swal.fire({
      title: 'Ingrese su telefono',
      input: 'text',
      showDenyButton: true,
      
      confirmButtonText: 'confirmar',
      denyButtonText: `cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Gracias por su compra, nos pondremos en contacto con usted en unos minutos', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('telefono no guardado', '', 'info')
      }
    })
  
})


    