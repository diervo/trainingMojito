/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */

YUI.add('convert-temp-tests', function(Y) {

    var suite = new YUITest.TestSuite('convert-temp-tests'),
        controller = null,
        A = YUITest.Assert;

    suite.add(new YUITest.TestCase({

        name: 'Convert-temp user tests',

        setUp: function() {
        },
        tearDown: function() {
        },
        
        'test that module loads': function() {
            A.isObject(Y.Convert);
        },

        'test Fahrenheit to Celsius': function () {
            var c = Y.Convert.toCelsius(100);

            A.areSame(38, c, 'error converting to Celsius');
        }

    }));

    YUITest.TestRunner.add(suite);

}, '0.0.1', {requires: ['mojito-test', 'convert-temp']});
