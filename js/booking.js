function summaRise() {
    window.open("htdocs/summary.html");
}

let display = document.getElementById("ticket");
function travelTicket() {
    let name, email, gender, dest, bday, tdate, time, bag;

    name = document.getElementById("inputName").value;
    email = document.getElementById("emailAdd").value;
    gender = document.getElementsByName("gender").value;
    // dest = document.getElementsByName("gender").value;
    bday = document.getElementById("Birthdate").value;
    tdate = document.getElementById("travelDate").value;
    time = document.getElementById("time").time;
    bag = document.getElementsByName("baggage").value;

    gender = document.getElementsByName("gender");

    for (i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            gender = gender[i].value;
        }
        else {
            gender = "Did not select";
        }
    }

    let result = ` Name: ${name} <br/> Email: ${email} <br/> Gender: ${gender} <br/> Birthday: ${bday} 
    <br/> Destination: ${bday} <br/> Date and Time: ${tdate}, ${time} <br/> Baggage check: ${bag} <br/> `;


    display.innerHTML = result;

    return false;
}
