let btnLogin = document.getElementById("login");
let btnSignUp = document.getElementById("signup");

let signIn = document.querySelector(".signin");
let signUp = document.querySelector(".signup");

btnLogin.onclick = function(){
    signIn.classList.add("active");
    signUp.classList.add("inActive");
}
btnSignUp.onclick = function(){
    signIn.classList.remove("active");
    signUp.classList.remove("inActive");
}

function displayDetails() {
    var Name = document.getElementById("name").value;

    var rates = document.getElementsByName('gender');
    var rate_value;
    for(var i = 0; i < rates.length; i++){
        if(rates[i].checked){
            rate_value = rates[i].value;
        }
    }
    //var ageValue = document.getElementById("age").value;
    document.getElementById("textBox").innerHTML = "Your Name is :" + Name + "<br/>" + "Gender is :" + rate_value + "<br />" ;

}
