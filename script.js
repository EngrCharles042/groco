let countDownDate = new Date("Jul 25, 2021 16:37:52").getTime();

let myTimer = setInterval(function () {
    let now = new Date().getTime();
    let timeleft = countDownDate - now;

    let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    document.getElementById("day").innerHTML = days + "d "
    document.getElementById("hour").innerHTML = hours + "h "
    document.getElementById("minute").innerHTML = minutes + "m "
    document.getElementById("second").innerHTML = seconds + "s"
}, 1000)




