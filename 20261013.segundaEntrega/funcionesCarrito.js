//funcion para obtener la cookie

function obtenerCarrito() {
    var cookies = document.cookie.split("; ");
    for (var i in cookies) {
        var partes = cookies[i].split("=");
        if (partes[0] === "carrito") {
            return JSON.parse(decodeURIComponent(partes[1]));
        }
    }
    return [];
}

//Guradra el array de la coocki durante 7 dias
function guardarCarrito(carrito) {
    var dias = 7;
    var fecha = new Date();
    fecha.setTime(fecha.getTime() + (dias * 24 * 60 * 60 * 1000));
    var expira = "expires=" + fecha.toUTCString();
    
    var valorCookie = encodeURIComponent(JSON.stringify(carrito));
    document.cookie = "carrito=" + valorCookie + ";" + expira + ";path=/";
}


// Añadir un nuevo producto al carrito
function comprarProducto() {
    var inputCantidad = document.getElementById("cantidad").value;
    var inputDescripcion = document.getElementById("descripcion").value;

    var cantidad = parseInt(inputCantidad);
    var descripcion = inputDescripcion.trim();

    //VALIDACINES
    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Introduce una cantidad válida mayor que 0");
        return;
    }

    if (descripcion === "") {
        alert("Introduce una descripción para el producto");
        return;
    }

    var carrito = obtenerCarrito();

    carrito.push({
        cantidad: cantidad,
        descripcion: descripcion
    });

    guardarCarrito(carrito);

    alert("Añadido: " + cantidad + " " + descripcion);

    // Limpiamos los campos 
    document.getElementById("cantidad").value = "";
    document.getElementById("descripcion").value = "";
}

// Mostrar el contenido y el total por consola
function verCarrito() {
    var carrito = obtenerCarrito();

    console.clear();
    console.log("=== CONTENIDO DEL CARRITO ===");

    if (carrito.length === 0) {
        console.log("El carrito está vacío.");
        return;
    }

    var totalUnidades = 0;

    for (var i in carrito) {
        var item = carrito[i];
        console.log("- " + item.cantidad + " " + item.descripcion);
        totalUnidades += item.cantidad;
    }

    console.log("-----------------------------");
    console.log("TOTAL de productos en el carrito: " + totalUnidades);
}