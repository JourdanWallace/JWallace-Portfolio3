/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("document").ready(function() {
    $(".p:first").css({"background-color": "purple", "color": "red"});

    $(".p:last").css({"background-color": "orange", "color": "black"});

    $('#oneButton').bind('click', alertButtonClick);

    $('#twoButton').bind('hover', alertButtonHover);
    
    $('#replaceWHtml').bind('click', replaceWHtml);         
    $('#replaceWText').bind('click', replaceWText);

  
    $("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);

});



function alertButtonClick() {
    alert("There was a button clicked");
}

function mouseOverMe() {
    $("h1").html("MouseOn");
    $("p").html("You started touching the box");

}

function mouseOutMe() {
    $("h1").html("MouseOff");
    $("p").html("You stopped touching the box");
}

//function replaceWHtml () {   $('#button').html()}

//function replaceWHtml () {
    //$('#button').html()}


//function repeats() {
//  document.getElementById('buttons').innerHTML += '<input id ="addsubmit" onclick="repeats()";  type="submit" value= "Submit" style = "margin-top: 25px;">';
// };


