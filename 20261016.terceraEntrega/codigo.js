
class Carta {
    constructor(numero = 1, palo = "c") {
        this.setNumero(numero);
        this.setPalo(palo);
    }

    static copiar(carta) {
        return new Carta(carta.getNumero(), carta.getPalo());
    }

    // Métodos get
    getNumero() {
        return this.numero;
    }

    getPalo() {
        return this.palo;
    }

    setNumero(numero) {
        if (numero >= 1 && numero <= 13) {
            this.numero = numero;
        } else {
            console.log("Error: el numero debe estar entre 1 y 13");
        }
    }

    setPalo(palo) {
        if (palo === "c" || palo === "p" ||
            palo === "r" || palo === "t") {
            this.palo = palo;
        } else {
            console.log("Error: palo no valido");
        }
    }

    // Mostrar la carta
    mostrarCarta() {
        let numeroTexto = this.numero;
        let paloTexto = "";

        if (this.numero === 1) {
            numeroTexto = "As";
        } else if (this.numero === 11) {
            numeroTexto = "Jack";
        } else if (this.numero === 12) {
            numeroTexto = "Reina";
        } else if (this.numero === 13) {
            numeroTexto = "Rey";
        }

        if (this.palo === "c") {
            paloTexto = "Corazones";
        } else if (this.palo === "p") {
            paloTexto = "Picas";
        } else if (this.palo === "r") {
            paloTexto = "Rombos";
        } else if (this.palo === "t") {
            paloTexto = "Treboles";
        }

        console.log("Es el " + numeroTexto + " de " + paloTexto);
    }

    // Comparar dos cartas
    comparar(carta) {
        let resultado = 0;

        // Primero se comparan los numeros
        if (this.numero > carta.getNumero()) {
            resultado = 1;
        } else if (this.numero < carta.getNumero()) {
            resultado = -1;
        } else {
            let valorPalo = {
                "c": 1,
                "p": 2,
                "r": 3,
                "t": 4
            };

            if (valorPalo[this.palo] > valorPalo[carta.getPalo()]) {
                resultado = 1;
            } else if (valorPalo[this.palo] < valorPalo[carta.getPalo()]) {
                resultado = -1;
            }
        }

        // Mostraamos por consola
        if (resultado === 1) {
            console.log("La primera carta es la ganadora");
        } else if (resultado === -1) {
            console.log("La segunda carta es la ganadora");
        } else {
            console.log("Hay un empate");
        }

        return resultado;
    }
}

// EJEMPLOS

// Crear cartas
let carta1 = new Carta(7, "t");
let carta2 = new Carta(7, "c");
let carta3 = new Carta(12, "p");

// Mostrar cartas
carta1.mostrarCarta();
carta2.mostrarCarta();
carta3.mostrarCarta();

// Usar los metodos get
console.log("Numero de carta1: " + carta1.getNumero());
console.log("Palo de carta1: " + carta1.getPalo());

// Usar los metodos set
carta1.setNumero(10);
carta1.setPalo("r");

console.log("Despues de modificar carta1:");
carta1.mostrarCarta();

// Crear una copia
let carta4 = Carta.copiar(carta1);

console.log("Copia de carta1:");
carta4.mostrarCarta();

// Comparar cartas
console.log("Comparacion entre carta1 y carta2:");
console.log("Resultado: " + carta1.comparar(carta2));

console.log("Comparacion entre carta2 y carta3:");
console.log("Resultado: " + carta2.comparar(carta3));
