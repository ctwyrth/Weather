function cityAlert(element) {
    alert("Data for " + element + " is not currently available.");
}

function removeMe(element) {
    document.querySelector("." + element).remove();
}

function convertTemps(scale) {
    console.log(scale);

    var celsiusTemps = [
        {high: 24, low: 18},
        {high: 27, low: 19},
        {high: 21, low: 16},
        {high: 26, low: 21}
    ]

    var temps = document.getElementsByClassName("temps");

    if ( scale == 'fahrenheit') {
        console.log(temps);

        for (var i = 0; i < temps.length; i++) {
            temps[i].innerHTML = "<span class='high'>" + Math.floor((celsiusTemps[i].high * 9 / 5) + 32)  + "º</span><span class='low'>" + Math.floor((celsiusTemps[i].low * 9 / 5) + 32) + "º</span>";
        }
    } else {
        for (var i = 0; i < temps.length; i++) {
            temps[i].innerHTML = "<span class='high'>" + celsiusTemps[i].high  + "º</span><span class='low'>" + celsiusTemps[i].low + "º</span>";
        }
    }
}