function relogio (){
    
    let data = new Date();
    let hr = data.getHours();
    let min = data.getMinutes();
    let s = data.getSeconds();

    let tempo_real = 
    `${String(hr).length === 1 ? `0${hr}` : hr}` + ` :`+ `
     ${String(min).length === 1 ? `0${min}` : min}` + ` :`+ `
     ${String(s).length === 1 ? `0${s}` : s}`;
    let tempo = document.getElementById('relogio');
    tempo.innerHTML = tempo_real;
}
setInterval(relogio,1000)

function updateClock(){
    var now = new Date();
    var dname = now.getDay(),
        mo = now.getMonth(),
        dnum = now.getDate(),
        yr = now.getFullYear(),
        hou = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds();

        Number.prototype.pad = function(digits){
          for(var n = this.toString(); n.length < digits; n = 0 + n);
          return n;
        }

        var months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
        var week = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
        var ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds"];
        var values = [week[dname], dnum.pad(2), `de ` + months[mo], yr, hou.pad(2), min.pad(2), sec.pad(2), ];
        for(var i = 0; i < ids.length; i++)
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
  }

  function initClock(){
    updateClock();
    window.setInterval("updateClock()", 1);
  }

