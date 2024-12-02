function metrosParaKilometros(metros) {
    return metros / 1000;
}

function celsiusParaFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

module.exports = {
    metrosParaKilometros,
    celsiusParaFahrenheit
};
