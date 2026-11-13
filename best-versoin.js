let qw1=document.getElementById("qw1");
let qw2=document.getElementById("qw2");
let qw3=document.getElementById("qw3");
let qw4=document.getElementById("qw4");
let qw5=document.getElementById("qw5");
let qw6=document.getElementById("qw6");
let qw7=document.getElementById("qw7");
let aqq2=document.getElementById("aqq2");
let aqq5;
let aqw1=document.getElementById("aqw1");

aqq2.onclick=function(){
if(qw1.checked){
    aqq5=Number(qw7.value);
    aqq5= (aqq5*9/5)+32;
    qw7.value=aqq5 +"°F";
}
else 
    if(qw2.checked){
 aqq5=Number(qw7.value);
    aqq5= (aqq5-32)*5/9;
     qw7.value=aqq5 +"°C";
}
else 
    if(qw3.checked){
 aqq5=Number(qw7.value);
    aqq5= aqq5+273.15;
     qw7.value=aqq5 +" K";
}
else
    if(qw4.checked){
 aqq5=Number(qw7.value);
    aqq5= aqq5-273.15;
     qw7.value=aqq5 +"°C";
}
else
    if(qw5.checked){
 aqq5=Number(qw7.value);
    aqq5= (aqq5-32)*5/9+273.15;
      qw7.value=aqq5 +"K";
}
else
    if(qw6.checked){
 aqq5=Number(qw7.value);
    aqq5= (aqq5-273.15)*9/5+32;
     qw7.value=(aqq5 +"°F");
}
else
    
aqw1.textContent = "Invalid ! please check the choice";   
};