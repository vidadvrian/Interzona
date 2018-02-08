var current_track = "";
var selected_track = "";
var music = document.getElementById('player');

var lst = document.getElementById ( "playlist" ).getElementsByTagName ( "button" );
var i = 1;
var mainmusic = document.getElementById('mainplayer');
var mainbutton =  document.getElementById('MainButton');
function setplayallbuttons(button,bl)
{
    var indx;
    for (indx = 0; indx < bl.length; indx++) {
	aux = bl[indx];
	if (aux.name != button.name) {
	    aux.setAttribute("class","play");
	}
    }

}

function playAudio(button)
{      
    selected_track = button.name;
    
    if (current_track != selected_track) {
	current_track = selected_track 
	music.src = current_track;
	music.load();
    }
    if (music.paused) {
	if (!mainmusic.paused) {
	    mainbutton.setAttribute("class","mainplay");
	    mainmusic.pause();
	    
	}
	
	music.play();
       	button.setAttribute("class","pause");
	// set all other tracks class = play
	setplayallbuttons(button,lst);
	
    } else {
    	music.pause();
	button.setAttribute("class","play");
    }
    
}

function playNextMainTrack()
{
    
    if (i >= lst.length) {
    	i = 0;
    }
	mainmusic.src = lst[i++].name;
	mainmusic.load();
	mainmusic.play();
    
}
function playMainAudio(button)
{
    if (mainmusic.paused) {
	if (!music.paused) {
	    music.pause();
	}
    	mainmusic.play();
        button.setAttribute("class","mainpause");
    	setplayallbuttons(button,lst);
    }
    
    else {
    	mainmusic.pause();
    	button.setAttribute("class","mainplay");
    }
   
}



