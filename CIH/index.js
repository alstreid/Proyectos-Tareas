var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Clases
var VehiculoTerrestre = /** @class */ (function () {
    function VehiculoTerrestre(modelo, velocidadMaxima) {
        this.modelo = modelo;
        this.velocidadMaxima = velocidadMaxima;
    }
    VehiculoTerrestre.prototype.conducir = function (terreno) {
        console.log("Conduciendo un veh\u00EDculo terrestre modelo ".concat(this.modelo, " en ").concat(terreno));
    };
    VehiculoTerrestre.prototype.mostrarPropiedades = function () {
        console.log("Modelo: ".concat(this.modelo, ", Velocidad M\u00E1xima: ").concat(this.velocidadMaxima, " km/h"));
    };
    return VehiculoTerrestre;
}());
var VehiculoMaritimo = /** @class */ (function () {
    function VehiculoMaritimo(modelo, velocidadMaxima) {
        this.modelo = modelo;
        this.velocidadMaxima = velocidadMaxima;
    }
    VehiculoMaritimo.prototype.navegar = function (oceano) {
        console.log("Navegando un veh\u00EDculo mar\u00EDtimo modelo ".concat(this.modelo, " en el ").concat(oceano));
    };
    VehiculoMaritimo.prototype.mostrarPropiedades = function () {
        console.log("Modelo: ".concat(this.modelo, ", Velocidad M\u00E1xima: ").concat(this.velocidadMaxima, " nudos"));
    };
    return VehiculoMaritimo;
}());
var VehiculoAereo = /** @class */ (function () {
    function VehiculoAereo(modelo, velocidadMaxima) {
        this.modelo = modelo;
        this.velocidadMaxima = velocidadMaxima;
    }
    VehiculoAereo.prototype.volar = function (altitud) {
        console.log("Volando un veh\u00EDculo a\u00E9reo modelo ".concat(this.modelo, " a ").concat(altitud));
    };
    VehiculoAereo.prototype.mostrarPropiedades = function () {
        console.log("Modelo: ".concat(this.modelo, ", Velocidad M\u00E1xima: ").concat(this.velocidadMaxima, " km/h"));
    };
    return VehiculoAereo;
}());
// VehiculoTerrestre
var Camion = /** @class */ (function (_super) {
    __extends(Camion, _super);
    function Camion(modelo, velocidadMaxima, capacidadCarga) {
        var _this = _super.call(this, modelo, velocidadMaxima) || this;
        _this.capacidadCarga = capacidadCarga;
        return _this;
    }
    Camion.prototype.mostrarPropiedades = function () {
        _super.prototype.mostrarPropiedades.call(this);
        console.log("Capacidad de Carga: ".concat(this.capacidadCarga, " toneladas"));
    };
    return Camion;
}(VehiculoTerrestre));
var Camioneta = /** @class */ (function (_super) {
    __extends(Camioneta, _super);
    function Camioneta(modelo, velocidadMaxima, capacidadPasajeros) {
        var _this = _super.call(this, modelo, velocidadMaxima) || this;
        _this.capacidadPasajeros = capacidadPasajeros;
        return _this;
    }
    Camioneta.prototype.mostrarPropiedades = function () {
        _super.prototype.mostrarPropiedades.call(this);
        console.log("Capacidad de Pasajeros: ".concat(this.capacidadPasajeros));
    };
    return Camioneta;
}(VehiculoTerrestre));
var Automovil = /** @class */ (function (_super) {
    __extends(Automovil, _super);
    function Automovil(modelo, velocidadMaxima, tipoCombustible) {
        var _this = _super.call(this, modelo, velocidadMaxima) || this;
        _this.tipoCombustible = tipoCombustible;
        return _this;
    }
    Automovil.prototype.mostrarPropiedades = function () {
        _super.prototype.mostrarPropiedades.call(this);
        console.log("Tipo de Combustible: ".concat(this.tipoCombustible));
    };
    return Automovil;
}(VehiculoTerrestre));
// VehiculoMaritimo
var Barco = /** @class */ (function (_super) {
    __extends(Barco, _super);
    function Barco(modelo, velocidadMaxima, eslora) {
        var _this = _super.call(this, modelo, velocidadMaxima) || this;
        _this.eslora = eslora;
        return _this;
    }
    Barco.prototype.mostrarPropiedades = function () {
        _super.prototype.mostrarPropiedades.call(this);
        console.log("Eslora: ".concat(this.eslora, " metros"));
    };
    return Barco;
}(VehiculoMaritimo));
var Yate = /** @class */ (function (_super) {
    __extends(Yate, _super);
    function Yate(modelo, velocidadMaxima, camarotes) {
        var _this = _super.call(this, modelo, velocidadMaxima) || this;
        _this.camarotes = camarotes;
        return _this;
    }
    Yate.prototype.mostrarPropiedades = function () {
        _super.prototype.mostrarPropiedades.call(this);
        console.log("Camarotes: ".concat(this.camarotes));
    };
    return Yate;
}(VehiculoMaritimo));
// VehiculoAereo
var Avion = /** @class */ (function (_super) {
    __extends(Avion, _super);
    function Avion(modelo, velocidadMaxima, envergadura) {
        var _this = _super.call(this, modelo, velocidadMaxima) || this;
        _this.envergadura = envergadura;
        return _this;
    }
    Avion.prototype.mostrarPropiedades = function () {
        _super.prototype.mostrarPropiedades.call(this);
        console.log("Envergadura: ".concat(this.envergadura, " metros"));
    };
    return Avion;
}(VehiculoAereo));
var Avioneta = /** @class */ (function (_super) {
    __extends(Avioneta, _super);
    function Avioneta(modelo, velocidadMaxima, autonomia) {
        var _this = _super.call(this, modelo, velocidadMaxima) || this;
        _this.autonomia = autonomia;
        return _this;
    }
    Avioneta.prototype.mostrarPropiedades = function () {
        _super.prototype.mostrarPropiedades.call(this);
        console.log("Autonom\u00EDa: ".concat(this.autonomia, " kil\u00F3metros"));
    };
    return Avioneta;
}(VehiculoAereo));
var camionPepe = new Camion("Volvo", 80, 15);
var camionetaPadre = new Camioneta("Ford", 120, 5);
var automovilMadre = new Automovil("Toyota", 180, "Gasolina");
var barcoAlquilado = new Barco("Oceanic", 40, 25);
var yatePrestado = new Yate("Luxury", 50, 8);
var avionAvianca = new Avion("Boeing 747", 900, 68);
var avionetaSembrio = new Avioneta("Cessna 172", 230, 1500);
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
