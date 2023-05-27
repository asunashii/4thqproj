
let display = document.getElementById("summary");
function travelTicket() {

    let name, email, gender, dest, bday, tdate, time, bag;

    name = document.getElementById("inputName").value;
    email = document.getElementById("emailAdd").value;
    bday = document.getElementById("Birthdate").value;
    tdate = document.getElementById("travelDate").value;
    time = document.getElementById("time").value;
    gender = document.getElementsByName("gender");

    for (i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            gender = gender[i].value;
            console.log(gender)
        }
    }

    let result = ` Name: ${name} <br/> Email: ${email} <br/> Gender: ${gender} <br/> Birthday: ${bday} 
    <br/> Destination: ${bday} <br/> Date and Time: ${tdate}, ${time} <br/> Baggage check: ${bag} <br/> `;

    display.innerHTML = result;

    return false;
}

function clearForm() {
    display.innerHTML = "";
}


