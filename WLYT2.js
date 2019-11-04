var comparador = function(video1, video2)
{
	if(video1[2] < video2[2])
	{
		return(-1);
	}
	if(video2[2] < video1[2])
	{
		return(1);
	}
	return(0);
}

var videos = window["ytInitialData"].contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents[0].itemSectionRenderer.contents[0].playlistVideoListRenderer.contents;
var arrayVideos = [];
var duracionTotalSegundos = 0;

for(var i = 0; i < videos.length; i++)
{
	var video = videos[i];
	
	var tituloVideo = video.playlistVideoRenderer.title.simpleText;
	var duracionTotalVideoSegundos = parseInt(video.playlistVideoRenderer.lengthSeconds, 10);
	var duracionVideo = video.playlistVideoRenderer.lengthText.simpleText;
	
	arrayVideos.push([duracionVideo, tituloVideo, duracionTotalVideoSegundos]);
	
	duracionTotalSegundos += duracionTotalVideoSegundos;
}

console.log(arrayVideos.sort(comparador));
console.log("Horas: " + duracionTotalSegundos / 60 / 60);
console.log("Total vídeos: " + videos.length);
console.log("Media: " + duracionTotalSegundos / 60 / 60 / videos.length);