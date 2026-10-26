
/* EXCEPCIONES PROPIAS */

class GolesNegativosError extends Error {
    constructor() {
        super("Los goles no pueden ser negativos");
    }
}

class PartidoNegativoError extends Error {
    constructor() {
        super("El numero de partido no puede ser negativo");
    }
}

class DorsalNegativoError extends Error {
    constructor() {
        super("El dorsal no puede ser negativo");
    }
}

class JugadorRepetidoError extends Error {
    constructor() {
        super("Este jugador ya esta en el equipo");
    }
}

class DorsalRepetidoError extends Error {
    constructor() {
        super("Ya existe un jugador con ese dorsal en el equipo");
    }
}


/* CLASE JUGADOR */

class Jugador {
    constructor(dorsal, nombre) {
        this.dorsal = dorsal;
        this.nombre = nombre;
        this.estadisticas = [];
    }

    // Getter y setter del dorsal
    getDorsal() {
        return this.dorsal;
    }

    setDorsal(dorsal) {
        if (dorsal < 0) {
            throw new DorsalNegativoError();
        }

        this.dorsal = dorsal;
    }

    // Getter y setter del nombre
    getNombre() {
        return this.nombre;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    // Añadir goles a un partido
    anadirGolesPorPartidos(partido, goles) {
        if (partido < 0) {
            throw new PartidoNegativoError();
        }

        if (goles < 0) {
            throw new GolesNegativosError();
        }

        // Si el partido ya existe, actualizamos sus goles
        for (let i = 0; i < this.estadisticas.length; i++) {
            if (this.estadisticas[i].partido === partido) {
                this.estadisticas[i].goles = goles;
                return;
            }
        }

        // Si no existe, añadimos una nueva estadistica
        this.estadisticas.push({
            partido: partido,
            goles: goles
        });
    }

    // Obtener los goles de un partido
    obtenerGoles(partido) {
        if (partido < 0) {
            throw new PartidoNegativoError();
        }

        for (let i = 0; i < this.estadisticas.length; i++) {
            if (this.estadisticas[i].partido === partido) {
                return this.estadisticas[i].goles;
            }
        }

        return 0;
    }

    // Mostrar los datos del jugador
    mostrarDatos() {
        console.log("Dorsal: " + this.dorsal);
        console.log("Nombre: " + this.nombre);
        console.log("Estadisticas:");

        for (let i = 0; i < this.estadisticas.length; i++) {
            console.log(
                "Partido " + this.estadisticas[i].partido +
                " - Goles: " + this.estadisticas[i].goles
            );
        }
    }
}


/* CLASE EQUIPO */

class Equipo {
    constructor(nombre) {
        this.nombre = nombre;
        this.jugadores = [];
    }

    getNombre() {
        return this.nombre;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    // Añadir un jugador al equipo
    anadirJugador(jugador) {
        for (let i = 0; i < this.jugadores.length; i++) {
            if (this.jugadores[i] === jugador) {
                throw new JugadorRepetidoError();
            }

            if (this.jugadores[i].getDorsal() === jugador.getDorsal()) {
                throw new DorsalRepetidoError();
            }
        }

        this.jugadores.push(jugador);
    }

    // Borrar un jugador del equipo
    borrarJugador(jugador) {
        for (let i = 0; i < this.jugadores.length; i++) {
            if (this.jugadores[i] === jugador) {
                this.jugadores.splice(i, 1);
                return;
            }
        }

        console.log("El jugador no esta en el equipo");
    }

    // Mostrar todos los jugadores
    mostrarJugadores() {
        console.log("Equipo: " + this.nombre);

        for (let i = 0; i < this.jugadores.length; i++) {
            console.log("--------------------");
            this.jugadores[i].mostrarDatos();
        }
    }
}


/* PRUEBAS */

// Creamos los jugadores
let jugador1 = new Jugador(9, "Karim Benzema");
let jugador2 = new Jugador(7, "Cristiano Ronaldo");
let jugador3 = new Jugador(10, "Luka Modric");
let jugador4 = new Jugador(8, "Andres Iniesta");

// Añadimos las estadisticas de Benzema
jugador1.anadirGolesPorPartidos(1, 1);
jugador1.anadirGolesPorPartidos(2, 3);
jugador1.anadirGolesPorPartidos(3, 2);
jugador1.anadirGolesPorPartidos(4, 0);
jugador1.anadirGolesPorPartidos(5, 2);

// Añadimos las estadisticas de Cristiano
jugador2.anadirGolesPorPartidos(1, 2);
jugador2.anadirGolesPorPartidos(2, 1);
jugador2.anadirGolesPorPartidos(3, 0);

// Creamos los equipos
let equipo1 = new Equipo("Real Madrid");
let equipo2 = new Equipo("Barcelona");

// Añadimos los jugadores
equipo1.anadirJugador(jugador1);
equipo1.anadirJugador(jugador2);
equipo1.anadirJugador(jugador3);

equipo2.anadirJugador(jugador4);

// Mostramos los equipos
equipo1.mostrarJugadores();
equipo2.mostrarJugadores();

// Consultamos los goles de un partido
console.log("Goles de Benzema en el partido 2: "
    + jugador1.obtenerGoles(2));

// Probamos las excepciones
try {
    jugador1.anadirGolesPorPartidos(6, -2);
} catch (error) {
    console.log("Error: " + error.message);
}

try {
    let jugador5 = new Jugador(-5, "Jugador de prueba");
    equipo1.anadirJugador(jugador5);
} catch (error) {
    console.log("Error: " + error.message);
}

try {
    equipo1.anadirJugador(jugador1);
} catch (error) {
    console.log("Error: " + error.message);
}

try {
    equipo1.anadirJugador(new Jugador(9, "Otro jugador"));
} catch (error) {
    console.log("Error: " + error.message);
}

// Borramos un jugador
equipo1.borrarJugador(jugador3);

console.log("Equipo despues de borrar a Modric:");
equipo1.mostrarJugadores();
