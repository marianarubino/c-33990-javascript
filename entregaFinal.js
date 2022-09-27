
                                    
                                    // CARRITO: //
const productos = [
    {
      id: 1,
      nombre: "producto1",
      precio: 1234,
    },
    {
      id: 2,
      nombre: "producto2",
      precio: 2000,
    },
    {
      id: 3,
      nombre: "producto3",
      precio: 4000,
    },
    {
      id: 4,
      nombre: "producto4",
      precio: 6050,
    },
    {
      id: 5,
      nombre: "producto5",
      precio: 7000,
    },
  ];
  
  let contadorCarrito = 0;
  const carrito = [];
  
  const productoCatalogoHTML = (producto) => {
    return `
      <div class="col">
        <div class="card">
          <img
            src="https://loremflickr.com/320/240?lock=1/${producto.nombre}"
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
            src="https://loremflickr.com/320/240?lock=1/${producto.nombre}"
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

                                    // FIN DEL CARRITO //

// BOTON DE COORDINAR ENTREGA (me reemplaza este codigo por el de abajo):

const btn = document.getElementById("entrega") 
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
          'Pedido procesado!',
          'A la brevedad nos contactaremos.',
          'success'
        )
      }
    })
  });

// BOTON DE INICIO:
const boton = document.getElementById('botonInicio') 
  boton.addEventListener('click', () => {
    Swal.fire('Si sales, perderás los productos seleccionados')
  });



/* manejo de promesas con fetch: y carga de datos desde un Json o api externa: */

const lista= document.querySelector('#proximos')

fetch('https://jsonplaceholder.typicode.com/posts')
  .then ((Response)=> Response.json())
  .then ((data)=> {
    
    data.forEach( (post) => {
      const li = document.createElement('li')
      li.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        `
        lista.append(li)  
    })
  })

// guardado de datos en local storage / JSON. 

const usuarioEnLS = localStorage.getItem("ingresarUsuario") || '';

if (!usuarioEnLS) {
  const ingresarUsuario = prompt("Buen dia, ingrese su usuario para comenzar")
  localStorage.setItem("ingresarUsuario", ingresarUsuario);
  console.log(ingresarUsuario);
  console.log(typeof ingresarUsuario);
};

