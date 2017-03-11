var a = document.getElementById('FN').value;
var b = document.getElementById('SN').value;
var c = '';
if( sign === '+'){
function myfunction(){

c = parseInt(a) + parseInt(b);
window.alert(c);

}
}

else if(sign=='-'){

function myfunction(){

c = parseInt(a) - parseInt(b);
document.getElementById('demo').innerHTML = c;
}
}

else if(sign=='*'){

function myfunction(){

c = parseInt(a) * parseInt(b);
document.getElementById('demo').innerHTML = c;
}
}

else if(sign=='/'){
function myfunction(){

c = parseInt(a) / parseInt(b);
document.getElementById('demo').innerHTML = c;
}
}

else if(sign=='%'){
function myfunction(){

c = parseInt(a) % parseInt(b);
document.getElementById('demo').innerHTML = c;
}
}

else{

    document.write('plase try again');

}
