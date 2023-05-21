class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    saludar() {
      console.log(`¡Hola! Mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
  }
  
  // Crear un objeto persona
  const persona1 = new Persona("Juan", 25);
  const persona2 = new Persona("Ana", 50);
  // Llamar al método saludar
  persona1.saludar();
  persona2.saludar()