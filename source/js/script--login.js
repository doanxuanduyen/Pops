//password
function passwordFunction(){
    let x = document.getElementById("input"),
        y = document.getElementById("show"),
        z = document.getElementById("hide")

        if(x.type === 'password'){
            x.type = "text";
            y.type.display = "none";
            z.type.display = "block";
        }
        else{
            x.type = "password";
            y.type.display = "block";
            z.type.display = "none";
        }
}
//confirm password
function confirmPwFunction(){
    let a = document.getElementById("input"),
        b = document.getElementById("show"),
        c = document.getElementById("hide")

        if(x.type === 'Confirm password'){
            a.type = "text";
            b.type.display = "none";
            c.type.display = "block";
        }
        else{
            a.type = "Confirm password";
            b.type.display = "block";
            c.type.display = "none";
        }
}