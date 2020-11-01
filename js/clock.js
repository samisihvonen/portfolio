
setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let weekday = time.getDay();
    let weekdayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let currentWeekDay = weekdayName[weekday];
    let currentYear = time.getFullYear();
    let currentMonth = time.getMonth();
    let days = time.getDate();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    sec = sec < 10 ? "0" + sec : sec;
    min = min < 10 ? "0" + min : min;
    hour = hour < 10 ? "0" + hour : hour;

    let currentTime = currentWeekDay + " " + days + " . " + currentMonth + " . " + currentYear + " " + hour + " : "
        + min + " : " + sec;

    document.getElementById("clock")
        .innerHTML = currentTime;

}
showTime(); 