function timer() {
    const deadline = '2021-03-25'

    function getTimeRamaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(t/(24*3600*1000)),
            hours = Math.floor((t/(1000*60*60)%24)),
            minutes = Math.floor((t/1000/60)%60),
            seconds = Math.floor((t/1000)%60);

        return {
            'total' : t,
            'days' : days,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);
        updateClock()
        function updateClock() {
            const t = getTimeRamaining(endtime)
            days.innerHTML = t.days
            hours.innerHTML = t.hours
            minutes.innerHTML = t.minutes
            seconds.innerHTML = t.seconds

            if (t.total <= 0) {
                clearInterval(timeInterval)
            }
        }

    }

    setClock('.timer', deadline)
}

export default timer;