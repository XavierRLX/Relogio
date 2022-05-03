let cronos = document.getElementById('cronometro');
let temp = document.getElementById('temporizador');
let tempCronos = document.getElementById('tempoCronometro');
let tempTemp = document.getElementById('tempoTemporizador');
let visorCronos = document.getElementById('visorCronometro');
let visortemp = document.getElementById('visorTemporizador');
let calendario = document.getElementById('calendario');
let relogioP = document.getElementById('relogio');
let imgCronos = document.getElementById('imagemCrono');
let fundoUm = document.getElementById('fundoum');
let fundoDois = document.getElementById('Fundo-dois');
let imgRel = document.getElementById('imagemRelogio');


imgCronos.addEventListener('click', CronosInline);
imgRel.addEventListener('click', RelogioInline)
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
    tempCronos.style.display = 'inline'
    cronos.style.backgroundColor = '#272626' 
    visorCronos.style.display = 'inline'


    temp.style.boxShadow = 'none'
    tempTemp.style.display = 'none'
    temp.style.backgroundColor = '#1b1b1b'
    visortemp.style.display = 'none'
    calendario.style.display = 'none'
}

function temporizadorInline(){

    temp.style.boxShadow = '0px 0px 20px black'
    tempTemp.style.display = 'inline'
    temp.style.backgroundColor = '#272626'
    visortemp.style.display = 'inline'
    calendario.style.display = 'inline'

    cronos.style.boxShadow = 'none'
    tempCronos.style.display = 'none'
    cronos.style.backgroundColor = '#1b1b1b'
    visorCronos.style.display = 'none'
    
}







