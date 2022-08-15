var user_name = document.getElementById('user_name');
var user_contact= document.getElementById('user_contact');
var user_address = document.getElementById('user_address');
var count1= document.getElementById('count1');
var count2= document.getElementById('count2');
var count3= document.getElementById('count3');
var count4= document.getElementById('count4');
var count5= document.getElementById('count5');
var count6= document.getElementById('count6');
var count7= document.getElementById('count7');
var count8= document.getElementById('count8');

function output(){

    let body= document.getElementById("body");
    body.innerHTML=" ";
    
    let div= document.createElement('div');
    div.setAttribute("id","summary");
    body.appendChild(div);
    
    let h1=document.createElement('h1');
    let elm= document.getElementById('summary');
    h1.innerHTML="Order Summary!";
    elm.appendChild(h1);

    var input1 = document.createElement("input");
    input1.type = "text";

    let h3=document.createElement('h3');
    h3.innerHTML="Total cost ($): "
    input1.value= count1.value*7+count2.value*7+count3.value*8+count4.value*8+count5.value*8+count6.value*9+count7.value*9+count8.value*10;
    // input.className = "css-class-name";
    elm.appendChild(h3); 
    elm.appendChild(input1);

    let h4=document.createElement('h4');
    h4.innerHTML="Total Items: ";
    var input2 = document.createElement("input");
    input2.type = "text";
    input2.value=count1.value*1+count2.value*1+count3.value*1+count4.value*1+count5.value*1+count6.value*1+count7.value*1+count8.value*1;
    elm.appendChild(h4);
    elm.appendChild(input2);

    let h2=document.createElement('h2');
    h2.innerHTML="Contact details: ";
    elm.appendChild(h2);
    let h44=document.createElement('h4');
    h44.innerHTML="Full name: ";
    elm.appendChild(h44);

    var input3 = document.createElement("input");
    input3.type = "text";
    input3.value=user_name.value;
    elm.appendChild(input3);

    let h444=document.createElement('h4');
    h444.innerHTML="Phone Number: ";
    elm.appendChild(h444);

    var input4 = document.createElement("input");
    input4.type = "text";
    input4.value=user_contact.value;
    elm.appendChild(input4);
}

var btn=document.getElementById('btn');
btn.addEventListener('click',output); 