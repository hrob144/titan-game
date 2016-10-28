$(document).ready(function () {
    'use strict';
    
/* Prompts for userName when the Begin button is clicked */
    $('#beginButton').click(function () {
        $('#terminalLog').append('Please enter your name.<br/>');
        welcomeUser();
    });
    
/* Resets webpage when the Restart button is clicked */
    $('#resetButton').click(function () {
        location.reload();
    });
    
/* Makes Begin & Reset buttons interactive when clicked */
    
});
