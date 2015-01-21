/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("document").ready(function() {
    //This is the code that is making my accordion red
    $('h5').css('background-color', 'red');
//This is the code for the accordion, and "superhumans' is the class that the code for the accordion is under
    $('#superHumans').accordion({header: "h5"});
//Turns the background color of the first paragraph purple
    $(".p:first").css({"background-color": "purple", "color": "red"});
// Turns the background color of the last paragraph orange
    $(".p:last").css({"background-color": "orange", "color": "black"});
//Gives an alert that the button has been clicked
    $('#oneButton').bind('click', alertButtonClick);
//Gives the alert that the button has been hovered over
    $('#twoButton').bind('mouseover', alertButtonHover);
//When the button is clicked, it will replace code with new code 
    $('#fourButton').bind('click', replaceWHtml);
//Adds a new paragraph when the buttton is clicked
    $('#randPara').bind('click', addAPara);
//Replaces a new paragraph when the button is clicked 
    $('#removePara').bind('click', removeAPara);
//Replaces the text with new text
    $('#threeButton').bind('click', replaceWText);
//Hides the page
    $('#hide').bind('click', hideThePage);
//Shows the page
    $('#show').bind('click', showThePage);
//Fades the logo
    $('#fadeLogo').bind('click', fadeTheImage);
//Shows the logo
    $('#showLogo').bind('click', showTheImage);

});


//Tells what the alert will say when the button is clicked on
function alertButtonClick() {
    alert("There was a button clicked");
}
//Tells what the alert will say when the button is hovered over
function alertButtonHover() {
    alert("There was a button hovered over");
}
//Hides the page
function hideThePage() {
    $('#hide').css('visibility', 'invisible');
    $('div').hide('slide', {}, 2500);
    $('#show').hide('fold', {}, 2500);
}
//Shows the page going away
function showThePage() {
    $('div').show('fold', {}, 2500);
    $('#show').hide('puff', {}, 2500);
}
//Telling the code to remove the last paragraph
function removeAPara() {
    $('#randPara p:last').remove();
}
//Telling the code to add a paragraph
function addAPara() {
    $('#randPara').append('<p>ADDED</p>');
}
//The new code that is supposed to replace the html coode
function replaceWHtml() {
    $('#replaceWHTML').html('<h4>I\'m the awesomest of awesome h4</h4>');
}
//The new text that is supposed to replace the text
function replaceWText() {
    $('#replaceWText').text('<h4>I\'m the best tennis player at this school h4</h4>');
}
//Telling the  code to put this text in place of the removed paragraph
function removeAPara() {
    $('#randPara').html('<h1></h1>');
}
//Hide the logo by blowing it up into bits
function hideTheImage() {
    $('#logo').hide('explode', {}, 2500);
}
//Show the logo by unfolding it 
function showTheImage() {
    $('#logo').show('fold', {}, 2500);
}

