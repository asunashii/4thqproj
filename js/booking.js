let display = document.getElementById("summary");
let display2 = document.getElementById("summary2");

function travelTicket() {
    let name, email, gender, dest, bday, tdate, time, bag, disc;

    name = document.getElementById("inputName").value;
    email = document.getElementById("emailAdd").value;
    bday = document.getElementById("Birthdate").value;
    tdate = document.getElementById("travelDate").value;
    time = document.getElementById("time").value;
    dest = document.getElementById("Destination").value;
    disc = document.getElementById("discount").value;
    gender = document.getElementsByName("gender");

    //changes am to pm etc
    x = time.substring(0, 2);

    if (x > 12) {
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
    calculateFare();

    let result = `Here is your summary!<br/> <br/>Name: ${name} <br/> Email: ${email} <br/> Gender: ${gender} <br/> Birthday: ${bday} 
    <br/> <br/> Destination: ${dest} <br/> Date and Time of Travel: ${tdate}, ${time} <br/> Discount: ${disc}`;
    let result2 = `Dear ${name}, you are now ready to explore! <br/> Name: ${name} <br/> Email: ${email} <br/> Gender: ${gender} <br/> Birthday: ${bday} 
    <br/> <br/> Destination: ${dest} <br/> Date and Time of Travel: ${tdate}, ${time} <br/> Discount: ${disc}`;

    display.innerHTML = result;
    display2.innerHTML = result2;

    return false;
};

let output = document.getElementById("price");
function calculateFare() {
    let place = document.getElementById("Destination").value;
    let discount = document.getElementById("discount").value;

    let rate = 13.5; //fare for 1km
    let fare = 0;
    console.log(place)

    const near = ["Oton", "Leganes", "Pavia", "Zarraga", "Santa Barbara", "San Miguel"]; //9km - 19km away
    const mid = ["Tigbauan", "Guimbal", "New Lucena", "Alimodian", "Leon", "Cabatuan", "Pototan", "Maasin"
        , "Janiuay", "Badiangan"]; //20 - 30km away
    const far = ["Tubungan", "Igbaras", "Miag-ao", "San Joaquin", "Lambunao", "Calinog", "Anilao", "Banate"
        , "Dueñas", "Passi City", "San Enrique"]; // 40-50km away
    const veryFar = ["Barotac Viejo", "San Rafael", "Lemery", "Ajuy", "Sara", "Concepcion", "San Dionisio",
        "Batad", "Balasan", "Estancia", "Carles"]; //60-100km away


    let length;

    if (near.includes(place) == true) {
        fare = rate * 14;
    }
    else if (mid.includes(place) == true) {
        fare = rate * 25;
    }
    else if (far.includes(place) == true) {
        fare = rate * 45;
    }
    else if (veryFar.includes(place) == true) {
        fare = rate * 80;
    };

    console.log(fare);
    //discounts
    const disc = ["Student", "SC", "PWD"];
    if (disc.includes(discount) == true) {
        fare = fare - (fare * 0.2);
    }

    fare = Math.floor(fare);
    console.log(fare);

    output.innerHTML = "Price: ₱" + fare + ".00";
};

function clearForm() {
    display.innerHTML = "";
    output.innerHTML = "";
}

function redirect() {
    window.open("ticket.html");
}

