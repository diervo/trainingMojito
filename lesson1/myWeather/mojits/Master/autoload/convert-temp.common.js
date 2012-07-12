/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/

YUI.add('convert-temp', function (Y) {

/**
 * The Convert module.
 *
 * @module Convert
 */


    /**
     * Creator for the Convert class.
     *
     * @class Convert
     */
    Y.Convert = {

        /**
         * Convert Fahrenheit to Celsius
         * @method toCelsius
         * @param fahrenheit {Integer}
         */
        toCelsius: function (fahrenheit) {
            return Math.round((fahrenheit - 32) * (5 / 9));
        },

        /**
         * Convert Celsius to Fahrenheit
         * @method toFahrenheit
         * @param celsius {Integer}
         */
        toFahrenheit: function (celsius) {
            return Math.round(celsius * (9 / 5) + 32);
        }
    };

});