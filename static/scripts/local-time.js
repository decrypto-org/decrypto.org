function showLocalDates() {
    const datetimes = document.querySelectorAll("time")
    for (datetime of datetimes) {
        if (datetime.getAttribute("data-datetime")) {
            datetime.innerHTML = " / " + new Date(datetime.dataset["datetime"])
                .toLocaleString(undefined, {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                    hour: "numeric",
                    minute: "2-digit",
                    timeZoneName: "short"
                })
        }
    }
}

showLocalDates()
