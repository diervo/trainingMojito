/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('convert-temp', function (Y) {

    Y.Convert = {
        toCelsius: function (fahrenheit) {
            return Math.round((fahrenheit - 32) * (5 / 9));
        },

        toFahrenheit: function (celsius) {
            return Math.round(celsius * (9 / 5) + 32);
        }
    };

});