
let rcar = document.querySelector("#red");
let rlane = document.querySelector('#rlane');
let rscore = 0;
let ycar = document.querySelector("#yellow");
let ylane = document.querySelector("#ylane");
let yscore = 0;
let rkey;
let ykey;
function move(key){
	if(key==rkey){

		rlane.children[rscore].removeChild(rcar);
		rscore++;
		rlane.children[rscore].appendChild(rcar);
		if(rscore==9){
			alert("Red won congratulations!")
		}
		getkey("red")
		
	}
	if(key==ykey){

		ylane.children[yscore].removeChild(ycar);
		yscore++;
		ylane.children[yscore].appendChild(ycar);
		if(yscore==9){
			alert("Blue won congratulations!")
		}
		getkey("yellow");
	}
}
function getkey(color){
	let check = Math.random();
	if (color == "red"){
		let show = document.querySelector("#keys").children[0];
		if (check < 0.1){
			rkey = 81;
			show.innerHTML="Q"
		}else if (check < 0.2){
			rkey = 87;
			show.innerHTML="W"
		}else if (check < 0.3){
			rkey = 69;
			show.innerHTML="E"
		}else if (check < 0.4){
			rkey = 82;
			show.innerHTML="R"
		}else if (check < 0.5){
			rkey = 65;
			show.innerHTML="A";
		}else if (check < 0.6){
			rkey = 83;
			show.innerHTML="S";
		}else if (check < 0.7){
			rkey = 68;
			show.innerHTML="D";
		}else if (check < 0.8){
			rkey = 70;
			show.innerHTML="F";
		}else if (check < 0.9){
			rkey = 89;
			show.innerHTML="Y";
		}else{
			rkey = 88;
			show.innerHTML="X";
		}
	}
 	if (color == "yellow"){
		let show = document.querySelector("#keys").children[1];
		if (check < 0.1){
			ykey = 90;
			show.innerHTML="Z"
		}else if (check < 0.2){
			ykey = 85;
			show.innerHTML="U"
		}else if (check < 0.3){
			ykey = 73;
			show.innerHTML="I"
		}else if (check < 0.4){
			ykey = 79;
			show.innerHTML="O"
		}else if (check < 0.5){
			ykey = 72;
			show.innerHTML="H";
		}else if (check < 0.6){
			ykey = 74;
			show.innerHTML="J";
		}else if (check < 0.7){
			ykey = 75;
			show.innerHTML="K";
		}else if (check < 0.8){
			ykey = 76;
			show.innerHTML="L";
		}else if (check < 0.9){
			ykey = 78;
			show.innerHTML="N";
		}else{
			ykey = 77;
			show.innerHTML="M";
		}
	}
 }

getkey("red");
getkey("yellow");

document.addEventListener("keydown", function(event){
	move(event.which);
})