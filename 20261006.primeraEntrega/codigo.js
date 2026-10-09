
function Tiempo(anio, mes, dia, hora, minuto, segundo) {

    // Si todos los valores son 0, cogemos la fecha actual
    if (anio == 0 && mes == 0 && dia == 0 &&
        hora == 0 && minuto == 0 && segundo == 0) {

        let fecha = new Date();

        this.anio = fecha.getFullYear();
        this.mes = fecha.getMonth() + 1;
        this.dia = fecha.getDate();
        this.hora = fecha.getHours();
        this.minuto = fecha.getMinutes();
        this.segundo = fecha.getSeconds();

    } else {
        this.anio = anio;
        this.mes = mes;
        this.dia = dia;
        this.hora = hora;
        this.minuto = minuto;
        this.segundo = segundo;
    }

    // GETTERS
    this.getAnio = function() {
        return this.anio;
    };

    this.getMes = function() {
        return this.mes;
    };

    this.getDia = function() {
        return this.dia;
    };

    this.getHora = function() {
        return this.hora;
    };

    this.getMinuto = function() {
        return this.minuto;
    };

    this.getSegundo = function() {
        return this.segundo;
    };

    // SETTERS
    this.setAnio = function(anio) {
        this.anio = anio;
    };

    this.setMes = function(mes) {
        this.mes = mes;
    };

    this.setDia = function(dia) {
        this.dia = dia;
    };

    this.setHora = function(hora) {
        this.hora = hora;
    };

    this.setMinuto = function(minuto) {
        this.minuto = minuto;
    };

    this.setSegundo = function(segundo) {
        this.segundo = segundo;
    };

    // Devuelve dd/mm/aaaa
    this.getFechaCompleta = function() {
        let dia = this.dia;
        let mes = this.mes;

        if (dia < 10) {
            dia = "0" + dia;
        }

        if (mes < 10) {
            mes = "0" + mes;
        }

        return dia + "/" + mes + "/" + this.anio;
    };

    // Devuelve hh:mm:ss
    this.getHoraCompleta = function() {
        let hora = this.hora;
        let minuto = this.minuto;
        let segundo = this.segundo;

        if (hora < 10) {
            hora = "0" + hora;
        }

        if (minuto < 10) {
            minuto = "0" + minuto;
        }

        if (segundo < 10) {
            segundo = "0" + segundo;
        }

        return hora + ":" + minuto + ":" + segundo;
    };

    // Comprueba si el año es bisiesto
    this.esBisiesto = function() {
        if (this.anio % 4 == 0 &&
            (this.anio % 100 != 0 || this.anio % 400 == 0)) {
            return true;
        } else {
            return false;
        }
    };

    // Compara si es mayor que otro tiempo
    this.esMayor = function(otroTiempo) {
        let fecha1 = new Date(
            this.anio, this.mes - 1, this.dia,
            this.hora, this.minuto, this.segundo
        );

        let fecha2 = new Date(
            otroTiempo.anio, otroTiempo.mes - 1, otroTiempo.dia,
            otroTiempo.hora, otroTiempo.minuto, otroTiempo.segundo
        );

        return fecha1.getTime() > fecha2.getTime();
    };

    // Compara si es menor que otro tiempo
    this.esMenor = function(otroTiempo) {
        let fecha1 = new Date(
            this.anio, this.mes - 1, this.dia,
            this.hora, this.minuto, this.segundo
        );

        let fecha2 = new Date(
            otroTiempo.anio, otroTiempo.mes - 1, otroTiempo.dia,
            otroTiempo.hora, otroTiempo.minuto, otroTiempo.segundo
        );

        return fecha1.getTime() < fecha2.getTime();
    };

    // Comprueba si son iguales
    this.esIgual = function(otroTiempo) {
        let fecha1 = new Date(
            this.anio, this.mes - 1, this.dia,
            this.hora, this.minuto, this.segundo
        );

        let fecha2 = new Date(
            otroTiempo.anio, otroTiempo.mes - 1, otroTiempo.dia,
            otroTiempo.hora, otroTiempo.minuto, otroTiempo.segundo
        );

        return fecha1.getTime() == fecha2.getTime();
    };

    // Suma la hora de otroTiempo
    this.sumaHora = function(otroTiempo) {
        let fecha = new Date(
            this.anio, this.mes - 1, this.dia,
            this.hora, this.minuto, this.segundo
        );

        fecha.setHours(
            fecha.getHours() + otroTiempo.hora,
            fecha.getMinutes() + otroTiempo.minuto,
            fecha.getSeconds() + otroTiempo.segundo
        );

        this.anio = fecha.getFullYear();
        this.mes = fecha.getMonth() + 1;
        this.dia = fecha.getDate();
        this.hora = fecha.getHours();
        this.minuto = fecha.getMinutes();
        this.segundo = fecha.getSeconds();
    };
}


// EJEMPLOS DE USO

let tiempo1 = new Tiempo(2024, 5, 10, 12, 30, 20);
let tiempo2 = new Tiempo(2025, 3, 15, 2, 10, 5);
let tiempo3 = new Tiempo(0, 0, 0, 0, 0, 0);

console.log("Fecha de tiempo1:", tiempo1.getFechaCompleta());
console.log("Hora de tiempo1:", tiempo1.getHoraCompleta());

console.log("Año:", tiempo1.getAnio());
console.log("Mes:", tiempo1.getMes());

tiempo1.setAnio(2023);
console.log("Año después de cambiarlo:", tiempo1.getAnio());

console.log("¿Es bisiesto?", tiempo1.esBisiesto());

console.log("¿tiempo1 es mayor que tiempo2?", tiempo1.esMayor(tiempo2));
console.log("¿tiempo1 es menor que tiempo2?", tiempo1.esMenor(tiempo2));
console.log("¿tiempo1 es igual que tiempo2?", tiempo1.esIgual(tiempo2));

console.log("Fecha actual:", tiempo3.getFechaCompleta());
console.log("Hora actual:", tiempo3.getHoraCompleta());

let tiempo4 = new Tiempo(2024, 5, 10, 12, 30, 20);
let tiempo5 = new Tiempo(0, 0, 0, 2, 15, 10);

tiempo4.sumaHora(tiempo5);

console.log("Después de sumar la hora:");
console.log("Fecha:", tiempo4.getFechaCompleta());
console.log("Hora:", tiempo4.getHoraCompleta());