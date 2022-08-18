function validate(){
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var date = document.getElementById("date").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");


    var text;

    //DEcision making statement for client side form validation
    if(fname.length < 5){
        text = "please enter the valid name:";
        error_message.innerHTML=text;
        return false;
    }
    if(lname.length < 5){
        text = "please enter the valid name:";
        error_message.innerHTML=text;
        return false;
    }
    if(email.indexOf("@") == -1){
        text = "please enter the valid email:";
        error_message.innerHTML=text;
        return false;
    }
    if(isNaN(phone) || phone.length != 10){
        text = "please enter the valid number:";
        error_message.innerHTML=text;
        return false;
    }
    if(message.length < 50){
        text = "please enter the valid message:";
        error_message.innerHTML=text;
        return false;
    }
    alert("Form data is correct");
    return true;

}

function sendEmail(){
    Email.send({
        Host : "smtp.yourisp.com",
        Username : "username",
        Password : "password",
        To : 'newar4557@gmail.com',
        From : "newar45570@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 9000);    
}