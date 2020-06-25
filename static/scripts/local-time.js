function prettyTimeFromUtcTime(utcTime) {
    const earlyOrLate = (utcTime.getHours() < 12) ? "am" : "pm"
    const hours = (utcTime.getHours() == 12) ? 12 : utcTime.getHours() % 12
    return hours + ":" + utcTime.getMinutes().toString().padStart(2, "0")
        + earlyOrLate + " (" + Intl.DateTimeFormat().resolvedOptions().timeZone + ")"
}

function utcTimeFromString(string) {
    return new Date(Date.parse(string))
}

function showLocalSeminarTimes() {
    const spans = document.querySelectorAll("span")
    for (span of spans) {
        if ("date" in span.dataset) {
            span.innerHTML = prettyTimeFromUtcTime(utcTimeFromString(span.dataset["date"]))
        }
    }
}

showLocalSeminarTimes()
