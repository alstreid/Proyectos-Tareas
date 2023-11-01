// Interfaz
interface Vehiculo {
    modelo: string;
    velocidadMaxima: number;
    mostrarPropiedades(): void;
}

// Clases
class VehiculoTerrestre implements Vehiculo {
    constructor(public modelo: string, public velocidadMaxima: number) { }

    conducir(terreno: string) {
        console.log(`Conduciendo un vehículo terrestre modelo ${this.modelo} en ${terreno}`);
    }

    mostrarPropiedades() {
        console.log(`Modelo: ${this.modelo}, Velocidad Máxima: ${this.velocidadMaxima} km/h`);
    }
}

class VehiculoMaritimo implements Vehiculo {
    constructor(public modelo: string, public velocidadMaxima: number) { }

    navegar(oceano: string) {
        console.log(`Navegando un vehículo marítimo modelo ${this.modelo} en el ${oceano}`);
    }

    mostrarPropiedades() {
        console.log(`Modelo: ${this.modelo}, Velocidad Máxima: ${this.velocidadMaxima} nudos`);
    }
}

class VehiculoAereo implements Vehiculo {
    constructor(public modelo: string, public velocidadMaxima: number) { }

    volar(altitud: string) {
        console.log(`Volando un vehículo aéreo modelo ${this.modelo} a ${altitud}`);
    }

    mostrarPropiedades() {
        console.log(`Modelo: ${this.modelo}, Velocidad Máxima: ${this.velocidadMaxima} km/h`);
    }
}

// VehiculoTerrestre
class Camion extends VehiculoTerrestre {
    constructor(modelo: string, velocidadMaxima: number, public capacidadCarga: number) {
        super(modelo, velocidadMaxima);
    }

    mostrarPropiedades() {
        super.mostrarPropiedades();
        console.log(`Capacidad de Carga: ${this.capacidadCarga} toneladas`);
    }
}

class Camioneta extends VehiculoTerrestre {
    constructor(modelo: string, velocidadMaxima: number, public capacidadPasajeros: number) {
        super(modelo, velocidadMaxima);
    }

    mostrarPropiedades() {
        super.mostrarPropiedades();
        console.log(`Capacidad de Pasajeros: ${this.capacidadPasajeros}`);
    }
}

class Automovil extends VehiculoTerrestre {
    constructor(modelo: string, velocidadMaxima: number, public tipoCombustible: string) {
        super(modelo, velocidadMaxima);
    }

    mostrarPropiedades() {
        super.mostrarPropiedades();
        console.log(`Tipo de Combustible: ${this.tipoCombustible}`);
    }
}

// VehiculoMaritimo
class Barco extends VehiculoMaritimo {
    constructor(modelo: string, velocidadMaxima: number, public eslora: number) {
        super(modelo, velocidadMaxima);
    }

    mostrarPropiedades() {
        super.mostrarPropiedades();
        console.log(`Eslora: ${this.eslora} metros`);
    }
}

class Yate extends VehiculoMaritimo {
    constructor(modelo: string, velocidadMaxima: number, public camarotes: number) {
        super(modelo, velocidadMaxima);
    }

    mostrarPropiedades() {
        super.mostrarPropiedades();
        console.log(`Camarotes: ${this.camarotes}`);
    }
}

// VehiculoAereo
class Avion extends VehiculoAereo {
    constructor(modelo: string, velocidadMaxima: number, public envergadura: number) {
        super(modelo, velocidadMaxima);
    }

    mostrarPropiedades() {
        super.mostrarPropiedades();
        console.log(`Envergadura: ${this.envergadura} metros`);
    }
}

class Avioneta extends VehiculoAereo {
    constructor(modelo: string, velocidadMaxima: number, public autonomia: number) {
        super(modelo, velocidadMaxima);
    }

    mostrarPropiedades() {
        super.mostrarPropiedades();
        console.log(`Autonomía: ${this.autonomia} kilómetros`);
    }
}


const camionPepe = new Camion("Volvo", 80, 15);
const camionetaPadre = new Camioneta("Ford", 120, 5);
const automovilMadre = new Automovil("Toyota", 180, "Gasolina");
const barcoAlquilado = new Barco("Oceanic", 40, 25);
const yatePrestado = new Yate("Luxury", 50, 8);
const avionAvianca = new Avion("Boeing 747", 900, 68);
const avionetaSembrio = new Avioneta("Cessna 172", 230, 1500);

camionPepe.conducir("carretera");
camionPepe.mostrarPropiedades();
camionetaPadre.conducir("ciudad");
camionetaPadre.mostrarPropiedades();
automovilMadre.conducir("autopista");
automovilMadre.mostrarPropiedades();
barcoAlquilado.navegar("océano Atlántico");
barcoAlquilado.mostrarPropiedades();
yatePrestado.navegar("mar Mediterráneo");
yatePrestado.mostrarPropiedades();
avionAvianca.volar("30,000 pies");
avionAvianca.mostrarPropiedades();
avionetaSembrio.volar("5,000 pies");
avionetaSembrio.mostrarPropiedades();









