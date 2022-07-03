let endDate = new Date("Mar 15, 2024 12:00:00");
let timer = setInterval(() => {

    const now = new Date().getTime();
    const timeLeft = Number(endDate) /*endDate.getTime()*/ - now;
    
    if (timeLeft >= 0) {
        
        let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let mins = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        let secs = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        const timerDays = document.getElementById('timer-days') as HTMLDivElement | null;
        const timerHours = document.getElementById('timer-hours') as HTMLDivElement | null;
        const timerMins = document.getElementById('timer-mins') as HTMLDivElement | null;
        const timerSecs = document.getElementById('timer-secs') as HTMLDivElement | null;
        
        if (timerDays!= null) {
            timerDays.innerHTML = days + "<span class='label'>DAY(S)</span>";
        }

        if ( timerHours != null ) {
            timerHours.innerHTML = ("0"+hours).slice(-2) + "<span class='label'>HR(S)</span>";
        }

        if (timerMins != null) {
            timerMins.innerHTML = ("0"+mins).slice(-2) + "<span class='label'>MIN(S)</span>"; 
        }

        if (timerSecs != null) {
            timerSecs.innerHTML = ("0"+secs).slice(-2) + "<span class='label'>SEC(S)</span>";
        }
        
    } else {
        
        const timerOver = document.getElementById('timer') as HTMLDivElement | null;
        
        if (timerOver != null) {
            timerOver.innerHTML = "The countdown is over!";
        }
    
    }
}, 1000);

function clicked() {
    alert(endDate);
}

