var rightNow = new Date();
var rightMonth = rightNow.getMonth();
var msRightNow = rightNow.getTime();
var Months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function DATEOFBIRTH() {
    var birthDate = prompt("Enter your Date of Birth", "mmm dd, yyyy");
    var BirthDate = new Date(birthDate);
    var msBirthDate = BirthDate.getTime();
    
    let totalmsBirthDate = (msRightNow - msBirthDate) / (1000 * 60 * 60 * 24);
    return totalmsBirthDate
}

function day() {
    day = rightNow.getDay();
    days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    result.innerHTML = days[day];
}

function dayspass() {
    result.innerHTML = "You are now " + DATEOFBIRTH().toFixed() + " days old";
}

function nextbirthday() {
    var birthDate = prompt("Enter your Date of Birth", "mmm dd, yyyy");
    var BirthDate = new Date(birthDate);
    var month = Months[BirthDate.getMonth()];
    var day = BirthDate.getDate();
    var nxtYear = rightNow.getFullYear() + 1;
    "mmm dd, 2019"
    var nextDateOfBirth = (new Date(month + " " + day + ", " + nxtYear).getTime() - msRightNow) / (1000 * 60 * 60 * 24);
    result.innerHTML = "Your next Birthday is after " + nextDateOfBirth.toFixed(1) + " days";
}

function greetuser() {
    var rightHour = rightNow.getHours();
    if (rightHour <= 9 && rightHour >= 5) {
        result.innerHTML = "Good Morning";
    }
    else if (rightHour >= 10 && rightHour <= 11) {
        result.innerHTML = "Good Day";
    }
    else if (rightHour >= 12 && rightHour <= 17) {
        result.innerHTML = "Good Afternoon";
    }
    else if (rightHour >= 18 && rightHour <= 19) {
        result.innerHTML = "Good Evening";
    }
    else {
        result.innerHTML = "Good Night";
    }
}