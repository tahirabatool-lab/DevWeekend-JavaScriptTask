document.getElementById('btn').addEventListener('click', function () {
    let dob = document.getElementById('dob').value;
    if (dob === '') {
        alert("Please enter your date of birth");
        return;
    }

    let birthdate = new Date(dob);
    let today = new Date();
    if (birthdate > today) {
        alert("Date of birth cannot be in the future ");
        return;
    }
    let years = today.getFullYear() - birthdate.getFullYear();
    let months = today.getMonth() - birthdate.getMonth();
    let days = today.getDate() - birthdate.getDate();

    if (days < 0) {
        months--;
        let prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById('age').innerText = "Your Age is: " + years + " year old";


    let result = document.getElementById('result');
    result.innerHTML =
        ` You are exactly <strong> ${years} year , ${months} month , ${days} days </strong> old.`;
    result.style.display = 'block';


});
