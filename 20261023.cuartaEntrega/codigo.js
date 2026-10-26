
class ExcepcionesCarta extends Error {
    constructor() {
        super("El palo/número no es correcto");
        this.name = "ExcepcionesCarta";
    }
}

class Carta {
    constructor(numero, palo) {
        // Comprobar que el numero sea correcto
        if (numero < 1 || numero > 13 || !Number.isInteger(numero)) {
            throw new ExcepcionesCarta();
        }

        // Comprobar que el palo sea correcto
        if (palo !== "t" && palo !== "r" &&
            palo !== "p" && palo !== "c") {
            throw new ExcepcionesCarta();
        }

        this.numero = numero;
        this.palo = palo;
    }

    // Metodos get
    getNumero() {
        return this.numero;
    }

    getPalo() {
        return this.palo;
    }

    // Metodos set
    setNumero(numero) {
        if (numero < 1 || numero > 13 || !Number.isInteger(numero)) {
            throw new ExcepcionesCarta();
        }

        this.numero = numero;
    }

    setPalo(palo) {
        if (palo !== "t" && palo !== "r" &&
            palo !== "p" && palo !== "c") {
            throw new ExcepcionesCarta();
        }

        this.palo = palo;
    }

    // Mostrar la carta
    mostrarCarta() {
        let nombreNumero = this.numero;
        let nombrePalo = "";

        if (this.numero === 1) {
            nombreNumero = "As";
        } else if (this.numero === 11) {
            nombreNumero = "Jack";
        } else if (this.numero === 12) {
            nombreNumero = "Reina";
        } else if (this.numero === 13) {
            nombreNumero = "Rey";
        }

        if (this.palo === "c") {
            nombrePalo = "Corazones";
        } else if (this.palo === "p") {
            nombrePalo = "Picas";
        } else if (this.palo === "r") {
            nombrePalo = "Rombos";
        } else if (this.palo === "t") {
            nombrePalo = "Treboles";
        }

        console.log("Es el " + nombreNumero + " de " + nombrePalo);
    }

    // Comparar dos cartas
    comparar(carta) {
        let resultado = 0;

        if (this.numero > carta.getNumero()) {
            resultado = 1;
        } else if (this.numero < carta.getNumero()) {
            resultado = -1;
        } else {
            let valores = {
                "c": 1,
                "p": 2,
                "r": 3,
                "t": 4
            };

            if (valores[this.palo] > valores[carta.getPalo()]) {
                resultado = 1;
            } else if (valores[this.palo] < valores[carta.getPalo()]) {
                resultado = -1;
            }
        }

        if (resultado === 1) {
            console.log("Gana la carta actual");
        } else if (resultado === -1) {
            console.log("Gana la carta recibida");
        } else {
            console.log("Hay un empate");
        }

        return resultado;
    }
}

// Prueba del ejercicio
try {
    let c1 = new Carta(1, "t");
    // let c2 = new Carta(-5, "rombos");

    c1.mostrarCarta();
    // c2.mostrarCarta();

} catch (e) {
    console.log(e.message);
}
