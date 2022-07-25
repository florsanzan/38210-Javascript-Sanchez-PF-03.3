function Carrito(nombre = "Usuario", total = 0) {
    this.nombre = nombre;
    this.total = total;
    this.productos = [];
  
  
    this.agregarItem = function (libros) {
      if (libros.hayStock(libros)) {
        if (this.productos[libros.id] == undefined) {
          this.productos[libros.id] = libros;
        }
        this.productos[libros.id].cant++;
      } else {
        return console.log("No hay stock");
      }
      actualizar();
    };
  
    this.precioProducto = function () {
      let totalP = 0;
      for (producto of this.productos) {
        if (producto != undefined) {
          totalP += producto.precio * producto.cant;
        }
      }
      this.total = totalP;
      return totalP;
    };
  }