/*global prompt, $*/
/*global currentHealth, maxHealth*/

var userName;
var maxHealth = 10;
var currentHealth = maxHealth;

$(document).ready(function () {
    'use strict';
    $('#startButton').click(function () {
        userName = prompt('Welcome to Titan XIV. Please enter your name.');
    });
});