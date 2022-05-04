var sec=0
var min=0
var hr=0
var interval

function iniciarCronos() {
    play()
    interval = setInterval(play, 1000)
}

function pausarCronos() {
    clearInterval (interval)
}

function zerarCronos() {
    clearInterval(interval)
    sec=0
    min=0
    document.getElementById('tempoCronometro').innerText='00 : 00 : 00'
}

function play () {
    sec++
    if (sec == 60) {
        min++
        sec = 0
        if(min==60) {
            min=0
            hr++
        }
    } 
    document.getElementById('tempoCronometro') .innerText = doisDigitos(hr) + ' : ' + doisDigitos(min) + ' : ' + doisDigitos(sec) 
}

function doisDigitos(digitos) {
    if (digitos < 10 ) {
        return ('0'+ digitos)
    } else {
        return (digitos)
    }
}