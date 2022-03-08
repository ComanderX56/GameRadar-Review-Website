function JazzyMode(){
    var element = document.body;
    element.classList.toggle("JazzyMode");
    element.classList.remove("LightMode")
}




function SmallFont(){
    var element = document.body;
    element.classList.add("SmallFont");
    element.classList.remove("MediumFont")
    element.classList.remove("HugeFont")
}

function MediumFont(){
    var element = document.body;
    element.classList.add("MediumFont");
    element.classList.remove("SmallFont")
    element.classList.remove("HugeFont")
}

function HugeFont(){
    var element = document.body;
    element.classList.add("HugeFont")
    element.classList.remove("SmallFont")
    element.classList.remove("MediumFont")
}



function changetext(){
    var name = document.getElementById("welcomeform").fname.value;
    var welcome = "thanks for your review " + name + "! <br> <a href ='contacts.html'> <button>submit another form</button> </a>"
    document.getElementById("welcometext").innerHTML = welcome;
    ref
}