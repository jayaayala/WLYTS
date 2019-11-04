var tiempos = document.getElementsByClassName('style-scope ytd-thumbnail-overlay-time-status-renderer');
var segundos = 0;
var tiemposOrdenados = [];

for(var i = 0; i < tiempos.length; i++)
{
	var tiempo = tiempos[i].innerText.split(":");
	var totalVideo = 0;
	if(tiempo.length == 3)
	{
		segundos = segundos + parseInt(tiempo[0], 10) * 60 * 60;
		segundos = segundos + parseInt(tiempo[1], 10) * 60;
		segundos = segundos + parseInt(tiempo[2], 10);
		totalVideo = parseInt(tiempo[0], 10) * 60 * 60 + parseInt(tiempo[1], 10) * 60 + parseInt(tiempo[2], 10);
	}
	if(tiempo.length == 2)
	{
		segundos = segundos + parseInt(tiempo[0], 10) * 60;
		segundos = segundos + parseInt(tiempo[1], 10);
		totalVideo = parseInt(tiempo[0], 10) * 60 + parseInt(tiempo[1], 10);
	}
	if(tiempo.length == 1)
	{
		segundos += parseInt(tiempo[0], 10);
		totalVideo = parseInt(tiempo[0], 10);
	}
	tiemposOrdenados.push(totalVideo / 60 / 60);
}
console.log(tiemposOrdenados.sort());
console.log("Nº vídeos: " + tiempos.length);
console.log("Horas: " + segundos/60/60);