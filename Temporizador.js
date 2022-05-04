var appForm = document.querySelector("#app form");

appForm.onsubmit = iniciarContador;

function iniciarContador(e){
	e.preventDefault();

	var input_dt = document.getElementById("input_dt").value;

	var data_alvo = new Date(input_dt);
	var data_atual = new Date();

	var data_diferenca = data_alvo.getTime() - data_atual.getTime();

	var total_millis = data_diferenca;

	var dias = parseInt(total_millis / (1000 * 60 * 60 * 24));
	total_millis -= dias * (1000 * 60 * 60 * 24);

	var horas = parseInt(total_millis / (1000 * 60 * 60));
	total_millis -= horas * (1000 * 60 * 60);

	var minutos = parseInt(total_millis / (1000 * 60));
	total_millis -= minutos * (1000 * 60);

	var segundos = parseInt(total_millis / (1000));

	atualizarTela(dias, horas, minutos, segundos);
	var t_d = dias; var t_h = horas;
	var t_m = minutos; var t_s = segundos;

	var timer_id = setInterval(function() {
		if(t_s > 0) { t_s -= 1; }
		else if(t_m > 0) { t_m -= 1; t_s = 59; }
		else if(t_h > 0) { t_h -= 1; t_m = 59; t_s = 59; }
		else if(t_d > 0) { t_d -= 1; t_h = 23; t_m = 59; t_s = 59; }
		else {
			alert("Chegou o grande dia!");
			clearInterval(timer_id);
		}

		console.log(t_d);
		console.log(t_h);
		console.log(t_m);
		console.log(t_s);

		atualizarTela(t_d, t_h, t_m, t_s);
	}, 1000);
}

function atualizarTela(d,h,m,s){
	var span_dia = document.getElementById("contador-dia");
	var span_hor = document.getElementById("contador-hor");
	var span_min = document.getElementById("contador-min");
	var span_seg = document.getElementById("contador-seg");

	span_dia.innerHTML = d < 10 ? '0' + d : d;
	span_hor.innerHTML = h < 10 ? '0' + h : h;
	span_min.innerHTML = m < 10 ? '0' + m : m;
	span_seg.innerHTML = s < 10 ? '0' + s : s;
}