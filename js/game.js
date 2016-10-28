/*global $, userName, wakeUp*/

// This is the logic for the game

var userInput = $('#inputText').val();

function wakeUp() {
    'use strict';
    $('#terminalLog').append('<br/>');
    $('#terminalLog').append('=============================================================================================================<br/>');
    $('#terminalLog').append('Log date: October 26th, 2341<br/>');
    $('#terminalLog').append('Coordinates: 2.3AU from Arrival Sector Bravo<br/>');
    $('#terminalLog').append('Aboard spacecraft Titan XIV<br/>');
    $('#terminalLog').append('=============================================================================================================<br/>');
    $('#terminalLog').append('<br/>');
    $('#terminalLog').append('You wake up in your bunk aboard the Heart of Gold from a strange dream. One that you\'ve had countless times since your journey began nearly two and a                               half years ago.<br/>');
    $('#terminalLog').append('<br/>');
    $('#terminalLog').append('This time was no different ... plunged in a deep sea, you hear the sound of voices under the waves.<br/>');
    $('#terminalLog').append('Hundreds, if not thousands of voices, all crying out for someone--anyone--to answer their plea.<br/>');
    $('#terminalLog').append('But as you finally break the surface of the water, the cries are extinguished like a flickering candle.<br/>');
    $('#terminalLog').append('<br/>');
    $('#terminalLog').append('You look at your watch. It\'s the middle of the sleep schedule, and you doubt that anyone else onboard the transport is awake.<br/>');
    $('#terminalLog').append('<br/>');

    function wakeUpPrompt() {
        $('#terminalLog').append('It\'s time for your first decision. Do you want to go back to sleep, or get out of bed and stretch your legs?<br/>');
        $('#terminalLog').append('(a) sleep, (b) get up<br/>');
        switch (userInput) {
        case '':
            break;
        case 'sleep':
            $('#terminalLog').append('Fine. You roll back over and try to sleep, but it\'s not that easy ... Something doesn\'t feel quite right.<br/>');
            wakeUpPrompt();
            break;
        case 'get up':
            getUp();
            break;
        default:
            return wakeUpPrompt();
        }
    }
    
    wakeUpPrompt();
    
}

function welcomeUser() {
    'use strict';
    $('form').submit(function (e) {
        e.preventDefault();
        var userName = $('#inputText').val();
        $('#terminalLog').append('Welcome, ' + userName + '<br/>');
        $('input[type=text], textarea').val('');
        $('#currentLevel').text('Welcome, ' + userName);
        wakeUp();
    });
}
