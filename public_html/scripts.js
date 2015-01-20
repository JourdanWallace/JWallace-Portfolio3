/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("document").ready(function() {
    $('h5').css('background-color', 'red');

    $('#superHumans').accordion({header: "h5"});

    $(".p:first").css({"background-color": "purple", "color": "red"});

    $(".p:last").css({"background-color": "orange", "color": "black"});

    $('#oneButton').bind('click', alertButtonClick);

    $('#twoButton').bind('mouseover', alertButtonHover);

    $('#fourButton').bind('click', replaceWHtml);

    $('#randPara').bind('click', addAPara);

    $('#removePara').bind('click', removeAPara);

    $('#threeButton').bind('click', replaceWText);

    $("h3").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);

    $('#show').css('visibility', 'hidden');

    $('#hide').bind('click', hideThePage);

    $('#show').bind('click', showThePage);

    $('#fiveButton').bind('click', FadeTheLogo);

});



function alertButtonClick() {
    alert("There was a button clicked");
}

function alertButtonHover() {
    alert("There was a button hovered over");
}

function mouseOutMe() {
    $("h1").html("MouseOff");
    $("p").html("You stopped touching the box");
}

function hideThePage() {
    $('#show').css('visibility', 'visible');
    $('div').hide('slide', {}, 2500);
    $('#show').show('fold', {}, 2500);
}

function showThePage() {
    $('div').show('fold', {}, 2500);
    $('#show').hide('puff', {}, 2500);
}

function removeAPara() {
    $('#randPara p:last').remove();
}

function addAPara() {
    $('#randPara').append('<p>ADDED</p>');
}

function replaceWHtml() {
    $('#replaceWHTML').html('<h4>I\'m the awesomest of awesome h4</h4>');
}

function replaceWText() {
    $('#replaceWText').text('<h4>I\'m the awesomest of awesome h4</h4>');
}

function removeAPara() {
    $('#randPara').html('<h1></h1>');
}

function FadeTheLogo() {
    $('#logo').fadeOut(2500);
}

