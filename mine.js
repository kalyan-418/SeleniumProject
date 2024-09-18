//code for js
function f1(){
    window.location.href = 'p2.html';
}

function f3(){
    window.location.href = 'p4.html';
}

function f2(){
    window.location.href = 'mine.html';
}
function func(){
    let selectEl = document.querySelector('#location');
    let out = selectEl.value;
    if(out =='Choose')
    {
        alert("Please choose a location.");
    }
};


function fun1(){
    let selectElement = document.querySelector('#payment');
    let output = selectElement.value;
    if(output == 'upi') {
        alert("Please select other payment method UPI not working");
    }   
};
function fun2(){
    let selectadd = document.querySelector('#add').value;    
    let op = selectadd.length;
    if(op<=5){
        alert("Enter address");
    }
    else{
        alert("Confirmed");
        window.location.href = 'popup.html';
    }
};
