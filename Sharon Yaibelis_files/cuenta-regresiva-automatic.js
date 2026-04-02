window.addEventListener("DOMContentLoaded", function () {
    
var daysElement = document.getElementById("dia");
var monthsElement = document.getElementById("mes");
var yearElement = document.getElementById("anio");
var hourElement = document.getElementById("hora");

// Traduce el nombre del mes al inglés
function translateMonth(month) {
    switch (month.toLowerCase()) {
        case "enero": return "January";
        case "febrero": return "February";
        case "marzo": return "March";
        case "abril": return "April";
        case "mayo": return "May";
        case "junio": return "June";
        case "julio": return "July";
        case "agosto": return "August";
        case "septiembre": return "September";
        case "octubre": return "October";
        case "noviembre": return "November";
        case "diciembre": return "December";
        default: return month;
    }
}

// Obtiene los valores del día, mes, año y hora desde el HTML
var day = parseInt(daysElement.innerHTML, 10);
var month = translateMonth(monthsElement.innerHTML);
var year = parseInt(yearElement.innerHTML, 10);

// Obtiene la hora y AM/PM desde el HTML
var timeParts = hourElement.innerHTML.trim().split(' ');
var time = timeParts[0];
var period = timeParts[1];

// Convierte la hora a formato de 24 horas
var hour24 = parseInt(time.split(':')[0], 10);
if (period.toLowerCase() === 'pm' && hour24 !== 12) {
    hour24 += 12;
} else if (period.toLowerCase() === 'am' && hour24 === 12) {
    hour24 = 0;
}

// Construye la fecha para el contador regresivo
var countDownDate = new Date(month + " " + day + ", " + year + " " + hour24 + ":" + time.split(':')[1] + ":00").getTime();



var countdownInterval = setInterval(function() {
var now = new Date().getTime();

var timeRemaining = countDownDate - now;

var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
var hours = Math.floor(
(timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
);
var minutes = Math.floor(
(timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
);
var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;

if (timeRemaining < 0) {
clearInterval(countdownInterval);
document.getElementById("days").innerHTML = "0";
document.getElementById("hours").innerHTML = "0";
document.getElementById("minutes").innerHTML = "0";
document.getElementById("seconds").innerHTML = "0";
}
}, 1000);

})