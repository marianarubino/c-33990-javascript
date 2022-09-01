


const productos = [
    {
      id: 1,
      nombre: "Almohadon",
      precio: 800,
    },
    {
      id: 2,
      nombre: "juguetes",
      precio: 500,
    },
    {
      id: 3,
      nombre: "tejidos",
      precio: 300,
    },
  ];
  
  let contadorCarrito = 0;
  const carrito = [];
  
  const productoCatalogoHTML = (producto) => {
    return `
      <div class="col">
        <div class="card">
          <img
            src="https://loremflickr.com/100/100/${producto.nombre}"
            class="card-img-top"
          />
          <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">Precio: ${producto.precio}</p>
            <button id="btn-catalogo-${producto.id}" class="btn btn-success">Agregar</button>
          </div>
        </div>
      </div>`;
  };
  
  const productoCarritoHTML = (producto) => {
    return `
      <div class="col">
        <div class="card">
          <img
            src="https://loremflickr.com/100/100/${producto.nombre}"
            class="card-img-top"
          />
          <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <button id="btn-carrito-${producto.idCompra}" class="btn btn-danger">Quitar</button>
          </div>
        </div>
      </div>`;
  };
  
  const mostrarCatalogo = () => {
    const catalogoNodo = document.getElementById("catalogo");
    let catalogoHTML = "";
  
    for (const producto of productos) {
      catalogoHTML += productoCatalogoHTML(producto);
    }
  
    catalogoNodo.innerHTML = catalogoHTML;
    botonesCatalogo();
  };
  const mostrarCarrito = () => {
    const carritoNodo = document.getElementById("carrito");
    const precioNodo = document.getElementById("precioTotal");
  
    let carritoHTML = "";
    let precio = 0;
    for (const producto of carrito) {
      carritoHTML += productoCarritoHTML(producto);
      precio += producto.precio;
    }
  
    precioNodo.innerHTML = precio;
    carritoNodo.innerHTML = carritoHTML;
    botonesCarrito();
  };
  
  const botonesCatalogo = () => {
    for (const producto of productos) {
      const botonId = `btn-catalogo-${producto.id}`;
      const botonNodo = document.getElementById(botonId);
  
      botonNodo.addEventListener("click", () => {
        const productoCarrito = {
          nombre: producto.nombre,
          idCompra: contadorCarrito,
          precio: producto.precio,
        };
  
        contadorCarrito += 1;
        carrito.push(productoCarrito);
        mostrarCarrito();
      });
    }
  };
  
  const botonesCarrito = () => {
    for (const producto of carrito) {
      const botonId = `btn-carrito-${producto.idCompra}`;
      const botonNodo = document.getElementById(botonId);
  
      botonNodo.addEventListener("click", () => {
        const index = carrito.findIndex((p) => p.idCompra == producto.idCompra);
        carrito.splice(index, 1);
        mostrarCarrito();
      });
    }
  };
  
  mostrarCatalogo();
  
  console.log(productoCatalogoHTML(productos[0]));


// guardado de datos en local storage / JSON. 

const usuarioEnLS = localStorage.getItem("ingresarUsuario") || '';

if (!usuarioEnLS) {
  const ingresarUsuario = prompt("Buen dia, ingrese su usuario para comenzar")
  localStorage.setItem("ingresarUsuario", ingresarUsuario);
  console.log(ingresarUsuario);
  console.log(typeof ingresarUsuario);
}

// sweetAlert: asociado a boton:

const btn = document.querySelector('#btnEntrega') 
btn.addEventListener ('click', () => {
  Swal.fire({
    title: 'Coordinar entrega?',
    text: "Se generará tu pedido!",
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, coordinar entrega!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Pedido enviado!',
        'A la brevedad nos contactaremos.',
        'success'
      )
    }
  })
})