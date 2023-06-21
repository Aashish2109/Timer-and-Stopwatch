let [seconds, minutes, hours] = [0, 0, 0];
        let displayTime = document.getElementById("displayTime");
        let timer = null;
        function stopwatch() {
            seconds++;
            if (seconds == 60) {
                seconds = 0;
                minutes++;
                if (minutes == 60) {
                    minutes = 0;
                    hours++;
                }
            }

            let h = hours < 10 ? "0" + hours : hours;
            let m = minutes < 10 ? "0" + minutes : minutes;
            let s = seconds < 10 ? "0" + seconds : seconds;
            displayTime.innerHTML = h + ":" + m + ":" + s;
        }
        function watch() {
            if (timer !== null) {
                clearInterval(timer);
            }
            timer = setInterval(stopwatch, 1000);
        }
        function stop() {
            clearInterval(timer);// IF NOT INCLUDED STOP WILL NOT WORK
            timer = null;
        }
        function reset()
        {
            clearInterval(timer);
            timer = null;
            [seconds, minutes, hours] = [0, 0, 0];//IF NOT INCLUDED DOES NOT START FROM 00:00:00
            displayTime.innerHTML ="00:00:00";
        }