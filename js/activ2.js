class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
    saludar() {
        alert(`¡Hola! Mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
      }
      
   
  }
  
  // Crear un objeto persona
  const persona1 = new Persona("Nahuel", 56);
  const persona2 = new Persona("Sara", 35)
  // Llamar al método saludar
  persona1.saludar();
  persona2.saludar()