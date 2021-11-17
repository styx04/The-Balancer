var form = document.getElementById('form');
form.addEventListener('submit',function(event){
    event.preventDefault();

    var username = document.getElementById('username').value;
    var balance = parseInt(document.getElementById('balance').value);
    var charge = parseInt(document.getElementById('charge').value);
    var credit = parseInt(document.getElementById('credit').value);
    var limit = parseInt(document.getElementById('limit').value);

    document.getElementById('welcome').innerHTML = "<b>Welcome</b> " + username;
    document.getElementById('welcome').style.fontSize = "15px";

    var new_balance = parseInt((balance + credit) - charge);
    document.getElementById('result').innerHTML = "<b>New Balance:</b>" + new_balance;

    if(new_balance >0){
        document.getElementById('message').innerHTML = "<b>Wohoo! Good job!😀</b>";
    }
    else{
        document.getElementById('message').innerHTML = "<b>Credit limit outreached😓</b>";
    }
})