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
});

 

function alertButtonClick() {
    alert("There was a button clicked");
}

function alertButtonHover() {
    alert("There was a button hovered over");
}


   //function repeats() {
     //  document.getElementById('buttons').innerHTML += '<input id ="addsubmit" onclick="repeats()";  type="submit" value= "Submit" style = "margin-top: 25px;">';
   // };

    
