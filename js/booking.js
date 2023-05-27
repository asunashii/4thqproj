
function calculateFare(){

};



let display = document.getElementById("summary");
function travelTicket() {
    let name, email, gender, dest, bday, tdate, time, bag;

    name = document.getElementById("inputName").value;
    email = document.getElementById("emailAdd").value;
    bday = document.getElementById("Birthdate").value;
    tdate = document.getElementById("travelDate").value;
    time = document.getElementById("time").value;
    dest = document.getElementById("Destination").value;
    gender = document.getElementsByName("gender");

    //changes am to pm etc
    x = time.substring(0, 2);
    console.log(x);

    if(x > 12){
        time = time + " pm";
    }
    else {
        time = time + " am";
    }


    for (i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            gender = gender[i].value;
            console.log(gender)
        }
    }

    let result = ` Name: ${name} <br/> Email: ${email} <br/> Gender: ${gender} <br/> Birthday: ${bday} 
    <br/> Destination: ${dest} <br/> Date and Time: ${tdate}, ${time} <br/> `;

    Price = calculateFare()
    display.innerHTML = result;

    return false;
}

function clearForm() {
    display.innerHTML = "";
}


