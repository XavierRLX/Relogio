let cronos = document.getElementById('cronometro');
let temp = document.getElementById('temporizador');
let tempCronos = document.getElementById('tempoCronometro');
let visorCronos = document.getElementById('visorCronometro');
let tempTempo = document.getElementById('tempoTemporizador');
let calendario = document.getElementById('calendario');
let relogioP = document.getElementById('relogio');
let imgCronos = document.getElementById('imagemCrono');
let fundoUm = document.getElementById('fundoum');
let fundoDois = document.getElementById('Fundo-dois');
let imgRel = document.getElementById('imagemRelogio');
let appTemp = document.getElementById('app');
let imagemRelogio = document.getElementById('imagemRelogio')


imgCronos.addEventListener('click', CronosInline);
imgRel.addEventListener('click', RelogioInline);
cronos.addEventListener('click', cronometroInline);
temp.addEventListener('click', temporizadorInline);

function CronosInline(){
    fundoUm.style.display = 'none'
    fundoDois.style.display = 'inline'

}
function RelogioInline(){
    fundoUm.style.display = 'inline'
    fundoDois.style.display = 'none'
}
function cronometroInline(){

    cronos.style.boxShadow = '0px 0px 20px black'
    visorCronos.style.display = 'inline'
    tempCronos.style.display = 'inline'
    imagemRelogio.style.marginTop = '5.5px'

    tempTempo.style.display = 'none'
   appTemp.style.display = 'none'
}

function temporizadorInline(){

   tempTempo.style.display = 'inline'
   appTemp.style.display = 'inline'
   imagemRelogio.style.marginTop = '75px'

   visorCronos.style.display = 'none'
   tempCronos.style.display = 'none'
}







