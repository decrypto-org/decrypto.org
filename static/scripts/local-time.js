function prettyTimeFromUtcTime(utcTime) {
    const earlyOrLate = (utcTime.getHours() < 12) ? "am" : "pm"
    const hours = (utcTime.getHours() == 12) ? 12 : utcTime.getHours() % 12
    return hours + ":" + utcTime.getMinutes().toString().padStart(2, "0")
        + earlyOrLate + " (" + Intl.DateTimeFormat().resolvedOptions().timeZone + ")"
}

function showLocalSeminarTimes() {
    const datetimes = document.querySelectorAll("time")
    for (datetime of datetimes) {
        if ("datetime" in datetime.dataset) {
            datetime.innerHTML =
                prettyTimeFromUtcTime(new Date(datetime.dataset["datetime"]))
        }
    }
}

showLocalSeminarTimes()
