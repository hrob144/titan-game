/*global $*/

function welcomeUser() {
    'use strict';
    $('form').submit(function (e) {
        e.preventDefault();
        var userName = $('#inputText').val();
        $('#terminalLog').append('Welcome, ' + userName + '<br/>');
        $('input[type=text], textarea').val('');
        $('#currentLevel').text('Welcome, ' + userName);
    });
}

$(document).ready(function () {
    'use strict';
    
/* Prompts for userName when the Begin button is clicked */
    $('#beginButton').click(function () {
        $('#terminalLog').append('Please enter your name.<br/>');
        welcomeUser();
    });
    
/* Resets webpage when the Restart button is clicked */
    $('#resetButton').click(function () {
        $('#terminalLog').text('Welcome to Titan XIV. Press "Begin" to start the simulation.');
        $('#currentLevel').text('Welcome');
    });
    
/* Makes Begin & Reset buttons interactive when clicked */
    
});