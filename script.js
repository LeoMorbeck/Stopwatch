let sec = 0
let min = 0
let hr = 0
let interval


function twoDigits(digit){
    if(digit<10){
        return('0' + digit)
    } return digit
}

function start(){
    interval = setInterval(watch, 100)
}

function stop(){
    clearInterval(interval)
}

function reset(){
    clearInterval(interval)
    sec = 0
    min = 0
    document.getElementById('watch').innerText= '00:00'
}

function watch(){
    sec++
    if(sec === 60){
        min++
        sec = 0
    }
    document.getElementById('watch').innerText= `${twoDigits(min)}:${twoDigits(sec)}`
}
